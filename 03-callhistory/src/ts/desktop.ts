import swal from 'sweetalert2'
import * as plugins from '../../../modules/functions'
import { parse } from '../modules'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'

  kintone.events.on(['app.record.create.submit.success', 'app.record.edit.submit.success'], async () => {
    const record = kintone.app.record.get().record
    if (record['編集ステータス'].value) return

    const config = await plugins.getConfig(PLUGIN_ID)
    for (let key in config) {
      if (typeof config[key] === 'string') config[key] = parse(config[key])
    }

    const historyId = config.history.appId
    const token = config.history.token

    const fields = config.fields2
    const keys = Object.keys(fields)
    const body = {}

    for (let key in config.settings) {
      const setting = config.settings[key]
    }
  })
})(jQuery, kintone.$PLUGIN_ID)
