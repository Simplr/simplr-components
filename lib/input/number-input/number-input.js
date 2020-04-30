import { html } from 'lit-element';
import '@material/mwc-textfield';
import SimplrInputBase from '../simplr-input-base.js';

export default class SimplrNumberInput extends SimplrInputBase {
  static get properties() {
    return {
      ...super.properties,

      step: { type: Number },
      min: { type: Number },
      max: { type: Number },
    };
  }

  constructor() {
    super();
    this.step = 1;
  }

  getValue() {
    this.elem.checkValidity();
    return parseFloat(this.elem.value);
  }

  render() {
    return html`
      <mwc-textfield
        label="${this.label}"
        placeHolder="${this.placeHolder}"
        value=${this.value}
        type="number"
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
        step="${this.step}"
        min="${this.min}"
        max="${this.max}"
      ></mwc-textfield>
    `;
  }
}

if (!customElements.get('simplr-number-input')) {
  customElements.define('simplr-number-input', SimplrNumberInput);
}
