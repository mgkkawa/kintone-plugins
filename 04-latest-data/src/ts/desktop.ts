import { Button } from 'kintone-ui-component'
import * as m from '../../../modules'
import swal from 'sweetalert2'
import { allPosts, allPuts } from '../../../modules'

jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'
  kintone.events.on('app.record.index.show', async event => {
    if (event.viewName != 'リスト取り込み') return event

    const config = m.getConfig(PLUGIN_ID)

    for (let key in config) {
      const prop = config[key]
      if (typeof prop === 'string') config[key] = m.parse(prop)
    }

    if (!config.latest) return event

    const latest = config.latest
    const fields = latest.fields

    const push = new Button({ text: 'リストデータ初期化', className: 'push-button' })

    const $space = $('.kintone-app-headermenu-space')
    $space.append(push)

    console.log('レコードチェック')
    const records = await m.getRecords(event.appId)
    records.forEach(record => {
      for (let key in record) {
        if (m.DELETE_FIELDS.includes(key)) delete record[key]
      }
    })

    console.log(latest)
    // await allPuts(config.app.appId, records, '法人番号')
    await allPosts(latest.app, records, latest.token)

    $(document).on('click', '.push-button', async e => {
      const appId = config.app.appId
      const settings = config.settings

      await swal.fire({
        html: '<b>データ処理中',
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: async () => {
          swal.showLoading(swal.getDenyButton())

          const records = await m.getRecords(event.appId)
          records.forEach(record => {
            for (let key in record) {
              if (m.DELETE_FIELDS.includes(key)) delete record[key]
            }
          })
          console.log(records)

          // console.log(records)
          // const records2 = [...records]
          // records2.forEach(record => {
          //   for (let key in record) {
          //     if (m.DELETE_FIELDS.includes(key)) delete record[key]
          //   }
          //   for (let key in settings) {
          //     record[key].value = settings[key]
          //   }
          // })

          // const puts = [...records]
          //   .map(record => {
          //     return {
          //       updateKey: {
          //         field: '法人番号',
          //         value: record.法人番号.value
          //       },
          //       record: record
          //     }
          //   })
          //   .map(record => {
          //     delete record.record.法人番号
          //     return record
          //   })

          // // await m.putAll(appId, puts)
          // await m.allPost(latest.app, latest.token, records)

          swal.close()
        }
      })

      // await swal.fire({
      //   html: 'データ処理中',
      //   showConfirmButton: false
      // didOpen: async () => {
      //   swal.showLoading()

      //   // const window = swal.getHtmlContainer()
      //   // $(window).html('ぐーるぐる')

      //   const puts = []
      //   records = await getRecords(event.appId)
      //   const keys = Object.keys(fields)
      //   const keys2 = Object.keys(records[0])
      //   records.forEach(record => {
      //     const putRecord = {}
      //     keys2.forEach(key => {
      //       if (DELETE_FIELDS.includes(key)) return
      //       putRecord[key] = record[key]
      //     })

      //     putRecord[settings.case].value = config.app.name
      //     putRecord[settings.outcount].value = 0
      //     putRecord[settings.incount].value = 0
      //     putRecord[settings.status].value = '未架電'
      //     putRecord[settings.inout].value = 'out'
      //     puts.push({ id: record.レコード番号.value, record: putRecord })

      //     const pushRecord = {}

      //     keys.forEach(key => {
      //       if (!keys2.includes(key)) return
      //       pushRecord[key] = { type: fields[key].type, value: record[key].value }
      //       console.log(pushRecord[key])
      //     })
      //     pushRecords.push(pushRecord)
      //   })

      //   await putAll(event.appId, puts)
      //   console.log(puts)

      //   await postAll(latest.app, latest.token, pushRecords)

      //   swal.close()
      // }
      // })
    })
  })
})(jQuery, kintone.$PLUGIN_ID)
