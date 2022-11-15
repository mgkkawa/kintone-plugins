import swal from 'sweetalert2'
jQuery.noConflict()
;(($, PLUGIN_ID) => {
  'use strict'

  kintone.events.on('app.record.index.show', () => {
    const config = kintone.plugin.app.getConfig(PLUGIN_ID)

    const spaceElement = kintone.app.getHeaderSpaceElement()
    if (spaceElement === null) {
      throw new Error('The header element is unavailable on this page')
    }
    const fragment = document.createDocumentFragment()
    const headingEl = document.createElement('h3')
    const messageEl = document.createElement('p')

    messageEl.classList.add('plugin-space-message')
    messageEl.textContent = config.message
    headingEl.classList.add('plugin-space-heading')
    headingEl.textContent = 'Hello kintone plugin!'

    fragment.appendChild(headingEl)
    fragment.appendChild(messageEl)
    spaceElement.appendChild(fragment)
  })
})(jQuery, kintone.$PLUGIN_ID)
