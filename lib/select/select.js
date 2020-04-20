import { LitElement, html } from 'lit-element';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

export default class SimplrSelect extends LitElement {
  static get properties() {
    return {
      // Basic settings
      label: { type: String },
      options: { type: Array },
      selectedValue: { type: String },
      required: { type: Boolean },
      errorMessage: { type: String },
      helperText: { type: String },

      // Styling
      outlined: { type: Boolean },
      icon: { type: String },

      elem: { type: Object },
    };
  }

  constructor() {
    super();
    this.options = [];
    this.errorMessage = null;
    this.helperText = null;
  }

  firstUpdated() {
    this.elem = this.shadowRoot.querySelector('mwc-select');
  }

  getValue() {
    return this.elem.value;
  }

  getValueAsObject() {
    if (this.elem.value < 0) {
      return null;
    }
    return this.options.find(opt => opt.value.toString() === this.elem.value);
  }

  render() {
    return html`
      <mwc-select
        label="${this.label}"
        icon="${this.icon ? this.icon : ''}"
        ?outlined="${this.outlined}"
        ?required="${this.required}"
        validationMessage="${this.errorMessage ? this.errorMessage : ''}"
        helper="${this.helperText ? this.helperText : ''}"
      >
        <mwc-list-item></mwc-list-item>
        ${this.options.map(
          opt =>
            html`
              <mwc-list-item
                ?selected="${opt.value.toString() === this.selectedValue}"
                value="${opt.value}"
                >${opt.label}</mwc-list-item
              >
            `,
        )}
      </mwc-select>
    `;
  }
}

if (!customElements.get('simplr-select')) {
  customElements.define('simplr-select', SimplrSelect);
}
