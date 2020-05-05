import { html } from 'lit-element';
import '@material/mwc-textarea';
import SimplrInputBase from '@simplr-wc/input-base';

export default class SimplrTextArea extends SimplrInputBase {
  static get properties() {
    return {
      ...super.properties,
      /**
       * Row count of text area.
       * @prop
       * @type number
       */
      rows: { type: Number },
      /**
       * Column counr of text area.
       * @prop
       * @type number
       */
      cols: { type: Number },
    };
  }

  constructor() {
    super();
    this.rows = 2;
    this.cols = 20;
  }

  render() {
    return html`
      <mwc-textarea
        rows="${this.rows}"
        cols="${this.cols}"
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
      ></mwc-textarea>
    `;
  }
}

if (!customElements.get('simplr-text-area')) {
  customElements.define('simplr-text-area', SimplrTextArea);
}
