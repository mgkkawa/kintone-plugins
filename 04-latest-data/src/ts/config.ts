import swal from 'sweetalert2'
const fire = swal.fire
import * as kuc from 'kintone-ui-component'
import * as m from '../../../modules'

jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'

  const $submit = $('#submit-button')
  const $cancel = $('.js-cancel-button')

  // const config = { app: null, latest: null, settings: null }
  const config = m.getConfig(PLUGIN_ID)

  if (!config.app) {
    const appId = kintone.app.getId()
    const info = await m.getAppInfo(appId)
    const fields = await m.getFields(appId)
    const items = m.getItems(fields)
    config.app = {
      appId: appId - 0,
      name: info.name,
      fields: fields,
      items: items
    }
    kintone.plugin.app.setConfig(m.checkConfig(config), () => {})
  }

  const appId = config.app.appId - 0
  const appName = config.app.name

  for (let key in config) {
    const prop = config[key]
    if (typeof prop === 'string') config[key] = m.parse(prop)
  }

  const spaceApps = await m.getApps(appId)
  const items = spaceApps.map(app => {
    return { label: app.name, value: app.appId }
  })
  items.unshift({ label: '-----', value: '-----' })
  console.log(config)

  const apps = m.apps(items)
  const text = m.text
  const button = m.button

  if (config.latest) {
    const latest = config.latest
    apps.value = latest.app
    text.value = latest.token
  }

  $('#container').append(apps).append(text).append(button)
  button.addEventListener('click', async e => {
    const app = $('#appId').val()
    const token = $('#token').val()

    if (!app || !token) {
      await fire({ text: 'アプリとトークンそろってないよ' })
      return
    }

    const latest = { app: app, token: token, fields: null }
    const url = kintone.api.url('/k/v1/app/form/fields', true) + '?app=' + app
    const headers = m.getHeaders(token)

    let isNG = true
    const responses = await kintone
      .proxy(url, 'GET', headers, {})
      .then(resp => {
        const body = JSON.parse(resp[0])
        if (!body.properties) throw new Error(body)
        isNG = false
        return body.properties
      })
      .catch(resp => console.log(resp))
    if (isNG) {
      await fire({ text: 'アプリとトークンそろってないよ' })
      return
    }

    const fields = {}

    for (let key in responses) {
      const response = responses[key]
      if (m.DELETE_FIELDS.includes(key)) continue
      fields[key] = { type: response.type, value: '' }
    }
    latest.fields = fields

    config.latest = latest
    kintone.plugin.app.setConfig(m.checkConfig(config), async () => {
      await fire({ text: '過去データアプリ情報を登録しました。' })
      location.reload()
    })
  })

  if (!config.latest) return

  const settings = {
    case: { field: '案件名', initial: config.app.name },
    outcount: { field: 'コール数', initial: 0 },
    incount: { field: 'インバウンドコール数', initial: 0 },
    status: { field: '完了ステータス', initial: '未架電' },
    inout: { field: 'inout', initial: 'out' }
  }
  const $table = $('.kintoneplugin-table')
  const $tbody = $table.children('tbody')
  // const $tr = $tbody.children('tr')

  const tr = '<tr>'
  const td = '<td>'
  const control = '<div class="kintoneplugin-table-td-control">'
  const value = '<div class="kintoneplugin-table-td-control-value">'
  const operation = '<td class="kintoneplugin-table-td-operation">'
  const addRow = '<button type="button" class="kintoneplugin-button-add-row-image" title="Add row"></button>'
  const deleteRow =
    '<button type="button" class="kintoneplugin-button-remove-row-image" title="Delete this row"></button>'

  // const $settings = $('#plugin-settings')
  // const row = '<p class="kintoneplugin-row">'
  for (let key in settings) {
    const setting = settings[key]
    const $row = $(td).append($(control).append(value))
    const dropdown = new kuc.Dropdown({
      items: config.app.items,
      value: setting.field,
      className: 'settings',
      id: key
    })
    const text = new kuc.Text({ value: setting.initial, id: key })

    $('#initial-label').show()
    $tbody.append(
      $(tr)
        .append($(td).append($(control).append($(value).append(dropdown))))
        .append($(td).append($(control).append($(value).append(text))))
        .append($(td).append($(operation).append($(addRow)).append(deleteRow)))
    )
  }

  $submit.on('click', async e => {
    e.preventDefault()

    // 値の取得から考え直し。
    for (let key in settings) {
      const value = $('.settings#' + key).val()
      if (value == '-----' || !value) {
        await swal.fire({ icon: 'error', html: `<b>${settings[key].field}の値が設定されていないよ。` })
        return
      }
      settings[key] = value
    }

    console.log(settings)
    config.settings = settings

    // kintone.plugin.app.setConfig(m.checkConfig(config), async () => {
    //   await swal.fire({ title: '設定保存完了', html: '<b>アプリ情報の更新を忘れずに' })
    //   window.location.href = '../../flow?app=' + appId
    // })
  })
  $cancel.on('click', e => {
    window.location.href = '../../' + appId + '/plugin/'
  })

  const addClass = '.kintoneplugin-button-add-row-image'
  const deleteClass = '.kintoneplugin-button-remove-row-image'
  $(document).on('click', addClass, e => {
    console.log(e)
    console.log(this)

    const dropdown = new kuc.Dropdown({
      items: config.app.items,
      selectedIndex: 0,
      className: 'settings'
    })
    const text = new kuc.Text({ placeholder: '初期値を入力' })
    // $tbody.append(
    //   $(tr)
    //     .append($(td).append($(control).append($(value).append(dropdown))))
    //     .append($(td).append($(control).append($(value).append(text))))
    //     .append($(td).append($(operation).append($(addRow)).append(deleteRow)))
    // )
  })
})(jQuery, kintone.$PLUGIN_ID)
