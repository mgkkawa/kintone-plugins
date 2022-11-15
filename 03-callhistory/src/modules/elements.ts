import { Button, Dropdown, Text } from 'kintone-ui-component'
import { DELETE_KEYS, getUnicode } from './index'

export const callhistory = {
  list: function (items, value) {
    return new Dropdown({
      // className: '',
      // error: '',
      id: 'callhistory-app',
      label: '履歴アプリ',
      value: value,
      // selectedIndex: 0,
      // disabled: false,
      // requiredIcon: false,
      // visible: true,
      items: items
    })
  },
  text: function (value) {
    return new Text({
      label: '履歴アプリAPIトークン',
      // requiredIcon: true,
      value: value,
      placeholder: 'コール履歴アプリのAPIトークンを入力。',
      // prefix: '$',
      // suffix: 'yen',
      textAlign: 'left',
      // error: 'Error occurred!',
      // className: 'options-class',
      id: 'callhistory-token',
      visible: true,
      disabled: false
    })
  },
  button: new Button({
    text: '保存',
    type: 'submit',
    // className: 'options-class',
    id: 'callhistory-submit',
    visible: true,
    disabled: false
  })
}

const callapp = {
  label: function () {
    const label = document.createElement('div')
    label.className = 'config-label'
    label.id = 'config-label'
    label.innerText = 'コールアプリ設定'
    return label
  },
  list: function (fields, values = []) {
    const items = []

    for (let key in fields) {
      const field = fields[key]
      if (DELETE_KEYS.includes(field.type) || values.includes(field.code)) continue
      items.push({ label: field.label, value: field.code })
    }
    items.sort((a, b) => {
      const _a = a.label.split('').map(value => value.codePointAt(0))
      const _b = b.label.split('').map(value => value.codePointAt(0))

      let check
      let result
      const array = _a
      const target = _b

      array.forEach((num, index) => {
        if (check || !target[index] || num == target[index]) return
        result = num - target[index]
        check = true
      })

      return result
    })

    return new Dropdown({
      // className: '',
      // error: '',
      id: 'config-list',
      label: '履歴アプリフィールド',
      // value: ,
      // selectedIndex: 0,
      // disabled: false,
      // requiredIcon: false,
      // visible: true,
      items: items
    })
  }
}
