import swal from 'sweetalert2'
import * as kuc from 'kintone-ui-component'
import * as m from '../../../modules'
import * as tag from '../../../modules/modern-class'
// import * as rest from '../../../modules/rest-body'

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
    const appitems = m.getItems(fields)
    config.app = {
      appId: appId - 0,
      name: info.name,
      fields: fields,
      items: appitems
    }
    kintone.plugin.app.setConfig(m.checkConfig(config), () => {})
  }

  const appId = config.app.appId
  const appName = config.app.nam

  for (let key in config) {
    const prop = config[key]
    if (typeof prop === 'string') config[key] = m.parse(prop)
  }

  console.log(config)
  const spaceApps = await m.getApps(appId)
  const items = spaceApps.map(app => {
    return { label: app.name, value: app.appId }
  })
  items.unshift({ label: '-----', value: '-----' })

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
      await swal.fire({ text: 'アプリとトークンそろってないよ' })
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
      await swal.fire({ text: 'アプリとトークンそろってないよ' })
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
      await swal.fire({ text: '過去データアプリ情報を登録しました。' })
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

  $('#initial-label').show()
  $table.show()
  $tbody.append(
    $(tag.tr)
      .append(
        $(tag.td).append(
          $(tag.p).addClass(tag.title).text('フィールド').css('font-weight', 'bold').css('text-align', 'center')
        )
      )
      .append(
        $(tag.td).append(
          $(tag.p).addClass(tag.title).text('初期値').css('font-weight', 'bold').css('text-align', 'center')
        )
      )
  )
  Object.keys(settings).forEach((key, ind, arr) => {
    const setting = settings[key]
    const dropdown = new kuc.Dropdown({
      items: config.app.items,
      value: setting.field,
      className: 'settings-field',
      id: key
    })
    const text = new kuc.Text({ value: setting.initial, id: key, className: 'settings-value' })

    $tbody.append(
      $(tag.tr)
        .addClass('config-settings')
        .append($(tag.td).addClass('settings-field').append(dropdown))
        .append($(tag.td).addClass('settings-value').append(text))
        .append($(tag.td).append($(tag.td).addClass(tag.operation).append($(tag.addRow)).append($(tag.deleteRow))))
    )
  })

  $submit.on('click', async e => {
    e.preventDefault()

    // 値の取得から考え直し。
    let isError = false
    const settings = {}
    $('.config-settings').each((_index, e) => {
      const element = $(e)
      const field = element.children('.settings-field').children().val().toString()
      const value = element.children('.settings-value').children().val().toString()
      if (field === '-----') return
      if (!value) {
        isError = true
        return false
      }
      settings[field] = value
    })

    if (isError) {
      await swal.fire({
        html: '<p><b>初期値の設定が不正です。</b></p>',
        icon: 'error'
      })
      return
    }

    console.log(settings)
    config.settings = settings

    kintone.plugin.app.setConfig(m.checkConfig(config), async () => {
      await swal.fire({ html: '<b>アプリ情報の更新を忘れずに' })
      window.location.href = '../../flow?app=' + appId
    })
  })
  $cancel.on('click', e => {
    window.location.href = '../../' + appId + '/plugin/'
  })

  $(document).on('click', tag.addClass, e => {
    const dropdown = new kuc.Dropdown({
      items: config.app.items,
      selectedIndex: 0,
      className: 'settings'
    })
    const text = new kuc.Text({ placeholder: '初期値を入力' })

    $tbody.append(
      $(tag.tr)
        .addClass('config-settings')
        .append($(tag.td).addClass('settings-field').append(dropdown))
        .append($(tag.td).addClass('settings-value').append(text))
        .append($(tag.td).append($(tag.td).addClass(tag.operation).append($(tag.addRow)).append($(tag.deleteRow))))
    )
  })
  $(document).on('click', tag.deleteClass, e => {
    e.preventDefault()
    $(e.target).parents('tr')[0].remove()
  })
})(jQuery, kintone.$PLUGIN_ID)
