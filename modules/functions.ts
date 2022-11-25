import Swal from 'sweetalert2'
import { DELETE_KEYS } from '../03-callhistory/src/modules'

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
