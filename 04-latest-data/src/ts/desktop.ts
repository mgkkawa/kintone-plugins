import { Button } from 'kintone-ui-component'
import * as m from '../../../modules'
import swal from 'sweetalert2'
import { allPosts, allPuts } from '../../../modules'

jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'
  kintone.events.on('app.record.index.show', async event => {
    const view = event.viewName
    if (view != 'リスト取り込み') return event

    const config = m.getConfig(PLUGIN_ID)

    for (let key in config) {
      const prop = config[key]
      if (typeof prop === 'string') config[key] = m.parse(prop)
    }

    if (!config.latest) return event

    const latest = config.latest
    const push = new Button({ text: 'リストデータ初期化', className: 'push-button' })

    const $space = $('.kintone-app-headermenu-space')
    $space.append(push)
    const settings = config.settings
    console.log(settings)

    $(document).on('click', '.push-button', async e => {
      const appId = config.app.appId
      const settings = config.settings
      const title = '<div><b>データ処理中</b></div>'

      const check = await swal.fire({
        html: '<div><b>データ処理を開始します</b></div><div>処理には数分～数十分かかる場合があります。</div><div>よろしいですか？</div>'
      })
      if (check.isDismissed) {
        await swal.fire({
          html: '<div><b>データ処理を中断しました。</b></div>'
        })
        return
      }
      await swal.fire({
        html: title,
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: async () => {
          swal.showLoading(swal.getDenyButton())

          const popup = $(swal.getHtmlContainer())
          popup.html(title + '<div>レコード確認中</div>')

          console.log('レコードチェック')
          const records = await m.getRecords(event.appId)
          records.forEach(record => {
            for (let key in record) {
              if (m.DELETE_FIELDS.includes(key)) delete record[key]
              settings.forEach(setting => {
                const key = Object.keys(setting)[0]
                const value = setting[key]
                record[key].value = value
              })
            }
          })

          popup.html('<div><b>初期化データ登録中</b></div><div>レコード総数:' + records.length + '</div>')
          await allPuts(appId, records, '法人番号')

          popup.html('<div><b>過去データ転送中</b></div><div>レコード総数:' + records.length + '</div>')
          await allPosts(latest.app, records, latest.token)

          swal.close()
        },
      })

      await swal.fire({
        html: '<div><b>データ処理完了</b></div><div>過去データアプリも確認してください。</div>',
        icon: 'success',
        showConfirmButton: true,
        showCancelButton: false,
        showDenyButton: false,
        allowOutsideClick: true,
        allowEscapeKey: true
      })
    })
    return event
  })
})(jQuery, kintone.$PLUGIN_ID)
