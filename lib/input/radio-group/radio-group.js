import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@material/mwc-radio';
import '@material/mwc-formfield';
import { SimplrTheme } from '../../theming/simplr-theme.js';

class SimplrRadioGroup extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      options: { type: Array },
      align: { type: String },
      selectedValue: { type: String },
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
    this.align = 'row';
  }

  getValue() {
    return this.selectedValue;
  }

  firstUpdated() {
    const selectedElem = this.options.find(opt => opt.checked);
    this.selectedValue = selectedElem ? selectedElem.value : null;
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
              ?checked="${opt.checked}"
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
