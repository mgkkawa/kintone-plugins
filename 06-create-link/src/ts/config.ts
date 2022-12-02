import { Dropdown, Text, TextArea } from 'kintone-ui-component'
import Swal from 'sweetalert2'
import * as m from '../../../modules'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'

  const config = m.getConfig(PLUGIN_ID)
  if (!config.appId) config.appId = kintone.app.getId()
  console.log(config)

  const appId = config.appId
  const submit = $('#config-submit')
  const cancel = $('.js-cancel-button')

  if (!config.spaces) {
    const spaces = []
    const layout = await m.getLayout(appId)
    const rows = layout.layout
    rows.forEach(row => {
      const fields = row.fields
      fields.forEach(field => {
        if (field.type == 'SPACER' && field.elementId) spaces.push(field.elementId)
      })
    })
    config.spaces = spaces
  }
  console.log(config.spaces)
  const items = config.spaces.map(space => {
    return { label: space, value: space }
  })
  items.unshift({ label: '-----', value: '-----' })

  const spaces = new Dropdown({
    items: items,
    selectedIndex: 0,
    className: 'kintone-ui space-elementId'
  })

  const current = new Dropdown({
    items: [
      { label: '-----', value: '-----' },
      { label: 'URL', value: 'URL' },
      { label: 'TEL', value: 'tel' }
    ],
    selectedIndex: 0,
    className: 'kintone-ui link-current'
  })

  const link = new Text({ className: 'kintone-ui link-value' })

  const $configs = $('#configs')

  $configs.append($(m.tr).append($(m.th).append($(m.td).append(spaces).append(current).append(link))))

  submit.on('click', e => {
    e.preventDefault()

    const td = $configs.children().children().children()
    const elementIds = td.children('.space-elementId')
    const currents = td.children('.link-current')
    const values = td.children('.link-value')
    const all = $configs.children('.kintone-ui')

    console.log(elementIds.val())

    const setting = { elementId: elementIds.val(), current: currents.val(), value: values.val() }
    config.setting = setting

    kintone.plugin.app.setConfig(m.checkConfig(config), async () => {
      await Swal.fire({ html: 'プラグイン設定が保存されました。<br>アプリの更新も忘れずに！' })
      window.location.href = '../../flow?app=' + config.appId
    })
  })
  cancel.on('click', () => {
    window.location.href = '../../' + config.appId + '/plugin/'
  })
})(jQuery, kintone.$PLUGIN_ID)
