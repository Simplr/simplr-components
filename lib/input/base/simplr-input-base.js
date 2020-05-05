import { css, LitElement } from 'lit-element';

export default class SimplrInputBase extends LitElement {
  static get properties() {
    return {
      /**
       * Name of the input element
       * @prop
       * @type string
       */
      name: { type: String },

      /**
       * Label of the input element
       * @prop
       * @type string
       */
      label: { type: String },
      /**
       * Icon shown inside the input element
       * @prop
       * @type string
       */
      icon: { type: String },
      /**
       * Trailing icon shown inside the input element
       * @prop
       * @type string
       */
      iconTrailing: { type: String },
      /**
       * Preset value of the input field
       * @prop
       * @type string
       */
      value: { type: String },
      /**
       * Placeholder text of input field
       * @prop
       * @type string
       */
      placeHolder: { type: String },
      /**
       * Helper text shown below input field
       * @prop
       * @type string
       */
      helperText: { type: String },
      /**
       * Determines if helper text is visible always or only on focus
       * @prop
       * @type boolean
       */
      helperPersistent: { type: Boolean },

      /**
       * Is input field required
       * @prop
       * @type boolean
       */
      required: { type: Boolean },
      /**
       * Is input field disabled
       * @prop
       * @type boolean
       */
      disabled: { type: Boolean },
      /**
       * Does input field use the full width of the field
       * @prop
       * @type boolean
       */
      fullWidth: { type: Boolean },

      /**
       * Style the input field as an outlined input element
       * @prop
       * @type boolean
       */
      outlined: { type: Boolean },

      /**
       * Enable character counter of input field (! Required maxLength to be set !)
       * @prop
       * @type boolean
       */
      charCounter: { type: Boolean },
      /**
       * Maximum length of the input field
       * @prop
       * @type number
       */
      maxLength: { type: Number },

      /**
       * Error message displayed on invalid input
       * @prop
       * @type string
       */
      errorMessage: { type: String },

      /**
       * Report input validity on input rather than on blur
       * @prop
       * @type boolean
       */
      autoValidate: { type: Boolean },

      elem: { type: Object },
    };
  }

  static get styles() {
    return css`
      mwc-textfield {
        width: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.label = '';
    this.helperPersistent = false;
    this.required = false;
    this.disabled = false;
    this.fullWidth = false;
    this.outlined = false;
    this.charCounter = false;
    this.errorMessage = '';
    this.autoValidate = false;
    this.value = '';
    this.icon = '';
    this.iconTrailing = '';
    this.placeHolder = '';
    this.helperText = '';
    this.maxLength = -1;
  }

  checkValidity() {
    return this.elem.checkValidity();
  }

  getValue() {
    this.elem.checkValidity();
    return this.elem.value;
  }

  setValue(value) {
    this.value = value;
    this.elem.value = value;
  }

  firstUpdated() {
    this.elem = this.shadowRoot.querySelector('mwc-textfield');
  }
}
