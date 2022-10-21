const ORIGINAL = 'app.record'
const MOBILE = 'mobile.'
const INDEX = '.index'
const DETAIL = '.detail'
const CREATE = '.create'
const EDIT = '.edit'
const SHOW = '.show'
const CHANGE = '.change.'
const SUBMIT = '.submit'
const SUCCESS = '.success'

export const events = {
  index: {
    show: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + INDEX + SHOW]
      if (isMobile) addMobile(result)
      return result
    }
  },
  detail: {
    show: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + DETAIL + SHOW]
      if (isMobile) addMobile(result)
      return result
    }
  },
  create: {
    show: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + CREATE + SHOW]
      if (isMobile) addMobile(result)
      return result
    },
    change: (fieldCds: string | string[], isMobile: boolean = false) => {
      const str: string = ORIGINAL + CREATE + CHANGE
      if (typeof fieldCds === 'string') fieldCds = [fieldCds]
      const result = fieldCds.map(fieldCd => str + fieldCd)
      if (isMobile) addMobile(result)
      return result
    },
    submit: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + CREATE + SUBMIT]
      if (isMobile) addMobile(result)
      return result
    },
    success: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + CREATE + SUBMIT + SUCCESS]
      if (isMobile) addMobile(result)
      return result
    }
  },
  edit: {
    show: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + EDIT + SHOW]
      if (isMobile) addMobile(result)
      return result
    },
    change: (fieldCds: string | string[], isMobile: boolean = false) => {
      const str: string = ORIGINAL + EDIT + CHANGE
      if (typeof fieldCds === 'string') fieldCds = [fieldCds]
      const result = fieldCds.map(fieldCd => str + fieldCd)
      if (isMobile) addMobile(result)
      return result
    },
    submit: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + EDIT + SUBMIT]
      if (isMobile) addMobile(result)
      return result
    },
    success: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + EDIT + SUBMIT + SUCCESS]
      if (isMobile) addMobile(result)
      return result
    }
  },
  credit: {
    show: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + CREATE + SHOW, ORIGINAL + EDIT + SHOW]
      if (isMobile) addMobile(result)
      return result
    },
    change: (fieldCds: string | string[], isMobile: boolean = false) => {
      const strs: string[] = [ORIGINAL + CREATE + CHANGE, ORIGINAL + EDIT + CHANGE]
      if (typeof fieldCds === 'string') fieldCds = [fieldCds]
      const result = fieldCds.flatMap(fieldCd => strs.map(str => str + fieldCd))
      if (isMobile) addMobile(result)
      return result
    },
    submit: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + CREATE + SUBMIT, ORIGINAL + EDIT + SUBMIT]
      if (isMobile) addMobile(result)
      return result
    },
    success: (isMobile: boolean = false) => {
      const result: string[] = [ORIGINAL + CREATE + SUBMIT + SUCCESS, ORIGINAL + EDIT + SUBMIT + SUCCESS]
      if (isMobile) addMobile(result)
      return result
    }
  }
}

const addMobile = (arg: string[]) => {
  const length = arg.length
  for (let i = 0; i < length; i++) {
    arg.push(MOBILE + arg[i])
  }
  return arg
}
