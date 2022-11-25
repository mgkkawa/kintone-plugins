import Swal from 'sweetalert2'
import { DELETE_KEYS } from '.'
export const getHeaders = (token, isContentType = false) => {
  const headers = {
    'X-Cybozu-API-Token': token
  }
  if (isContentType) headers['Content-Type'] = 'application/json'
  return headers
}

export const getFields = async appId => {
  const fields = await kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', { app: appId }).then(resp => {
    const properties = resp.properties
    for (let key in properties) {
      if (DELETE_KEYS.includes(key)) delete properties[key]
    }
    return properties
  })
  return await fields
}

export const checkAppId = appId => {
  const num = Number(appId)
  if (isNaN(num)) return false

  const str = String(appId)
  if (!(str.length === 3)) return false

  return true
}

export const checkGuestSpace = async () => {
  const currentUrl = kintone.api.url('/k/v1/app', true)
  if (currentUrl.indexOf('guest') > -1) {
    const appId = kintone.app.getId()
    const guestSpaceId = await getGuestSpaceId(appId)
    return guestSpaceId
  } else {
    return false
  }
}

export const getGuestSpaceId = async appId => {
  const appInfo = await getAppInfo(appId)
  const guestSpaceId = appInfo.spaceId
  return guestSpaceId
}

export const getAppInfo = async appId => {
  return await kintone
    .api(kintone.api.url('/k/v1/app', true), 'GET', { id: appId })
    .then(resp => resp)
    .catch(error => error)
}

export const getApps = async appId => {
  const isGuest = Boolean(await checkGuestSpace())
  const appInfo = await kintone.api(kintone.api.url('/k/v1/app', isGuest), 'GET', { id: Number(appId) })
  const spaceId = appInfo.spaceId
  const url = kintone.api.url('/k/v1/space', isGuest)

  const response = await kintone.api(url, 'GET', { id: spaceId })
  return response.attachedApps
}

export const getRecords = (appId, offset = 0, limit = 500, opt_records = null) => {
  // console.log(opt_records)
  let allRecords = opt_records || []
  const url = kintone.api.url('/k/v1/records', true)
  const params = {
    app: appId,
    query: `order by レコード番号 asc limit ${limit} offset ${offset}`
  }

  return kintone
    .api(url, 'GET', params)
    .then(async resp => {
      allRecords = allRecords.concat(resp.records)

      // 取得件数が最大値と同じ→まだ取得できるレコードがあるということになるので、再帰呼び出しを行う
      if (resp.records.length === limit) {
        return await getRecords(appId, offset + limit, limit, allRecords)
      }
      return allRecords
    })
    .catch(error => {
      console.error(error)
    })
}

export const postAll = async (appId, token, records) => {
  const post_records = []
  const next_records = []
  const headers = getHeaders(token, true)

  records.forEach((record, index) => {
    if (index < 100) {
      post_records.push(record)
    } else {
      next_records.push(record)
    }
  })

  const url = kintone.api.url('/k/v1/records', true)
  const params = {
    app: appId - 0,
    records: post_records
  }
  console.log(params)
  await kintone
    .proxy(url, 'POST', headers, params)
    .then(resp => resp)
    .catch(error => console.error(JSON.parse(error).message))

  if (next_records.length) {
    await postAll(appId, headers, next_records)
  }
}

export const putAll = async (appId, records) => {
  const put_records = []
  const next_records = []

  records.forEach((record, index) => {
    if (index < 100) {
      put_records.push(record)
    } else {
      next_records.push(record)
    }
  })

  const url = kintone.api.url('/k/v1/records', true)

  const params = {
    app: appId,
    records: put_records
  }

  await kintone
    .api(url, 'PUT', params)
    .then(resp => resp)
    .catch(error => console.error(error))

  if (next_records.length) {
    await putAll(appId, next_records)
  }
}

export const post = async (appId, record) => {
  const url = kintone.api.url('/k/v1/record', true)
  const body = {
    app: appId,
    record: record
  }
  return await kintone.api(url, 'POST', body).catch(error => error)
}

export const allPost = async (appId, token, records) => {
  const posts = []
  const nexts = []
  console.log(appId)

  records.forEach((record, index) => {
    index < 100 ? posts.push(record) : nexts.push(record)
  })

  console.log(appId)
  const url = kintone.api.url('/k/v1/records', true)
  const body = {
    app: appId,
    records: posts
  }

  await kintone
    .proxy(url, 'POST', getHeaders(token, true), body)
    .then(resp => {
      const obj = JSON.parse(resp[0])
      console.log(obj)
      if (obj.message) throw new Error(obj)
    })
    .catch(async error => {
      console.log(error)
      const url = kintone.api.url('/k/v1/record', true)

      for (let record of records) {
        const body = {
          app: appId,
          record: record
        }

        await kintone
          .proxy(url, 'POST', getHeaders(token, true), body)
          .then(resp => {
            const obj = JSON.parse(resp[0])
          })
          .catch(error => {
            const window = $(Swal.getHtmlContainer())
            const html = window.html()
          })
      }
    })

  if (nexts.length) {
    await allPost(appId, token, nexts)
  }
}

export const allPuts = async (appId, records, updateKey) => {
  const puts = []
  const next = []

  records.forEach((record, index) => {
    const stringify = JSON.stringify(record)
    const record_ = JSON.parse(stringify)
    const obj = {
      updateKey: {
        field: updateKey,
        value: null
      },
      record: record_
    }

    for (let key in record_) {
      if (key == updateKey) {
        obj.updateKey.value = record_[key].value
        delete obj.record[key]
        break
      }
    }

    index < 100 ? puts.push(obj) : next.push(record)
  })
  const url = kintone.api.url('/k/v1/records', true)
  const body = {
    app: appId,
    records: puts
  }

  await kintone
    .api(url, 'PUT', body)
    .then(resp => {
      console.log(resp)
    })
    .catch(async error => {
      const row1 = '<div><b>レコードの更新が出来ませんでした。</b></div>'
      const row2 = `<div>${error.message}</div>`
      await Swal.fire({
        icon: 'error',
        html: row1 + row2
      })
      console.log(error)
    })
}

export const allPosts = async (appId, records, token) => {
  console.log(records)
  const posts = []
  const next = []

  records.forEach((record, index) => {
    index < 100 ? posts.push(record) : next.push(record)
  })

  const url = kintone.api.url('/k/v1/records', true)
  const body = { app: appId, records: posts }
  const headers = getHeaders(token, true)

  await kintone
    .proxy(url, 'POST', headers, body)
    .then(resp => {
      const obj = JSON.parse(resp[0])
      if (obj.message) throw new Error(JSON.stringify(obj))
    })
    .catch(async error => {
      error = JSON.parse(error.message)
      const posts2 = []
      const puts = []
      const errors = error.errors
      const keys = Object.keys(errors).map(key => key.replace(/[^0-9]/g, ''))

      posts.forEach((record, index) => {
        keys.includes('' + index) ? puts.push(record) : posts2.push(record)
      })

      const puts2 = puts.map(record => {
        const serial = record.法人番号.value
        delete record.法人番号
        return {
          updateKey: {
            field: '法人番号',
            value: serial
          },
          record: record
        }
      })

      await allPosts(appId, posts2, token)

      await kintone
        .proxy(url, 'PUT', headers, { app: appId, records: puts2 })
        .then(resp => {
          resp = JSON.parse(resp[0])
          if (resp.message) throw new Error(resp)
        })
        .catch(error => console.log(error))
    })

  if (next.length) await allPosts(appId, next, token)
}
