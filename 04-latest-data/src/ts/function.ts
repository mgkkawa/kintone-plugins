import * as kuc from 'kintone-ui-component'

export const apps = items => {
  return new kuc.Dropdown({
    id: 'appId',
    label: '過去データアプリ',
    items: items,
    requiredIcon: true,
    selectedIndex: 0,
  })
}

export const text = new kuc.Text({
  label: '過去データアプリAPIトークン',
  placeholder: '過去データアプリのAPIトークンを入力',
  textAlign: 'left',
  id: 'token',
  visible: true,
  disabled: false,
  requiredIcon: true,
})

export const button = new kuc.Button({
  text: '保存',
  type: 'submit',
  id: 'submit',
  visible: true,
  disabled: false,
})
