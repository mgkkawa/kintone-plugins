import { Button, ButtonProps } from 'kintone-ui-component'

export class KinButton {
  button: Button
  constructor(props) {
    const button = new Button(props)
    this.button = button
  }
}
