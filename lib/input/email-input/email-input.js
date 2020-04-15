import { html } from 'lit-element';
import '@material/mwc-textfield';
import SimplrInputBase from '../simplr-input-base.js';

class SimplrEmailInput extends SimplrInputBase {
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
        type="email"
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

if (!customElements.get('simplr-email-input')) {
  customElements.define('simplr-email-input', SimplrEmailInput);
}
