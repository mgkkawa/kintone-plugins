jQuery.noConflict()
import swal from 'sweetalert2'
;(($, PLUGIN_ID) => {
  'use strict'
  const $form = $('.js-submit-settings')
  const $cancelButton = $('.js-cancel-button')
  const $message = $('.js-text-message')
  if (!($form.length > 0 && $cancelButton.length > 0 && $message.length > 0)) {
    throw new Error('Required elements do not exist.')
  }
  const config = kintone.plugin.app.getConfig(PLUGIN_ID)
  if (config.message) {
    $message.val(config.message)
  }
  $form.on('submit', e => {
    e.preventDefault()
    kintone.plugin.app.setConfig({ message: $message.val() }, async () => {
      await swal.fire({
        html: 'プラグイン設定が更新されました。<br>アプリを更新してください。'
      })
      window.location.href = '../../flow?app=' + kintone.app.getId()
    })
  })
  $cancelButton.on('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/'
  })
})(jQuery, kintone.$PLUGIN_ID)
