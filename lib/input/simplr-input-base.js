import { css, LitElement } from 'lit-element';
import '@material/mwc-textfield';

export default class SimplrInputBase extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      icon: { type: String },
      iconTrailing: { type: String },
      value: { type: String },
      placeHolder: { type: String },
      helperText: { type: String },
      helperPersistent: { type: Boolean },

      required: { type: Boolean },
      disabled: { type: Boolean },
      fullWidth: { type: Boolean },

      outlined: { type: Boolean },

      charCounter: { type: Boolean },
      maxLength: { type: Number },

      errorMessage: { type: String },
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
