import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@material/mwc-radio';
import '@material/mwc-formfield';
import { SimplrTheme } from '../../theming/simplr-theme.js';

export default class SimplrRadioGroup extends LitElement {
  static get properties() {
    return {
      /**
       * Name of the group of radio buttons
       * @prop
       * @type string
       */
      name: { type: String },
      /**
       * Array of radio button options.
       * @prop
       * @type Array
       */
      options: { type: Array },
      /**
       * Alignment of radio button group.
       * @prop
       * @type {"row"|"column"}
       */
      align: { type: String },
      /**
       * Pre-selected radio button value.
       * @prop
       * @type string
       */
      selectedValue: { type: String },
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
    this.options = [];
    this.selectedValue = [];
    this.align = 'row';
  }

  getValue() {
    return this.selectedValue;
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: ${this.align};
        }
      </style>
      ${this.options.map(
        opt => html`
          <mwc-formfield label="${opt.label}">
            <mwc-radio
              name="${this.name}"
              ?checked="${this.selectedValue === opt.value.toString()}"
              ?disabled="${opt.disabled}"
              value="${opt.value}"
              @change="${e => {
                this.selectedValue = e.target.value;
                this.dispatchEvent(new CustomEvent('change', e));
              }}"
            ></mwc-radio>
          </mwc-formfield>
        `,
      )}
    `;
  }
}

if (!customElements.get('simplr-radio-group')) {
  customElements.define('simplr-radio-group', SimplrRadioGroup);
}
