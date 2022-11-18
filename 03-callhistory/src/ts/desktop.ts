import swal from 'sweetalert2'
import * as plugins from '../../../modules/functions'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'

  // コール数・インバウンドコール数を調整。
  kintone.events.on(['app.record.detail.show', 'app.record.edit.show'], async event => {
    const record = event.record

    const config = await plugins.getConfig(PLUGIN_ID)
    if (!config.history) return event
    for (let key in config) {
      if (typeof config[key] === 'string') config[key] = plugins.parse(config[key])
    }

    const SERIAL_NO = record.法人番号.value
    const CASE_NAME = record.案件名.value

    const history = config.history
    const appId = history.appId
    const token = history.token

    const endpoint = kintone.api.url('/k/v1/records', true)
    const query = `法人番号 = "${SERIAL_NO}" and 案件名 = "${CASE_NAME}" and inout = "out" order by レコード番号 asc`
    const url = `${endpoint}?app=${appId}&query=${encodeURI(query)}&totalCount=true`
    const headers = {
      'X-Cybozu-API-Token': token
      // 'Content-Type': 'application/json',
    }

    const count = await kintone
      .proxy(url, 'GET', headers, {})
      .then(resp => {
        const object = JSON.parse(resp[0])
        if (object.error) throw new Error(object.error)
        return object.totalCount - 0
      })
      .catch(resp => {
        console.log(resp)
        return 0
      })

    const query2 = `法人番号 = "${SERIAL_NO}" and 案件名 = "${CASE_NAME}" and inout = "in" order by レコード番号 asc`
    const url2 = `${endpoint}?app=${appId}&query=${encodeURI(query2)}&totalCount=true`

    const count2 = await kintone
      .proxy(url2, 'GET', headers, {})
      .then(resp => {
        const object = JSON.parse(resp[0])
        if (object.error) throw new Error(object.error)
        return object.totalCount - 0
      })
      .catch(resp => {
        console.log(resp)
        return 0
      })

    const inbound = record.インバウンド.value.length
    const outbound = inbound ? 0 : 1

    record.コール数.value = count + outbound
    record.インバウンドコール数.value = count2 + inbound

    return event
  })

  kintone.events.on(['app.record.create.submit.success', 'app.record.edit.submit.success'], async event => {
    const record = event.record
    if (record['編集ステータス'].value) return

    const config = await plugins.getConfig(PLUGIN_ID)

    const history = config.history
    const appId = history.appId
    const token = history.token

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
      app: appId,
      record: body
    }

    const headers = {
      'X-Cybozu-API-Token': token,
      'Content-Type': 'application/json'
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
          timer: 2500
        })
      })
      .catch(error => {
        swal.fire({
          title: 'コール履歴が登録できませんでした。',
          text: 'コメントにコールテーブルの情報を入力してください。',
          icon: 'warning',
          allowOutsideClick: false,
          allowEscapeKey: false
        })
      })
  })
})(jQuery, kintone.$PLUGIN_ID)
