jQuery.noConflict()
export const getRow = (items, count) => {
  return $('div')
    .addClass('kintoneplugin-datadiv')
    .attr('id', 'kintoneplugin-tab1-data-' + count)
    .append($('span').addClass('kintoneplugin-number').text(count))
    .append(
      $('span')
        .addClass('kintoneplugin-dropdown-outer kintoneplugin-fieldlist-outer')
        .attr('id', 'kintoneplugin-fieldname-' + count)
        .append(
          $('select')
            .addClass('kintoneplugin-dropdown kintoneplugin-fieldlist')
            .attr('id', 'tipsfield-fieldcd-' + count)
            .append(items)
        )
        .append(
          $('span')
            .addClass('kintoneplugin-button-dialog-ok')
            .attr('id', 'html-editor-' + count)
        )
    )
    .append(
      $('span')
        .attr('id', 'tab1-plus-' + count)
        .append('i')
        .addClass('fd fd-plus-circle kintoneplugin-button')
    )
    .append(
      $('span')
        .attr('id', 'tab1-minus-' + count)
        .append('i')
        .addClass('fd fd-minus-circle kintoneplugin-button')
    )
}
