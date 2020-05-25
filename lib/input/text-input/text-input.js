import { html } from 'lit-element';
import '@material/mwc-textfield';
import SimplrInputBase from '@simplr-wc/input-base';
import { SimplrTheme } from '@simplr-wc/theme';

/**
 * @extends SimplrInputBase
 * */
export default class SimplrTextInput extends SimplrInputBase {
  static get properties() {
    return {
      ...super.properties,
    };
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
        type="text"
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
      ></mwc-textfield>
    `;
  }
}

if (!customElements.get('simplr-text-input')) {
  customElements.define('simplr-text-input', SimplrTextInput);
}
