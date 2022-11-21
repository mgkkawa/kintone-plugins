import { DELETE_KEYS } from '../03-callhistory/src/modules'

export const replaceEnter = str => {
  return str.replace(/\n|\r\n|\r/g, '<br>')
}

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
    .catch(error => console.error(JSON.parse(error).message))

  if (next_records.length) {
    putAll(appId, next_records)
  }
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
