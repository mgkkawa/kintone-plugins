import { Dropdown, DropdownProps, Text } from 'kintone-ui-component'

export const historySelect = (items, value = '') => {
  const params: DropdownProps = {
    label: 'コール履歴アプリ選択',
    className: 'history-app code',
    items: items
  }
  !value ? (params.selectedIndex = 0) : (params.value = value)
  return new Dropdown(params)
}

export const historyToken = (value = '') =>
  new Text({
    label: 'コール履歴アプリ APIトークン',
    className: 'history-app token',
    value: value
  })

export const latestSelect = (items, value = '') => {
  const params: DropdownProps = {
    label: '過去データアプリ選択',
    className: 'latest-app code',
    items: items
  }
  !value ? (params.selectedIndex = 0) : (params.value = value)
  return new Dropdown(params)
}

export const latestToken = (value = '') =>
  new Text({
    label: '過去データアプリ APIトークン',
    className: 'latest-app token',
    value: value
  })
