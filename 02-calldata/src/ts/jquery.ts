import $ from 'jquery'
import * as m from '../../../modules'

const $tr = $(m.tr)
const $td = $(m.td)
export const $table = (elems: JQuery) => {
  const td = $tr.append($td)
  elems.each((_i, elem) => {
    td.append($(elem))
  })
  return $tr.append($td)
}
