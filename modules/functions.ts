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

export const getConfig = id => {
  const config = kintone.plugin.app.getConfig(id)

  for (let key in config) {
    const value = config[key]
    try {
      config[key] = JSON.parse(value)
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
      config[key] = JSON.parse(value)
    } catch {
      continue
    }
  }

  return config
}
