import $ from 'jquery'
jQuery.noConflict()

const spaceHead = '.spacer-cybozu#user-js-'
const getSpace = (spaceCd: string) => $(spaceHead + spaceCd)
const getLabel = (str: string) => `<div class="control-label-gaia">${str}</div>`
/**
 * 設定したスペースフィールドに
 * 電話番号リンクを設定する。
 * @param spaceCd スペースフィールドに設定した要素ID
 * @param phone 電話番号
 */
export const createPhoneLink = (spaceCd, phone) => {
  const space = getSpace(spaceCd)
  const label: string = getLabel('電話番号リンク')
  const link: string = `<div class="phone-link"><a href="tel:${phone}" target="_blank" >${phone}</a></div>`
  space.html(label + link)
}

export const createWebLink = (spaceCd, url) => {
  const space = getSpace(spaceCd)
  const label: string = getLabel('会社概要URL')
  const link: string = `<div class="phone-link"><a href="${url}" target="_blank">${url}</a></div>`
  space.html(label + link)
}
