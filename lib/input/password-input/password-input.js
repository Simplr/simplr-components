import { html } from 'lit-element';
import '@material/mwc-textfield';
import SimplrInputBase from '@simplr-wc/input-base';

export default class SimplrPasswordInput extends SimplrInputBase {
  static get properties() {
    return {
      ...super.properties,
    };
  }

  render() {
    return html`
      <mwc-textfield
        label="${this.label}"
        placeHolder="${this.placeHolder}"
        value=${this.value}
        type="password"
        .icon="${this.icon}"
        .iconTrailing="${this.iconTrailing}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        .validationMessage="${this.errorMessage}"
        ?fullWidth="${this.fullWidth}"
        ?outlined="${this.outlined}"
        ?charCounter="${this.charCounter}"
        .maxLength="${this.maxLength}"
        ?autoValidate="${this.autoValidate}"
        .helper="${this.helperText}"
        ?helperPersistent=${this.helperPersistent}
      ></mwc-textfield>
    `;
  }
}

if (!customElements.get('simplr-password-input')) {
  customElements.define('simplr-password-input', SimplrPasswordInput);
}
