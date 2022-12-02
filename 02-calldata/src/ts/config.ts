import { Dropdown, Text } from 'kintone-ui-component'
import * as m from '.'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  const config = m.getConfig(PLUGIN_ID)
  // console.log(config)

  if (!config.app) {
    const appId = kintone.app.getId()
    const info = await m.getAppInfo(appId)
    const apps = await m.getApps(appId)
    console.log(apps)
    const appsItems = apps.map(app => {
      return { label: app.name, value: app.appId }
    })
    appsItems.unshift(m.DEFAULT_ITEM)
    const forms = await m.getLayout(appId)
    const fields = await m.getFields(appId)
    const appFields = []
    const spaces = []

    const layout = forms.layout
    layout.forEach(row => {
      const fields = row.fields
      fields.forEach(field => {
        const type = field.type
        if (type == 'SPACER') {
          const elementId = field.elementId
          if (elementId) spaces.push(elementId)
          return
        }
        if (type == 'REFERENCE_TABLE') return
        appFields.push({ type: field.type, code: field.code })
      })
    })

    const resultFields = appFields.map(appField => {
      const code = appField.code
      const field = fields[code]
      return { type: field.type, code: field.code, label: field.label }
    })

    const appConfig = {
      name: info.name,
      spaces: spaces,
      fields: resultFields,
      apps: appsItems
    }
    config.app = appConfig
  }
  console.log(config)

  const app = config.app
  const apps = app.apps

  const $history = $('.history-app')
  const $latest = $('.latest-app')
  $history.append(
    $(m.tr)
      .append($(m.td).append(m.historySelect(apps)))
      .append($(m.td).append(m.historyToken()))
  )
  $latest.append(
    $(m.tr)
      .append($(m.td).append(m.latestSelect(apps)))
      .append($(m.td).append(m.latestToken()))
  )

  const fields = app.fields
  const items = fields.map(field => {
    return { label: field.label, value: field.code }
  })
  items.unshift(m.DEFAULT_ITEM)
  const fieldsDropdown = new Dropdown({
    items: items,
    selectedIndex: 0
  })
  console.log(fieldsDropdown)

  const $fields = $('.fields-dropdown')
  console.log($fields)
  $fields.each((_i, e) => {
    $(this).append(fieldsDropdown)
  })
})(jQuery, kintone.$PLUGIN_ID)
