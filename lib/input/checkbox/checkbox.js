import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import { SimplrTheme } from '../../theming/simplr-theme.js';

export default class SimplrCheckbox extends LitElement {
  static get properties() {
    return {
      /**
       * Name of checkbox.
       * @prop
       * @type string
       */
      name: { type: String },
      /**
       * Label shown next to checkbox
       * @prop
       * @type string
       */
      label: { type: String },
      /**
       * If the checkbox is checked.
       * @prop
       * @type boolean
       */
      checked: { type: Boolean },
      /**
       * If the checkbox is in an indeterminate state.
       * @prop
       * @type boolean
       */
      indeterminate: { type: Boolean },
      /**
       * If the checkbox is disabled.
       * @prop
       * @type boolean
       */
      disabled: { type: Boolean },
      /**
       * Value of the checkbox field.
       * @prop
       * @type string
       */
      value: { type: String },
      elem: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        ${unsafeCSS(`--mdc-theme-secondary: ${SimplrTheme().primary.main};`)};
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.label = '';
    this.value = '';
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
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
