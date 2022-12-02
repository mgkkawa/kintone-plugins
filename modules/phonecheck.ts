import Swal from 'sweetalert2'
import * as m from '../02-calldata/src/ts'

/**
 * 設定用Object内、originとchangeの値をそれぞれ
 * アプリ内に重複がないかチェックする。
 * @param event キントーンイベント
 * @param config 設定用Object
 */
export const allCheckPhone = async (event, config) => {
  const record = event.record
  const url = kintone.api.url('/k/v1/records', true)
  const phone1 = record[config.origin].value
  const phone2 = record[config.change].value
  const body = getBody(`${config.origin} = "${phone1}"`)

  await p1CheckToP1(url, body, config.duplication1, phone1)

  if (phone2) {
    body.query = `${config.origin} = "${phone2}"`
    await p1CheckToP2(url, body, config.duplication2, phone2)

    body.query = `${config.change} = "${phone2}"`
    await p2CheckToP2(url, body, config.duplication3, phone2, event)
  }
}

export const p2CheckPhone = async (event, config) => {
  const url = kintone.api.url('/k/v1/records', true)
  const phone = event.record[config.change].value
  const body = getBody(`${config.origin} = "${2}"`)

  await p1CheckToP1(url, body, config.duplication2, phone)

  body.query = `${config.change} = "${phone}"`
  await p2CheckToP2(url, body, config.duplication3, phone, event)
}

const getBody = (query: string, isTotalCount: boolean = true) => {
  return {
    app: kintone.app.getId(),
    query: query,
    totalCount: isTotalCount
  }
}

const p1CheckToP1 = async (url, body, field, val) => {
  await kintone.api(url, 'GET', body).then(async re => {
    if (re.totalCount <= 1) return
    m.kintoneFieldShown(field, true)
    Swal.fire({ html: `<b>電話番号：${val}は重複しています。</b>` })
  })
}

const p1CheckToP2 = async (url, body, field, val) => {
  await kintone.api(url, 'GET', body).then(async re => {
    if (re.totalCount == 0) return
    m.kintoneFieldShown(field, true)
    await Swal.fire({
      html: `<div>電話番号:${val}は重複しています。</div>`
    })
  })
}

const p2CheckToP2 = async (url, body, field, val, event) => {
  await kintone.api(url, 'GET', body).then(async re => {
    if (re.totalCount == 0) return

    const r = re.records
    let notIdentity = true
    r.forEach(record => {
      if (record.$id.value != event.record.$id.value) notIdentity = false
    })

    if (notIdentity) return

    m.kintoneFieldShown(field, true)
    await Swal.fire({
      html: `<div>電話番号:${val}は重複しています。</div>`
    })
  })
}
