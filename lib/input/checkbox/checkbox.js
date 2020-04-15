import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import { SimplrTheme } from '../../theming/simplr-theme.js';

class SimplrCheckbox extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      checked: { type: Boolean },
      indeterminate: { type: Boolean },
      disabled: { type: Boolean },
      value: { type: String },
      elem: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        --mdc-theme-secondary: ${unsafeCSS(SimplrTheme().primary.main)};
      }
    `;
  }

  constructor() {
    super();
    this.label = '';
    this.value = '';
  }

  getValue() {
    return this.elem.value;
  }

  getChecked() {
    return this.elem.checked;
  }

  setChecked(checked) {
    this.elem.checked = checked;
  }

  setIndeterminate(on) {
    this.elem.indeterminate = on;
  }

  firstUpdated() {
    this.elem = this.shadowRoot.querySelector('mwc-checkbox');
  }

  render() {
    return html`
      <mwc-formfield label="${this.label}">
        <mwc-checkbox
          ?checked="${this.checked}"
          ?indeterminate="${this.indeterminate}"
          ?disabled="${this.disabled}"
          value="${this.value}"
          @change="${e => this.dispatchEvent(new CustomEvent('change', e))}"
        ></mwc-checkbox>
      </mwc-formfield>
    `;
  }
}

if (!customElements.get('simplr-checkbox')) {
  customElements.define('simplr-checkbox', SimplrCheckbox);
}
