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
