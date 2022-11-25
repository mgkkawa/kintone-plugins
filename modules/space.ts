import $ from 'jquery'
jQuery.noConflict()
/**
 * 設定したスペースフィールドに
 * 電話番号リンクを設定する。
 * @param spaceCd スペースフィールドに設定した要素ID
 * @param phone 電話番号
 */
export const createPhoneLink = (spaceCd, phone) => {
  const space = $('.spacer-cybozu#user-js-' + spaceCd)
  const label: string = '<div class="control-label-gaia">電話番号リンク</div>'
  const link: string = `<div class="phone-link"><a href="tel:${phone}" target="_blank" >${phone}</a></div>`
  space.html(label + link)
}
