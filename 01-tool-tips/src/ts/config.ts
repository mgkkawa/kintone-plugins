import { checkConfig, getConfig, getFields, getItems } from '.'
jQuery.noConflict()
import swal from 'sweetalert2'
import { Button, Dropdown, Text, TextArea } from 'kintone-ui-component'
;(async ($, PLUGIN_ID) => {
  'use strict'
  // const config = {
  //   settings: [
  //     {
  //       field: '完了ステータス',
  //       tips: 'このフィールドの説明。<br>長さはどうかな？どこまでのびーる<br>長さはどうかな？どこまでのびーる<br>長さはどうかな？どこまでのびーる<br>長さはどうかな？どこまでのびーる<br>長さはどうかな？どこまでのびーる<br>長さはどうかな？どこまでのびーる<br>長さはどうかな？どこまでのびーる'
  //     },
  //     { field: '完了詳細', tips: 'このフィールドの説明。<br>長さはどうかな？どこまでのびーる' }
  //   ]
  // }
  const config = getConfig(PLUGIN_ID)
  if (!config.appId) config.appId = kintone.app.getId()

  const $submitButton = $('#config-submit')
  const $cancelButton = $('.js-cancel-button')
  if (!config.fields) {
    const fields = await getFields(config.appId)
    config.fields = fields
  }
  const $configs = $('#configs')
  const items = getItems(config.fields, true)
  $configs.append(
    $('<tr>')
      .append('<th>')
      .append(new Dropdown({ items: items, className: 'middle-dropdown' }))
      .append(new TextArea())
      .append(
        $('<td>')
          .addClass('kintoneplugin-table-td-operation')
          .append(
            $('<button type="button" title="Add row">')
              .addClass('kintoneplugin-button-add-row-image')
              .on('click', e => {})
          )
          .append(
            $('<button type="button" title="Delete this row">')
              .addClass('kintoneplugin-button-remove-row-image')
              .on('click', e => {})
          )
      )
  )
  // const fields = items.map(obj => obj.label).filter(value => value != '-----')
  // fields.forEach((field, index) =>
  //   $configs.append(
  //     $('<tr>').append(
  //       $('<th>')
  //         .append(new Text({ value: field, disabled: true }))
  //         .append(new TextArea({ className: 'textarea' }))
  //     )
  //   )
  // )

  $submitButton.on('click', e => {
    e.preventDefault()

    const textarea = $('.textarea')
    console.log(textarea)

    kintone.plugin.app.setConfig(checkConfig(config), () => {
      swal.fire({ html: 'プラグイン設定が保存されました。<br>アプリの更新も忘れずに！' })
      window.location.href = '../../flow?app=' + kintone.app.getId()
    })
  })
  $cancelButton.on('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/'
  })
})(jQuery, kintone.$PLUGIN_ID)
