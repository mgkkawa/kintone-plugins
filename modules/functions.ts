import { DELETE_KEYS } from '../03-callhistory/src/modules'

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
  const guestSpaceId = appInfo['spaceId']
  return guestSpaceId
}

export const getAppInfo = async appId => {
  return new Promise((resolve, reject) => {
    const body = {
      'id': appId
    }
    kintone.api(
      kintone.api.url('/k/v1/app', true),
      'GET',
      body,
      resp => {
        resolve(resp)
      },
      error => {
        reject(error)
      }
    )
  })
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

export const getUnicode = str => {
  const array = str.split('')
  const res = array.map(value => value.codePointAt(0))
}

export const getItems = (fields, values = []) => {
  const items = []

  for (let key in fields) {
    const field = fields[key]
    if (DELETE_KEYS.includes(field.type) || values.includes(field.code)) continue
    items.push({ label: field.label, value: field.code })
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
  return items
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
