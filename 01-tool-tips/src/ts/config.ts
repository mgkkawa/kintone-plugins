jQuery.noConflict()
import { Button } from 'kintone-ui-component'
import swal from 'sweetalert2'
;(($, PLUGIN_ID) => {
  'use strict'

  const form = new Button({ text: '保存', type: 'submit' })
  const cancelButton = new Button({ text: 'キャンセル', type: 'normal' })
  const $form = $('.js-submit-settings')
  const $cancelButton = $('.js-cancel-button')
  const $message = $('.js-text-message')
  console.log($form)
  if (!($form.length > 0 && $cancelButton.length > 0 && $message.length > 0)) {
    throw new Error('Required elements do not exist.')
  }
  const config = kintone.plugin.app.getConfig(PLUGIN_ID)

  if (config.message) {
    $message.val(config.message)
  }
  $form.on('submit', e => {
    e.preventDefault()
    kintone.plugin.app.setConfig({ message: $message.val() }, () => {
      swal.fire({ html: 'プラグイン設定が保存されました。<br>アプリの更新も忘れずに！' })
      window.location.href = '../../flow?app=' + kintone.app.getId()
    })
  })
  $cancelButton.on('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/'
  })
})(jQuery, kintone.$PLUGIN_ID)
