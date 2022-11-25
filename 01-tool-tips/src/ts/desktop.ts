import { getConfig, replaceEnter } from '.'
import * as tag from '../../../modules/modern-class'

jQuery.noConflict()
;(($, PLUGIN_ID) => {
  'use strict'

  kintone.events.on(['app.record.detail.show', 'app.record.edit.show'], event => {
    const config = getConfig(PLUGIN_ID)
    console.log(config)
    if (!config.settings || !config.settings.length) return event
    const settings = config.settings
    const fields = settings.map(setting => setting.field)

    const gaia = $('#record-gaia')
    const layout = $(gaia.children())
    const rows = $(layout.children())
    const elems = $(rows.children())
    const labels = $(elems.children('.control-label-gaia'))

    labels.each((i, e) => {
      const label = $(e)
      const text = label.text()
      if (!fields.includes(text)) return
      const index = fields.indexOf(text)
      const tips = replaceEnter(settings[index].tips)

      label.append(
        $(tag.span)
          .addClass('tips-icon')
          .attr('id', 'tool-tips-' + i)
          .text('？')
          .append($(tag.div).addClass('baloon').html(tips).hide())
          .on({
            'mouseenter': function () {
              $(this).children('.baloon').fadeIn('fast')
            },
            'mouseleave': function () {
              $(this).children('.baloon').fadeOut('fast')
            }
          })
      )
    })
    return event
  })
})(jQuery, kintone.$PLUGIN_ID)
