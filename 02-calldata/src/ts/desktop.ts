import { Button } from 'kintone-ui-component'
import Swal from 'sweetalert2'
import * as m from '.'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  const config = m.config
  const phoneset = config.phoneset
  const reference = config.referenceURL
  const history = config.callhistory
  const disabled = m.DISABLED_FIELDS
  const hiddens = m.HIDDEN_FIELDS

  kintone.events.on(m.events.index.show(), async event => {
    console.log(event)

    if (event.viewName != 'リスト取り込み') return event

    const space = $('.kintone-app-headermenu-space')
    space.append(new Button({ text: 'リスト作成', className: 'list-button' }))
    $(document).on('click', '.list-button', async e => {
      const title = '<h1><b>リスト処理中</b></h1>'

      const check = await Swal.fire({
        html: '<div><b>リストを作成しますか？</b></div>',
        confirmButtonText: 'はい',
        showCancelButton: true,
        cancelButtonText: 'いいえ',
      })
      if (check.isDismissed) {
        await Swal.fire({
          html: '<div><b>リスト作成を中断しました。</b></div>',
        })
        return
      }
      await Swal.fire({
        html: title,
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading(Swal.getDenyButton())

          const popup = $(Swal.getHtmlContainer())
          popup.html(title + '<div>レコード確認中</div>')

          const records = await m.getRecords(event.appId)
          const info = await m.getAppInfo(event.appId)
          console.log(info)

          popup.html(title + '<div>レコード処理中</div>')

          records.sort((a, b) => a.法人番号.value - b.法人番号.value)
          const phones = records.map(record => record.電話番号.value).filter(phone => phone)

          const duplist = []
          const list = []

          records.forEach(record => {
            const phone = record.電話番号.value
            const duplicate = phones.filter(tel => tel == phone)
            duplicate.shift()
            m.DELETE_FIELDS.forEach(field => delete record[field])
            record.番号重複チェック.value = duplicate.length
            record.完了ステータス.value = '未架電'
            record.コール数.value = 0
            record.前々期売上高億万.value = m.toJaNum(record.前々期売上高.value) + '円'
            record.前期売上高億万.value = m.toJaNum(record.前期売上高.value) + '円'
            record.案件名.value = info.name
            record.inout.value = 'out'
            if (duplicate.length) {
              record.事前備考.value = '番号重複企業あり。'
              duplist.push(record)
            } else {
              list.push(record)
            }
          })
          duplist.sort((a, b) => {
            if (a.番号重複チェック.value < b.番号重複チェック.value) return 1
            if (a.番号重複チェック.value > b.番号重複チェック.value) return -1
            if (a.電話番号.value > b.電話番号.value) return 1
            if (a.電話番号.value < b.電話番号.value) return -1
            return 0
          })
          list.sort((a, b) => a.法人番号.value - b.法人番号.value)
          const result = duplist.concat(list)

          let listNo = 1
          result.forEach((record, i) => {
            if (listNo * 100 == i) listNo += 1
            record.リスト番号.value = listNo
          })
          popup.html(title + '<div>レコード更新中</div>')
          await m.allPuts(event.appId, result, '法人番号')

          Swal.close()
        },
      })

      await Swal.fire({
        html: '<div><b>リスト処理完了</b></div>',
        icon: 'success',
        showConfirmButton: true,
        showCancelButton: false,
        showDenyButton: false,
        allowOutsideClick: true,
        allowEscapeKey: true,
      })
    })
    return event
  })

  kintone.events.on(m.events.detail.show(), async event => {
    const r = event.record

    m.kintoneFieldShown(phoneset.fields)
    m.kintoneFieldShown('コール履歴', r.コール数.value != '' && r.コール数.value != 0)
    m.kintoneFieldShown('インバウンド履歴', r.インバウンドコール数.value != '' && r.インバウンドコール数.value != 0)

    if (phoneset) await m.allCheckPhone(event, phoneset)

    return event
  })

  kintone.events.on(m.events.edit.show(), async event => {
    const r = event.record
    const status = r.完了ステータス.value
    if (status == '完了') {
      const html = '<h2 class="popup-title">完了済みのレコードです。</h2><div>再架電しますか？</div>'
      const check = await m.compCheck(html)
      if (check.isDismissed) {
        r.編集ステータス.value = 1
        return event
      }
      m.kintoneResetValue(r, [
        '担当者取次',
        '終話タイミング',
        '終話詳細',
        '完了詳細',
        'NG詳細',
        'NGその他',
        '編集ステータス',
      ])
      r.完了ステータス.value = '確認中'
      r.完了日.value = ''
      r.完了時担当者.value = []
    }
    m.kintoneResetValue(r, ['担当者取次', '不通詳細'])
    const setting = config.setting
    if (r.インバウンドコール数.value != '' && r.インバウンドコール数.value != 0) {
      const html = '<h2 class="popup-title"><b>インバウンド履歴あり</b></h2><div>内容確認後に架電してください。</div>'
      Swal.fire({ html: html })
      m.kintoneFieldShown('インバウンド履歴', true)
    }

    if (setting.length) m.kintoneResetValue(r, setting)
    if (hiddens.length) m.kintoneFieldShown(hiddens)
    if (disabled.length) m.kintoneDisabledField(r, disabled)

    if (phoneset) {
      let phone = r[phoneset.origin].value
      if (r[phoneset.change].value) phone = r[phoneset.change].value

      m.createPhoneLink(phoneset.spaceCd, phone)
      await m.allCheckPhone(event, phoneset)
    }

    if (reference) {
      const origin = r[reference.origin].value
      const change = r[reference.change].value
      if (origin) m.createWebLink(reference.spaceCd, change ? change : origin)
    }

    if (history) {
      const params = {
        appId: history.appId,
        token: history.token,
        serialNo: r.法人番号.value,
        caseName: r.案件名.value,
      }

      const count = await m.getCallCount(params)
      r.コール数.value = count ? count + 1 : 1

      const inbound = await m.getCallCount(params, true)
      r.インバウンドコール数.value = inbound
      console.log(inbound)

      m.kintoneFieldShown('コール履歴', r.コール数.value - 1)
      m.kintoneFieldShown('インバウンド履歴', r.インバウンドコール数.value)
    }

    return event
  })

  if (phoneset) {
    kintone.events.on(m.events.edit.change(phoneset.change), event => {
      const field = event.changes.field
      field.error = null
      if (!field.value) return event

      if (m.checkPhoneNumber(field.value)) {
        field.error = '電話番号を入力してください。'
        return event
      }

      field.value = m.getPhoneNumber(field.value)
      const phone = field.value
      m.createPhoneLink(phoneset.spaceCd, phone)
      m.p2CheckPhone(event, phoneset)

      return event
    })
  }

  if (reference) {
    kintone.events.on(m.events.edit.change(reference.change), event => {
      const field = event.changes.field
      field.error = null
      if (!field.value) return event

      if (m.checkUrl(field.value)) {
        field.error = 'URLを入力してください'
        return event
      }

      m.createWebLink(reference.spaceCd, field.value)

      return event
    })
  }

  kintone.events.on(m.events.edit.change('インバウンド'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value
    if (v.length) {
      console.log('インバウンド')
      m.kintoneFieldShown('再架電フラグ')
      m.kintoneFieldShown('エスカレーション有無', true)
      r.inout.value = 'in'
    } else {
      console.log('アウトバウンド')
      m.kintoneFieldShown('再架電フラグ', true)
      m.kintoneFieldShown('エスカレーション有無')
      r.inout.value = 'out'
    }
    return event
  })

  kintone.events.on(m.events.edit.change('担当者取次'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value
    console.log(v)

    const isManager = m.checkValue(v, /担当者$/)
    const isNotCall = m.checkValue(v, '不通')
    m.kintoneFieldShown('終話タイミング', isManager)
    m.kintoneFieldShown('不通詳細', isNotCall)

    if (!v) {
      r.完了ステータス.value = '確認中'
      m.kintoneResetValue(r, ['完了詳細', '不通詳細', 'NG詳細', 'NGその他'])
      return event
    }

    if (!isManager && !isNotCall) {
      r.完了ステータス.value = '完了'
      m.kintoneResetValue(r, ['不通詳細', '終話タイミング'])
      return event
    }

    if (isManager) {
      const isSales = r.売上高.value > 1
      const isUrl = r.売上記載URL.value
      const isAnswer = r.業界.value || r.景気動向.value != '無回答'

      if (isSales || isUrl) r.終話タイミング.value = '売上高回答、クロージングまで'
      if ((!isSales || !isUrl) && isAnswer) r.終話タイミング.value = '売上高の開示は拒み終話'
    }
    return event
  })

  kintone.events.on(m.events.edit.change('終話タイミング'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value

    if (v) r.完了ステータス.value = '完了'

    return event
  })

  kintone.events.on(m.events.edit.change('不通詳細'), event => {
    // コール音, コール前音, 話し中, 留守電, 現アナ, FAX, 音声ガイダンス, その他
    const detail = ['コール音', 'コール前音', '話し中', '留守電', '現アナ', 'FAX', '音声ガイダンス']
    const r = event.record
    const f = event.changes.field
    const v = f.value
    const isOther = v == 'その他'

    m.kintoneFieldShown('不通その他', isOther)

    const errors = ['現アナ', 'FAX', '音声ガイダンス']
    if ((v && r.コール数.value >= 3) || errors.includes(v)) r.完了ステータス.value = '完了'
    if (!isOther) {
      const memo = r.コールメモ.value
      const txt = detail.includes(memo)
      r.コールメモ.value = txt ? v : memo ? memo + '\n' + v : v
    }

    return event
  })

  kintone.events.on(m.events.edit.change('不通その他'), event => {
    const detail = ['コール音', 'コール前音', '話し中', '留守電', '現アナ', 'FAX', '音声ガイダンス']
    const r = event.record
    const f = event.changes.field
    const v = f.value

    if (v) {
      const memo = r.コールメモ.value
      const txt = detail.includes(memo)
      r.コールメモ.value = txt ? v : memo ? memo + '\n' + v : v
    }

    return event
  })

  kintone.events.on(m.events.edit.change('完了ステータス'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value
    const isComplete = v == '完了'
    const COMPLETE_FIELDS = ['完了日', '完了時担当者']
    m.kintoneFieldShown(['完了ステータス', '完了詳細'], isComplete)

    if (isComplete) {
      m.kintoneResetValue(r, COMPLETE_FIELDS)

      const isSales = r.売上高.value || r.売上記載URL.value

      r.完了詳細.value = `取得${isSales ? 'OK' : 'NG'}`
    } else {
      m.kintoneResetValue(r, ['完了詳細', 'NG詳細', 'NGその他'])
      r['完了日'].value = ''
      r['完了時担当者'].value = []
    }

    return event
  })

  kintone.events.on(m.events.edit.change('完了詳細'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value

    const isNG = m.checkValue(v, 'NG')
    m.kintoneFieldShown('NG詳細', isNG)
    if (!isNG) return event

    const commission = r.担当者取次.value
    const notList = m.checkValue(commission, '別部署') || m.checkValue(commission, '繋がった')
    if (notList) {
      r.NG詳細.value = 'リスト番号では対応不可'
      return event
    }

    const errors = ['現アナ', 'FAX', '音声ガイダンス']
    const detail = r.不通詳細.value
    if (errors.includes(detail)) {
      r.NG詳細.value = '不通'
      return event
    }

    if (r.担当者取次.value == '不通' && r.コール数.value >= 3) {
      r.NG詳細.value = '不通'
      return event
    }
  })

  kintone.events.on(m.events.edit.change('決算期'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value

    if (!v) return event

    if (v.match(/^[0-9]$/)) f.value = '2022年' + v + '月'
    if (v.match(/^[０-９]$/)) f.value = '2022年' + m.hankaku2Zenkaku(v) + '月'

    return event
  })

  kintone.events.on(m.events.edit.change('売上高'), event => {
    const r = event.record
    const f = event.changes.field
    const v = f.value
    const sales = Number(v)
    const prevSales = Number(r.前期売上高.value)
    const salesRatio = sales / prevSales

    if (salesRatio >= 1.2 || salesRatio <= 0.8) {
      const ratio = '' + salesRatio * 100 + '%'
      Swal.fire({
        title: '取得値は合っていますか？',
        html: m.getSalesHtml(prevSales, sales, ratio),
        icon: 'warning',
        allowOutsideClick: false,
      })
    }
  })

  kintone.events.on(m.events.edit.change('売上記載URL'), event => {
    const f = event.changes.field
    const v = f.value

    f.error = null
    if (!v) return event
    if (m.checkUrl(v)) f.error = '正しいURLを入力してください。'

    return event
  })
})(jQuery, kintone.$PLUGIN_ID)
