import { Button } from 'kintone-ui-component'
import { getConfig, getFields, getRecords, parse, DELETE_FIELDS, postAll, putAll } from '../../../modules'
import swal from 'sweetalert2'

jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'
  kintone.events.on('app.record.index.show', async event => {
    console.log(event)
    if (event.viewName != 'リスト取り込み') return event

    const config = getConfig(PLUGIN_ID)

    for (let key in config) {
      const prop = config[key]
      if (typeof prop === 'string') config[key] = parse(prop)
    }
    console.log(config)

    if (!config.latest) return event

    const latest = config.latest
    const fields = latest.fields

    const push = new Button({ text: 'リストデータ初期化', className: 'push-button' })

    const $space = $('.kintone-app-headermenu-space')
    $space.append(push)

    $(document).on('click', '.push-button', async e => {
      const configs = getConfig(PLUGIN_ID)
      for (let key in configs) {
        const config = configs[key]
        if (typeof config === 'string') config[key] = parse(config)
      }

      const settings = config.settings
      let records
      const check = await swal.fire({
        icon: 'info',
        text: 'データ処理を実施しますか？',
        showCancelButton: true,
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ',
      })
      if (check.isDismissed) return e
      const pushRecords = []
      await swal.fire({
        html: 'データ処理中',
        showConfirmButton: false,
        didOpen: async () => {
          swal.showLoading()

          // const window = swal.getHtmlContainer()
          // $(window).html('ぐーるぐる')

          const puts = []
          records = await getRecords(event.appId)
          const keys = Object.keys(fields)
          const keys2 = Object.keys(records[0])
          records.forEach(record => {
            const putRecord = {}
            keys2.forEach(key => {
              if (DELETE_FIELDS.includes(key)) return
              putRecord[key] = record[key]
            })

            putRecord[settings.case].value = config.app.name
            putRecord[settings.outcount].value = 0
            putRecord[settings.incount].value = 0
            putRecord[settings.status].value = '未架電'
            putRecord[settings.inout].value = 'out'
            puts.push({ id: record.レコード番号.value, record: putRecord })

            const pushRecord = {}

            keys.forEach(key => {
              if (!keys2.includes(key)) return
              pushRecord[key] = { type: fields[key].type, value: record[key].value }
              console.log(pushRecord[key])
            })
            pushRecords.push(pushRecord)
          })

          await putAll(event.appId, puts)
          console.log(puts)

          await postAll(latest.app, latest.token, pushRecords)

          swal.close()
        },
      })
    })
  })
})(jQuery, kintone.$PLUGIN_ID)
