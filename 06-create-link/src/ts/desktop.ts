import * as m from '../../../modules'
jQuery.noConflict()
;(function ($, PLUGIN_ID) {
  'use strict'
  const config = m.getConfig(PLUGIN_ID)
  console.log(config)

  if (!config.setting) return
  const setting = config.setting

  kintone.events.on(m.events.all3.show(), async e => {
    m.createWebLink(setting.elementId, setting.value)
  })
})(jQuery, kintone.$PLUGIN_ID)
