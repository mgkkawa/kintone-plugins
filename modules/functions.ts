import Swal from 'sweetalert2'
import { DELETE_KEYS } from '../03-callhistory/src/modules'

export const compCheck = async html => {
  return await Swal.fire({
    html: html,
    confirmButtonText: 'はい',
    showCancelButton: true,
    cancelButtonText: 'いいえ',
    allowEnterKey: false,
    allowEscapeKey: false,
    allowOutsideClick: false
  })
}

export const getItems = (fields, isField = false) => {
  const items = []

  for (let key in fields) {
    const field = fields[key]
    if (DELETE_KEYS.includes(field.type)) continue
    items.push({ label: field.label, value: isField ? field.label : field.code })
  }
  items.sort((a, b) => {
    if (!a.label || !b.label) return true
    const _a = a.label.split('').map(value => value.codePointAt(0))
    const _b = b.label.split('').map(value => value.codePointAt(0))

    let check
    let result
    const array = _a
    const target = _b

    array.forEach((num, index) => {
      if (check || !target[index] || num == target[index]) return
      result = num - target[index]
      check = true
    })

    return result
  })
  items.unshift({ label: '-----', value: '-----' })
  return items
}

export const getOptions = (fields, isField) => {
  const options = []

  for (let key in fields) {
    const field = fields[key]
    if (DELETE_KEYS.includes(field.type)) continue
    options.push({ label: field.label, value: isField ? field.label : field.code })
  }
}

export const labelSort = fields => {
  fields.sort((a, b) => {
    if (!a.label || !b.label) return true
    const _a = a.label.split('').map(value => value.codePointAt(0))
    const _b = b.label.split('').map(value => value.codePointAt(0))

    let check
    let result
    const array = _a
    const target = _b

    array.forEach((num, index) => {
      if (check || !target[index] || num == target[index]) return
      result = num - target[index]
      check = true
    })

    return result
  })
  return fields
}

export const parse = s => {
  // preserve newlines, etc - use valid JSON
  s = s
    .replace(/\\n/g, '\\n')
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, '\\&')
    .replace(/\\r/g, '\\r')
    .replace(/\\t/g, '\\t')
    .replace(/\\b/g, '\\b')
    .replace(/\\f/g, '\\f')

  // remove non-printable and other non-valid JSON chars
  s = s.replace(/[\u0000-\u0019]+/g, '')

  return JSON.parse(s)
}

export const duplicationPhoneCheck = async (event, phoneset, value) => {
  const origin = phoneset.origin
  const change = phoneset.change
  return await kintone
    .api(kintone.api.url('/k/v1/records', true), 'GET', {
      app: kintone.app.getId(),
      query: `${origin} = "${value}" or ${change} = "${value}"`,
      totalCount: true
    })
    .then(resp => {
      console.log(resp)
      return resp.totalCount
    })
    .catch(error => console.log(error))
}

export const duplicationPopup = async phone => {
  await Swal.fire({
    html: `<div><b>${phone}は重複があります。</b></div>`
  })
}

export const checkPostNumber = value => value == '000-0000' || !value.match(/^[0-9]{3}-?[0-9]{4}$/)

export const checkMailAddress = value =>
  !value.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)

export const toJaNum = num => {
  if (typeof num === 'number') {
    num = num.toString()
  }

  num = num.replace(/[, ]/g, '')

  let prefix = ''

  if (num[0] === '-') {
    num = num.slice(1)
    prefix = '-'
  }

  return (
    prefix +
    num
      .slice(0, -12)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1兆') +
    num
      .slice(-12, -8)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1億') +
    num
      .slice(-8, -4)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1万') +
    num.substring(num.length - 4).replace(/^0+/, '')
  )
}

export const hankaku2Zenkaku = (str: string) => {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
}

export const getSalesHtml = (prevSales, sales, ratio) => {
  const h2 = '<h2 class="popup-title">'
  const h2close = '</h2>'

  let html = h2 + '推測値と大幅に乖離しています。' + h2close
  html += `<div>前期売上高（億万）：${toJaNum(prevSales)}</div>`
  html += `<div>取得売上高（億万）：${toJaNum(sales)}</div>`
  html += `<div>前期売上高：${prevSales}</div>`
  html += `<div>取得売上高：${sales}</div>`
  html += `<div>比率${ratio}</div>`

  return html
}

export const checkValue = (value, arg) => {
  if (value == undefined) return false
  return !!value.match(arg)
}
