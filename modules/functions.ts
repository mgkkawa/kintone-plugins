import Swal from 'sweetalert2'
import { DELETE_KEYS } from '../03-callhistory/src/modules'

<<<<<<< HEAD
export const replaceEnter = str => {
  return str.replace(/\n|\r\n|\r/g, '<br>')
}

export const getHeaders = (token, isContentType = false) => {
  const headers = {
    'X-Cybozu-API-Token': token,
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

export const getConfig = id => {
  let config = kintone.plugin.app.getConfig(id)

  for (let key in config) {
    const value = config[key]
    try {
      config[key] = parse(value)
    } catch {
      continue
    }
  }

  return config
}

export const checkConfig = config => {
  for (let key in config) {
    const value = config[key]
    try {
      config[key] = JSON.stringify(value)
    } catch {
      config[key] = String(value)
    }
  }

  return config
}

export const getRecords = (appId, offset = 0, limit = 500, opt_records = null) => {
  // console.log(opt_records)
  let allRecords = opt_records || []
  const url = kintone.api.url('/k/v1/records', true)
  const params = {
    app: appId,
    query: `order by レコード番号 asc limit ${limit} offset ${offset}`,
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
    records: post_records,
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
    records: put_records,
  }

  await kintone
    .api(url, 'PUT', params)
    .then(resp => resp)
    .catch(error => console.error(error))

  if (next_records.length) {
    await putAll(appId, next_records)
  }
=======
export const compCheck = async html => {
  return await Swal.fire({
    html: html,
    confirmButtonText: 'はい',
    showCancelButton: true,
    cancelButtonText: 'いいえ',
    allowEnterKey: false,
    allowEscapeKey: false,
    allowOutsideClick: false
  })
>>>>>>> c47b1ce3b18a70983b20fe90cef2f5565ca576dd
}

export const getItems = (fields, isField = false) => {
  const items = []

  for (let key in fields) {
    const field = fields[key]
    if (DELETE_KEYS.includes(field.type)) continue
    items.push({ label: field.label, value: isField ? field.label : field.code })
  }
  items.sort((a, b) => {
    if (!a.label || !b.label) return true
    const _a = a.label.split('').map(value => value.codePointAt(0))
    const _b = b.label.split('').map(value => value.codePointAt(0))

    let check
    let result
    const array = _a
    const target = _b

    array.forEach((num, index) => {
      if (check || !target[index] || num == target[index]) return
      result = num - target[index]
      check = true
    })

    return result
  })
  items.unshift({ label: '-----', value: '-----' })
  return items
}

export const getOptions = (fields, isField) => {
  const options = []

  for (let key in fields) {
    const field = fields[key]
    if (DELETE_KEYS.includes(field.type)) continue
    options.push({ label: field.label, value: isField ? field.label : field.code })
  }
}

export const labelSort = fields => {
  fields.sort((a, b) => {
    if (!a.label || !b.label) return true
    const _a = a.label.split('').map(value => value.codePointAt(0))
    const _b = b.label.split('').map(value => value.codePointAt(0))

    let check
    let result
    const array = _a
    const target = _b

    array.forEach((num, index) => {
      if (check || !target[index] || num == target[index]) return
      result = num - target[index]
      check = true
    })

    return result
  })
  return fields
}

export const parse = s => {
  // preserve newlines, etc - use valid JSON
  s = s
    .replace(/\\n/g, '\\n')
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, '\\&')
    .replace(/\\r/g, '\\r')
    .replace(/\\t/g, '\\t')
    .replace(/\\b/g, '\\b')
    .replace(/\\f/g, '\\f')

  // remove non-printable and other non-valid JSON chars
  s = s.replace(/[\u0000-\u0019]+/g, '')

  return JSON.parse(s)
}

<<<<<<< HEAD
export const post = async (appId, record) => {
  const url = kintone.api.url('/k/v1/record', true)
  const body = {
    app: appId,
    record: record,
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
    records: posts,
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
          record: record,
        }

        await kintone
          .proxy(url, 'POST', getHeaders(token, true), body)
          .then(resp => {
            const obj = JSON.parse(resp[0])
            // console.log(obj)
          })
          .catch(error => {
            const window = $(Swal.getHtmlContainer())
            const html = window.html()
            // console.log(html)
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
    const obj = {
      updateKey: {
        field: updateKey,
        value: null,
      },
      record: record,
    }

    for (let key in record) {
      if (key == updateKey) {
        obj.updateKey.value = record[key].value
        delete obj.record[key]
        break
      }
    }

    index < 100 ? puts.push(obj) : next.push(record)
  })
  const url = kintone.api.url('/k/v1/records', true)
  const body = {
    app: appId,
    records: puts,
  }

  await kintone
    .api(url, 'PUT', body)
=======
export const duplicationPhoneCheck = async (event, phoneset, value) => {
  const origin = phoneset.origin
  const change = phoneset.change
  return await kintone
    .api(kintone.api.url('/k/v1/records', true), 'GET', {
      app: kintone.app.getId(),
      query: `${origin} = "${value}" or ${change} = "${value}"`,
      totalCount: true
    })
>>>>>>> c47b1ce3b18a70983b20fe90cef2f5565ca576dd
    .then(resp => {
      console.log(resp)
      return resp.totalCount
    })
<<<<<<< HEAD
    .catch(async error => {
      const row1 = '<div><b>レコードの更新が出来ませんでした。</b></div>'
      const row2 = `<div>${error.message}</div>`
      await Swal.fire({
        icon: 'error',
        html: row1 + row2,
      })
      console.log(error)
    })
=======
    .catch(error => console.log(error))
>>>>>>> c47b1ce3b18a70983b20fe90cef2f5565ca576dd
}

export const duplicationPopup = async phone => {
  await Swal.fire({
    html: `<div><b>${phone}は重複があります。</b></div>`
  })
}

export const checkPostNumber = value => value == '000-0000' || !value.match(/^[0-9]{3}-?[0-9]{4}$/)

export const checkMailAddress = value =>
  !value.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)

export const toJaNum = num => {
  if (typeof num === 'number') {
    num = num.toString()
  }

  num = num.replace(/[, ]/g, '')

  let prefix = ''

  if (num[0] === '-') {
    num = num.slice(1)
    prefix = '-'
  }

  return (
    prefix +
    num
      .slice(0, -12)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1兆') +
    num
      .slice(-12, -8)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1億') +
    num
      .slice(-8, -4)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1万') +
    num.substring(num.length - 4).replace(/^0+/, '')
  )
}

export const hankaku2Zenkaku = (str: string) => {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
}

export const getSalesHtml = (prevSales, sales, ratio) => {
  const h2 = '<h2 class="popup-title">'
  const h2close = '</h2>'

  let html = h2 + '推測値と大幅に乖離しています。' + h2close
  html += `<div>前期売上高（億万）：${toJaNum(prevSales)}</div>`
  html += `<div>取得売上高（億万）：${toJaNum(sales)}</div>`
  html += `<div>前期売上高：${prevSales}</div>`
  html += `<div>取得売上高：${sales}</div>`
  html += `<div>比率${ratio}</div>`

  return html
}

export const checkValue = (value, arg) => {
  if (value == undefined) return false
  return !!value.match(arg)
}
