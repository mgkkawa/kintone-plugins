import * as m from '.'
jQuery.noConflict()
;(async ($, PLUGIN_ID) => {
  const config = m.config
  const phoneset = config.phoneset
  const disabled = m.DISABLED_FIELDS
  const hiddens = m.HIDDEN_FIELDS

  kintone.events.on(m.events.detail.show(), async event => {
    const r = event.record

    console.log(r)
    m.kintoneFieldShown(phoneset.fields)

    if (phoneset) await m.allCheckPhone(event, phoneset)

    return event
  })

  kintone.events.on(m.events.edit.show(), async event => {
    const r = event.record
    const setting = config.setting

    if (setting.length) m.kintoneResetValue(r, setting)
    if (hiddens.length) m.kintoneFieldShown(hiddens)
    if (disabled.length) m.kintoneDisabledField(r, disabled)

    if (phoneset) {
      let phone = r[phoneset.origin].value
      if (r[phoneset.change].value) phone = r[phoneset.change].value

      m.createPhoneLink(phoneset.spaceCd, phone)
      await m.allCheckPhone(event, phoneset)
    }

    return event
  })

  if (phoneset) {
    kintone.events.on(m.events.edit.change(phoneset.change), event => {
      const field = event.changes.field
      if (field.error) delete field.error
      if (!field.value) return event

      const notPhone = m.checkPhoneNumber(field.value)
      if (notPhone) {
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
})(jQuery, kintone.$PLUGIN_ID)
