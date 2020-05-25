import { html } from 'lit-element';
import '@material/mwc-textfield';
import SimplrInputBase from '@simplr-wc/input-base';
import { SimplrTheme } from '@simplr-wc/theme';

export default class SimplrNumberInput extends SimplrInputBase {
  static get properties() {
    return {
      ...super.properties,

      /**
       * Number field step size
       * @prop
       * @type number
       */
      step: { type: Number },
      /**
       * Number field minimum value. Leave empty to unset.
       * @prop
       * @type number
       */
      min: { type: Number },

      /**
       * Number field maximum value. Leave empty to unset.
       * @prop
       * @type number
       */
      max: { type: Number },
    };
  }

  constructor() {
    super();
    this.min = '';
    this.max = '';
    this.step = 1;
  }

  getValue() {
    this.elem.checkValidity();
    return parseFloat(this.elem.value);
  }

  render() {
    return html`
      <style>
        mwc-textfield {
          --mdc-theme-primary: ${SimplrTheme().primary.main};
        }
      </style>
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
        pattern=${this.pattern}
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
