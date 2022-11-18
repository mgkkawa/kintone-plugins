import { getConfig, replaceEnter } from '.'

jQuery.noConflict()
;(($, PLUGIN_ID) => {
  'use strict'

  kintone.events.on('app.record.detail.show', () => {
    const config = getConfig(PLUGIN_ID)
    console.log(config)
    const settings = config.settings
    const fields = settings.map(setting => setting.field)

    const gaia = $('#record-gaia')
    const elements = gaia.children().children().children()

    elements.each((i, element) => {
      const elem = $(element)
      const children = elem.children()
      const label = $(children[0])
      const text = label.text()

      if (!fields.includes(label.text())) return
      const index = fields.indexOf(text)
      const tips = replaceEnter(settings[index].tips)

      label.append(
        $('<span>')
          .addClass('tips-icon')
          .attr('id', 'tool-tips-' + i)
          .text('？')
          .append($('<div>').addClass('baloon').html(tips).hide())
          .on({
            'mouseenter': function () {
              $(this).children('.baloon').fadeIn('fast')
            },
            'mouseleave': function () {
              $(this).children('.baloon').fadeOut('fast')
            }
          })
      )

      console.log(label.children())
    })
  })
})(jQuery, kintone.$PLUGIN_ID)
