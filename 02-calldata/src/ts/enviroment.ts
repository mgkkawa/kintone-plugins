const setting = ['インバウンド', '日付', '時刻', 'MG担当者', 'コールメモ']
const origin = '電話番号'
const change = '次回電話番号'
const spaceCd = 'phone-link'
const dup1 = '番号重複レコード一覧1'
const dup2 = '番号重複レコード一覧2'
const dup3 = '番号重複レコード一覧3'
const his1 = 'コール履歴'
const his2 = 'インバウンド履歴'
const refOrigin = 'URL'
const refChange = '会社概要'
const refSpaceCd = 'reference-url'
export const config = {
  appId: kintone.app.getId(),
  setting: setting,
  phoneset: {
    origin: origin,
    change: change,
    spaceCd: spaceCd,
    duplication1: dup1,
    duplication2: dup2,
    duplication3: dup3,
    fields: [dup1, dup2, dup3, his1, his2]
  },
  referenceURL: {
    origin: refOrigin,
    change: refChange,
    spaceCd: refSpaceCd
  },
  callhistory: {
    appId: 427,
    token: 'b2B44Bj2bxeN63gpQom2UEnwXlJ9fIdiF3tBItfD'
  },
  latest: {
    appId: 435,
    token: 'PUn7FwnTulz6N6lRpNVKIqTG2DyH3s5q3gNXc8lh'
  }
}
