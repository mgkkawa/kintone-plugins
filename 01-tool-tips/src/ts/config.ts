import { checkConfig, getConfig, getFields, getItems } from '.'
import swal from 'sweetalert2'
import { Dropdown, TextArea } from 'kintone-ui-component'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  'use strict'
  const config = getConfig(PLUGIN_ID)
  if (!config.appId) config.appId = kintone.app.getId()
  console.log(config)

  const $submitButton = $('#config-submit')
  const $cancelButton = $('.js-cancel-button')
  if (!config.fields) {
    const fields = await getFields(config.appId)
    config.fields = fields
  }
  const $configs = $('#configs')
  const items = getItems(config.fields, true)

  if (!config.settings) {
    $configs.append(
      $('<tr>').append(
        $('<th>')
          .append(
            $('<td>')
              .append(new Dropdown({ items: items, className: 'middle-dropdown', selectedIndex: 0 }))
              .append(new TextArea({ className: 'tips' }))
          )
          .append(
            $('<td>')
              .addClass('kintoneplugin-table-td-operation')
              .append(
                $('<button type="button" title="Add row">')
                  .addClass('kintoneplugin-button-add-row-image')
                  .attr('id', 'add-row')
              )
              .append(
                $('<button type="button" title="Delete this row">')
                  .addClass('kintoneplugin-button-remove-row-image')
                  .attr('id', 'delete-row')
              )
          )
      )
    )
  } else {
    for (let setting of config.settings) {
      $configs.append(
        $('<tr>').append(
          $('<th>')
            .append(
              $('<td>')
                .append(new Dropdown({ items: items, className: 'middle-dropdown', value: setting.field }))
                .append(new TextArea({ className: 'tips', value: setting.tips }))
            )
            .append(
              $('<td>')
                .addClass('kintoneplugin-table-td-operation')
                .append(
                  $('<button type="button" title="Add row">')
                    .addClass('kintoneplugin-button-add-row-image')
                    .attr('id', 'add-row')
                )
                .append(
                  $('<button type="button" title="Delete this row">')
                    .addClass('kintoneplugin-button-remove-row-image')
                    .attr('id', 'delete-row')
                )
            )
        )
      )
    }
    $configs.append(
      $('<tr>').append(
        $('<th>')
          .append(
            $('<td>')
              .append(new Dropdown({ items: items, className: 'middle-dropdown', selectedIndex: 0 }))
              .append(new TextArea({ className: 'tips' }))
          )
          .append(
            $('<td>')
              .addClass('kintoneplugin-table-td-operation')
              .append(
                $('<button type="button" title="Add row">')
                  .addClass('kintoneplugin-button-add-row-image')
                  .attr('id', 'add-row')
              )
              .append(
                $('<button type="button" title="Delete this row">')
                  .addClass('kintoneplugin-button-remove-row-image')
                  .attr('id', 'delete-row')
              )
          )
      )
    )
  }
  $submitButton.on('click', e => {
    e.preventDefault()

    const fields = $('.middle-dropdown')
    const texts = $('.tips')
    const settings = []
    fields.each((i, html) => {
      const field = $(html).val()
      const text = $(texts[i]).val()
      if (!field || !text) return
      settings.push({ field: field, tips: text })
    })
    config.settings = settings

    kintone.plugin.app.setConfig(checkConfig(config), async () => {
      await swal.fire({ html: '????????????????????????????????????????????????<br>????????????????????????????????????' })
      window.location.href = '../../flow?app=' + kintone.app.getId()
    })
  })
  $cancelButton.on('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/'
  })
  $(document).on('click', '#add-row', e => {
    $configs.append(
      $('<tr>').append(
        $('<th>')
          .append(
            $('<td>')
              .append(new Dropdown({ items: items, className: 'middle-dropdown', selectedIndex: 0 }))
              .append(new TextArea({ className: 'tips' }))
          )
          .append(
            $('<td>')
              .addClass('kintoneplugin-table-td-operation')
              .append(
                $('<button type="button" title="Add row">')
                  .addClass('kintoneplugin-button-add-row-image')
                  .attr('id', 'add-row')
              )
              .append(
                $('<button type="button" title="Delete this row">')
                  .addClass('kintoneplugin-button-remove-row-image')
                  .attr('id', 'delete-row')
              )
          )
      )
    )
  })
  $(document).on('click', '#delete-row', e => {
    e.preventDefault()
    $(e.target).parents('tr')[0].remove()
  })
})(jQuery, kintone.$PLUGIN_ID)
