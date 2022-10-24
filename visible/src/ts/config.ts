jQuery.noConflict()
;(function ($, PLUGIN_ID) {
  'use strict'

  $(document).ready(function () {
    // プラグインIDの設定
    const conf = kintone.plugin.app.getConfig(PLUGIN_ID)
    console.log(conf)

    //既に値が設定されている場合はフィールドに値を設定する
    if (typeof conf['elm'] !== 'undefined') {
      $('#element').val(conf['elm'])
    }

    // アプリのフォーム情報を取得
    kintone.api(
      kintone.api.url('/k/v1/app/form/fields', true),
      'GET',
      {
        app: kintone.app.getId()
      },
      function (resp) {
        for (let key in resp.properties) {
          if (!resp.properties.hasOwnProperty(key)) {
            continue
          }
          let confFlg = false
          const prop = resp.properties[key]
          const label = prop.label
          const code = prop.code

          console.log(prop)

          if (typeof conf['name'] !== 'undefined' && code === conf['name']) confFlg = true

          if (confFlg) {
            $('#name_code').prepend('<option name=' + code + ' selected>' + label + '</option>')
          } else {
            $('#name_code').append('<option name=' + code + '>' + label + '</option>')
          }
          // if (prop.type === 'SINGLE_LINE_TEXT') {
          //   if (typeof conf['name'] !== 'undefined' && code === conf['name']) {
          //     confFlg = true
          //   }
          //   if (confFlg) {
          //     $('#name_code').prepend('<option name=' + code + ' selected>' + label + '</option>')
          //   } else {
          //     $('#name_code').append('<option name=' + code + '>' + label + '</option>')
          //   }
          // } else if (prop.type === 'DATETIME') {
          //   if (typeof conf['name'] !== 'undefined' && code === conf['start_datetime']) {
          //     $('#start_datetime_code').prepend('<option name=' + code + ' selected>' + label + '</option>')
          //     $('#end_datetime_code').append('<option name=' + code + '>' + label + '</option>')
          //   } else if (typeof conf['name'] !== 'undefined' && code === conf['end_datetime']) {
          //     $('#start_datetime_code').append('<option name=' + code + '>' + label + '</option>')
          //     $('#end_datetime_code').prepend('<option name=' + code + ' selected>' + label + '</option>')
          //   } else {
          //     $('#start_datetime_code').append('<option name=' + code + '>' + label + '</option>')
          //     $('#end_datetime_code').append('<option name=' + code + '>' + label + '</option>')
          //   }
          // }
        }
      },
      error => console.log(error)
    )
  })
})(jQuery, kintone.$PLUGIN_ID)
