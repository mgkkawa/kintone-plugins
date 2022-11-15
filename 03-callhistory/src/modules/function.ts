import { DELETE_KEYS } from './enviroment'
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
