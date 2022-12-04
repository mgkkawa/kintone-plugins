import swal from 'sweetalert2'
import { Button, Dropdown, Text } from 'kintone-ui-component'
import * as modules from '../modules'
import * as plugins from '../../../modules'
import { CALLHISTORY_DEFAULT } from '../modules'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  ;('use strict')

  const $submit = $('#app-submit')
  const $cancelButton = $('.js-cancel-button')

  const config = await plugins.getConfig(PLUGIN_ID)
  if (!config.appId) config.appId = kintone.app.getId()
  if (typeof config.appId === 'string') config.appId = Number(config.appId)
  for (let key in config) {
    if (typeof config[key] === 'string') config[key] = plugins.parse(config[key])
  }
  console.log(config)

  if (!config.isGuest) config.isGuest = Boolean(await plugins.checkGuestSpace())
  if (!config.spaceId) config.spaceId = await plugins.getGuestSpaceId(config.appId)
  const inSpaceApps = await plugins.getApps(config.appId)
  const items = []
  inSpaceApps.forEach(app => {
    items.push({ label: app.name, value: app.appId })
  })

  const historyConfigs = await $('#history-configs')
  historyConfigs.append('<tr id="history-settings"></tr>')
  const historySettings = await $('#history-settings')
  await historySettings
    .append(
      new Dropdown({
        id: 'history-appId',
        label: '履歴アプリ',
        items: items,
        requiredIcon: true
      })
    )
    .append(
      new Text({
        label: '履歴アプリAPIトークン',
        placeholder: 'コール履歴アプリのAPIトークンを入力。',
        textAlign: 'left',
        id: 'history-token',
        visible: true,
        disabled: false,
        requiredIcon: true
      })
    )
    .append(
      new Button({
        text: '保存',
        type: 'submit',
        id: 'history-submit',
        visible: true,
        disabled: false
      })
    )

  const historyApp = $('#history-appId')
  const historyToken = $('#history-token')
  const historySubmit = $('#history-submit')

  historySubmit.on('click', async e => {
    e.preventDefault()
    if (!historyApp.val() || !historyToken.val()) {
      await swal.fire({ text: 'アプリとトークンそろってないよ。' })
      return
    }

    const appConfig = {
      appId: historyApp.val(),
      token: historyToken.val()
    }
    config.history = JSON.stringify(appConfig)

    kintone.plugin.app.setConfig({ history: JSON.stringify(appConfig) }, async () => {
      await swal.fire({ text: 'コール履歴情報を登録しました。' })
      location.reload()
    })
  })

  if (!config.history) return
  if (typeof config.history === 'string') config.history = plugins.parse(config.history)
  const history = config.history
  historyApp.val(history.appId)
  historyToken.val(history.token)

  $('#config-label').html('コールアプリ設定')
  $('#config-desc').html('コールアプリ側の設定<br>設定がなければ空白を保存します。')

  if (!config.fields) config.fields = await plugins.getFields(config.appId)
  if (!config.fields2) config.fields2 = await plugins.getFields(history.appId)
  const fields = config.fields

  const apps = $('#callapp-configs')
  CALLHISTORY_DEFAULT.forEach((field, ind) => {
    const num = ind + 1
    const id = 'callhistory-field-' + num
    apps.append(`<tr id="${id}"></tr>`)
    const table = $(`#${id}`)
    table.append(`<th id="callhistory-row-${num}"`)
    const record = $(`#callhistory-row-${num}`)
    record
      .append(
        new Text({
          className: 'callhistory-name',
          id: 'callhistory-name-' + num,
          value: field,
          disabled: true
        })
      )
      .append(
        new Dropdown({
          className: 'call-app-name',
          id: 'call-app-name-' + num,
          items: plugins.getItems(fields),
          value: field
        })
      )
  })

  $submit.on('click', async e => {
    e.preventDefault()

    const settings = {}
    const length = CALLHISTORY_DEFAULT.length
    let i = 1
    let historyName = await $('#callhistory-name-' + i)
    if (historyName.length == 0) historyName = await $('#callhistory-name-' + i)
    let appName = await $('#call-app-name-' + i)

    settings[i] = { history: historyName.val(), app: appName.val() }
    while (i < length) {
      ++i
      historyName = await $('#callhistory-name-' + i)
      appName = await $('#call-app-name-' + i)
      settings[i] = { history: historyName.val(), app: appName.val() }
    }

    config.settings = settings
    console.log(config)

    kintone.plugin.app.setConfig(await plugins.checkConfig(config), async () => {
      await swal.fire({
        html: 'プラグイン設定が更新されました。<br>アプリを更新してください。'
      })
      window.location.href = '../../flow?app=' + kintone.app.getId()
    })
  })

  $cancelButton.on('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/'
  })

  for (let key in config) {
    const value = config[key]
    try {
      config[key] = JSON.stringify(value)
    } catch {
      continue
    }
  }
})(jQuery, kintone.$PLUGIN_ID)
