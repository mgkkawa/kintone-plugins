const setting = ['日付', '時刻', 'MG担当者', 'コールメモ']
const origin = '電話番号'
const change = '次回電話番号'
const spaceCd = 'phone-link'
const dup1 = '番号重複レコード一覧1'
const dup2 = '番号重複レコード一覧2'
const dup3 = '番号重複レコード一覧3'
const his1 = 'コール履歴'
const his2 = 'インバウンド履歴'
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
  callhistory: {}
}
