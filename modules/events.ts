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

const show = (event: string | string[]) => {
  if (typeof event === 'string') event = [event]
  return event.map(e => ORIGINAL + e + SHOW)
}
const change = (event: string | string[]) => {
  if (typeof event === 'string') event = [event]
  return event.map(e => ORIGINAL + e + CHANGE)
}
const submit = (event: string | string[]) => {
  if (typeof event === 'string') event = [event]
  return event.map(e => ORIGINAL + e + SUBMIT)
}
const success = (event: string | string[]) => {
  if (typeof event === 'string') event = [event]
  return event.map(e => ORIGINAL + e + SUBMIT + SUCCESS)
}

export const events = {
  all3: {
    show: (isMobile: boolean = false) => {
      const result: string[] = show([DETAIL, CREATE, EDIT])
      if (isMobile) addMobile(result)
      return result
    }
  },
  index: {
    show: (isMobile: boolean = false) => {
      const result: string[] = show(INDEX)
      if (isMobile) addMobile(result)
      return result
    }
  },
  detail: {
    show: (isMobile: boolean = false) => {
      const result: string[] = show(DETAIL)
      if (isMobile) addMobile(result)
      return result
    }
  },
  create: {
    show: (isMobile: boolean = false) => {
      const result: string[] = show(CREATE)
      if (isMobile) addMobile(result)
      return result
    },
    change: (fieldCds: string | string[], isMobile: boolean = false) => {
      const str: string = change(CREATE)[0]
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
      const result: string[] = show(EDIT)
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
      const result: string[] = show([CREATE, EDIT])
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
