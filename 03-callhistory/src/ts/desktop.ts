import swal from 'sweetalert2'
import * as plugins from '../../../modules/functions'
import { parse } from '../modules'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'

  kintone.events.on(['app.record.create.submit.success', 'app.record.edit.submit.success'], async event => {
    // ['app.record.create.submit.success', 'app.record.edit.submit.success']
    // ['app.record.detail.show', 'app.record.create.show', 'app.record.edit.show']
    const record = event.record
    if (record['編集ステータス'].value) return

    const config = await plugins.getConfig(PLUGIN_ID)
    for (let key in config) {
      if (typeof config[key] === 'string') config[key] = parse(config[key])
    }

    const historyId = config.history.appId
    const token = config.history.token

    const fields = config.fields2
    const body = {}

    for (let key in config.settings) {
      const setting = config.settings[key]
      if (!setting.app) {
        body[setting.history] = { type: fields[setting.history].type, value: '' }
        continue
      }
      body[setting.history] = { type: fields[setting.history].type, value: record[setting.app].value }
    }

    const param = {
      app: historyId,
      record: body,
    }

    const headers = {
      'X-Cybozu-API-Token': token,
      'Content-Type': 'application/json',
    }

    const url = kintone.api.url('/k/v1/record', config.isGuest)

    kintone
      .proxy(url, 'POST', headers, param)
      .then(resp => {
        resp = JSON.parse(resp[0])
        console.log(resp)
        if (resp.message) throw resp
        swal.fire({
          title: 'コール履歴登録完了',
          text: 'レコード番号:' + resp.id,
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2500,
        })
      })
      .catch(error => {
        swal.fire({
          title: 'コール履歴が登録できませんでした。',
          text: 'コメントにコールテーブルの情報を入力してください。',
          icon: 'warning',
          allowOutsideClick: false,
          allowEscapeKey: false,
        })
      })

    // const url
  })
})(jQuery, kintone.$PLUGIN_ID)
