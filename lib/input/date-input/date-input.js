import { html } from 'lit-element';
import SimplrInputBase from '@simplr-wc/input-base';
import 'lit-flatpickr';
import '@simplr-wc/text-input';

export default class SimplrDateInput extends SimplrInputBase {
  getValue() {
    return this.shadowRoot.querySelector('lit-flatpickr').getValue();
  }

  setValue(value) {
    this.value = value;
    this.shadowRoot.querySelector('lit-flatpickr').setDate(value);
  }

  render() {
    return html`
      <lit-flatpickr
        ><simplr-text-input
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
        ></simplr-text-input
      ></lit-flatpickr>
    `;
  }
}

if (!customElements.get('simplr-date-input')) {
  customElements.define('simplr-date-input', SimplrDateInput);
}
