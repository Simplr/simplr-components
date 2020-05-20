import { LitElement, html, css } from 'lit-element';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

export default class SimplrSelect extends LitElement {
  static get properties() {
    return {
      // Basic settings
      /**
       * Label of the select field
       * @prop
       * @type string
       */
      label: { type: String },
      /**
       * Selectable options of the select field
       * @prop
       * @type Array
       */
      options: { type: Array },
      /**
       * Select value of the select options
       * @prop
       * @type string
       */
      selectedValue: { type: String },
      /**
       * Is a input required
       * @prop
       * @type boolean
       */
      required: { type: Boolean },
      /**
       * Error message shown on invalid input
       * @prop
       * @type string
       */
      errorMessage: { type: String },
      /**
       * Helper text shown below select element
       * @prop
       * @type string
       */
      helperText: { type: String },
      /**
       * Is the helper text persistent or only displayed on focus
       * @prop
       * @type boolean
       */
      helperPersistent: { type: Boolean },

      // Styling
      /**
       * Style the select input in the outline material style
       * @prop
       * @type boolean
       */
      outlined: { type: Boolean },
      /**
       * Icon shown next to the label in the select field
       * @prop
       * @type string
       */
      icon: { type: String },

      elem: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        width: 100%;
      }

      mwc-select {
        width: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.label = '';
    this.selectedValue = '';
    this.required = false;
    this.outlined = false;
    this.icon = '';
    this.options = [];
    this.errorMessage = null;
    this.helperText = null;
    this.helperPersistent = false;
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
        ?helperPersistent="${this.helperPersistent}"
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
