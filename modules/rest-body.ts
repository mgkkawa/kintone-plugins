export type get = {
  app: number | string
  id: number | string
}
export type gets = {
  app: number | string
  fields?: string[]
  query?: string
  totalCount?: boolean
}
export type post = {
  app: number | string
  record: object
}
export type posts = {
  app: number | string
  records: object[]
}
export type put = {
  app: number | string
  id?: number | string
  updateKey?: {
    field: string
    value: string
  }
  record: object
  revision?: number | string
}
export type puts = {
  app: number | string
  records: [
    {
      id?: number | string
      updateKey?: {
        field: string
        value: string
      }
    }
  ]
  record: object
  revision?: number | string
}
export type del = {
  app: number | string
  ids: number[] | string[]
  revisions: number[] | string[]
}
