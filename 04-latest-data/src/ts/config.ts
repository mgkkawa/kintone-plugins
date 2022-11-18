import swal from 'sweetalert2'
import { Dropdown, Text, Button } from 'kintone-ui-component'
import {
  checkConfig,
  DELETE_FIELDS,
  getAppInfo,
  getApps,
  getConfig,
  getFields,
  getItems,
  parse
} from '../../../modules'

jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'

  const $submit = $('#submit-button')
  const $cancel = $('.js-cancel-button')

  // const config = { app: null, latest: null, settings: null }
  const config = getConfig(PLUGIN_ID)

  if (!config.app) {
    const appId = kintone.app.getId()
    const info = await getAppInfo(appId)
    const fields = await getFields(appId)
    const items = getItems(fields)
    config.app = {
      appId: appId,
      name: info.name,
      fields: fields,
      items: items
    }
    kintone.plugin.app.setConfig(checkConfig(config), () => {})
  }

  const appId = config.app.appId
  const appName = config.app.app

  for (let key in config) {
    const prop = config[key]
    if (typeof prop === 'string') config[key] = parse(prop)
  }

  console.log(config)

  const spaceApps = await getApps(appId)
  const items = spaceApps.map(app => {
    return { label: app.name, value: app.appId }
  })
  items.unshift({ label: '-----', value: '-----' })

  const apps = new Dropdown({
    id: 'appId',
    label: '履歴アプリ',
    items: items,
    requiredIcon: true,
    selectedIndex: 0
  })
  const text = new Text({
    label: '履歴アプリAPIトークン',
    placeholder: 'コール履歴アプリのAPIトークンを入力。',
    textAlign: 'left',
    id: 'token',
    visible: true,
    disabled: false,
    requiredIcon: true
  })
  const button = new Button({
    text: '保存',
    type: 'submit',
    id: 'submit',
    visible: true,
    disabled: false
  })
  console.log(config)
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
    const headers = { 'X-Cybozu-API-Token': token }

    let isNG = true
    const responses = await kintone
      .proxy(url, 'GET', headers, {})
      .then(resp => {
        const obj = JSON.parse(resp[0])
        console.log(obj)
        if (!obj.properties) throw new Error(obj)
        isNG = false
        return obj.properties
      })
      .catch(resp => console.log(resp))
    if (isNG) {
      await swal.fire({ text: 'アプリとトークンそろってないよ' })
      return
    }

    const fields = {}

    for (let key in responses) {
      const response = responses[key]
      if (DELETE_FIELDS.includes(key)) continue
      fields[key] = { type: response.type, value: '' }
    }
    latest.fields = fields

    config.latest = latest
    kintone.plugin.app.setConfig(checkConfig(config), async () => {
      await swal.fire({ text: '過去データアプリ情報を登録しました。' })
      location.reload()
    })
  })

  if (!config.latest) return

  const $settings = $('#plugin-settings')
  const row = '<p class="kintoneplugin-row">'
  const requireds = ['案件名', 'コール数', 'インバウンドコール数', '完了ステータス', 'inout']
  const keys = ['case', 'outcount', 'incount', 'status', 'inout']
  requireds.forEach(require => {
    const text = new Text({ value: require, disabled: true })
    const dropdown = new Dropdown({
      items: config.app.items,
      value: require,
      className: 'settings'
    })
    $settings.append($(row).append(text).append(dropdown))
  })

  $submit.on('click', e => {
    e.preventDefault()

    const settings = {}
    const $settings = $('#plugin-settings')
    const children = $settings.children()
    requireds.forEach((key, index) => {
      settings[keys[requireds.indexOf(key)]] = $($(children[index]).children()[1]).val()
    })
    console.log(settings)
    config.settings = settings

    kintone.plugin.app.setConfig(checkConfig(config), async () => {
      await swal.fire({ title: '設定保存完了', html: '<div>アプリ情報の更新を</div><div>忘れずに</div>' })
      window.location.href = '../../flow?app=' + appId
    })
  })
  $cancel.on('click', e => {
    window.location.href = '../../' + appId + '/plugin/'
  })
})(jQuery, kintone.$PLUGIN_ID)
