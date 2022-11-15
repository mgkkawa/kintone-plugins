import swal from 'sweetalert2'
import * as modules from '../modules'
import * as plugins from '../../../modules/functions'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  ;('use strict')

  const config = plugins.getConfig(PLUGIN_ID)
  const historyId = $('#callhistory-appId')
  const historyToken = $('#callhistory-token')
  const historySubmit = $('#callhistory-submit-button')
  const $cancelButton = $('.js-cancel-button')
  console.log(config)

  console.log(await plugins.checkGuestSpace())

  if (!config.callApp) {
    $('#config-table').hide()
    $('#config-desc').html('履歴保存アプリを設定してください。<br>設定後、コールアプリの設定をお願いします。')
  }

  if (!config.fields) {
    const fields = await modules.getFields(config.appId)
    console.log(fields)
  }

  if (config.callApp) {
    historyId.val(config.callApp.appId)
    historyToken.val(config.callApp.token)
    historyId.prop('disabled', 'true')
    historyToken.prop('disabled', 'true')
    historySubmit.hide()
  }

  historyId.on('change', async e => {
    const value = historyId.val()

    if (isNaN(Number(value))) {
      await swal.fire('数字入れんかいボケ')
      historyId.val('')
    }
  })
  historyToken.on('change', async e => {
    const value = historyToken.val()

    if (String(value).length <= 12) {
      await swal.fire('トークン入れんかいボケ')
      historyToken.val('')
    } else {
      // appId と token で通信して確認したい。
    }
  })
  historySubmit.on('click', async e => {
    e.preventDefault()
    if (!historyId.val() || !historyToken.val()) {
      await swal.fire('アプリIDとトークンそろってないよ。')
      return
    }

    const appConfig = {
      appId: historyId.val(),
      token: historyToken.val()
    }
    config.callApp = JSON.stringify(appConfig)

    kintone.plugin.app.setConfig({ callApp: JSON.stringify(appConfig) }, async () => {
      $('#config-table').show()
      $('#config-desc').html('コールアプリ側の設定')
      await swal.fire('コール履歴情報を登録しました。')
      return
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
  console.log(config)
})(jQuery, kintone.$PLUGIN_ID)
