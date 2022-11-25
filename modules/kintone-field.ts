import moment from 'moment'
/**
 * 表示・非表示の切り替えを行うメソッド。
 * @param fieldCds 表示・非表示の切り替えをしたいフィールド。単一で有れば文字列で設定可能
 * @param isShown 表示＝true　非表示＝false
 */
export const kintoneFieldShown = (fieldCds: string | string[], isShown: any = false) => {
  if (typeof fieldCds === 'string') fieldCds = [fieldCds]
  if (typeof isShown != 'boolean') isShown = !!isShown

  fieldCds.forEach(fieldCd => kintone.app.record.setFieldShown(fieldCd, isShown))
}

/**
 * レコード内、編集不可設定を行うメソッド。
 * @param record evemt.record
 * @param fieldCds 編集不可にしたいフィールド。
 */
export const kintoneDisabledField = (record, fieldCds: string | string[]) => {
  if (typeof fieldCds === 'string') fieldCds = [fieldCds]

  fieldCds.forEach(fieldCd => {
    if (record[fieldCd]) record[fieldCd].disabled = true
  })
}

/**
 * 指定したフィールドの値をリセット。
 * 日付・時刻・日時フィールドには現在日時をそれぞれセット。
 * ユーザー選択フィールドにはログインユーザーの情報をセット。
 * @param record event.record
 * @param fieldCds 値をリセットしたいフィールド。
 */
export const kintoneResetValue = (record, fieldCds: string | string[]) => {
  if (typeof fieldCds === 'string') fieldCds = [fieldCds]

  const m = moment()
  const user = kintone.getLoginUser()

  fieldCds.forEach(fieldCd => {
    const field = record[fieldCd]
    const type = field.type
    switch (type) {
      case 'DATE':
        field.value = m.format('YYYY-MM-DD')
        break
      case 'TIME':
        field.value = m.format('H:mm')
        break
      case 'DATETIME':
        field.value = m.format()
        break
      case 'USER_SELECT':
        field.value = [{ code: user.code, name: user.name }]
        break
      case 'SINGLE_LINE_TEXT':
        field.value = ''
        break
      case 'MULTI_LINE_TEXT':
        field.value = ''
        break
    }
  })
}
