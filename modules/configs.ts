import { parse } from '.'
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
