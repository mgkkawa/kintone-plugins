export const replaceEnter = str => str.replace(/\n|\r\n|\r/g, '<br>')

export const checkPhoneNumber = str => !str.match(/^0[-0-9]{9,12}$/)

export const getPhoneNumber = (str: string) => {
  if (typeof str != 'string') return ''
  if (str.includes('-')) return str
  const length: number = str.length

  const a = '-'
  let top: string
  let middle: string
  let bottum: string

  if (length == 10) {
    top = str.slice(0, 2)
    middle = str.slice(2, 6)
    bottum = str.slice(6)
  } else {
    top = str.slice(0, 3)
    middle = str.slice(3, 7)
    bottum = str.slice(7)
  }

  return top + a + middle + a + bottum
}

export const checkUrl = (str: string) => {
  return !str.match(/^https?:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+/)
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
