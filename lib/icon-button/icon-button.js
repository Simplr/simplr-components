import { LitElement, html } from 'lit-element';
import '@material/mwc-icon-button';
import { SimplrTheme } from '@simplr-wc/theme';

export default class SimplrIconButton extends LitElement {
  static get properties() {
    return {
      /**
       * Icon displayed as a button
       * @prop
       * @type string
       */
      icon: { type: String },
      /**
       * Size of the icon
       * @prop
       * @type string
       */
      size: { type: String },
      /**
       * Is the button disabled
       * @prop
       * @type boolean
       */
      disabled: { type: Boolean },
      /**
       * Use primary styles on button
       * @prop
       * @type boolean
       */
      primary: { type: Boolean },
      /**
       * Use secondary styles on button
       * @prop
       * @type boolean
       */
      secondary: { type: Boolean },
      /**
       * Use custom color on button
       * @prop
       * @type string
       */
      color: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = '';
    this.size = 'initial';
    this.disabled = false;
    this.primary = false;
    this.secondary = false;
    this.color = 'inherit';
    SimplrTheme;
  }

  getColor() {
    if (this.primary) return SimplrTheme().primary.main;
    if (this.secondary) return SimplrTheme().secondary.main;
    if (this.color) return this.color;
    return 'inherit';
  }

  render() {
    return html`
      <style>
        :host {
          color: ${this.getColor()};
          --mdc-icon-size: ${this.size ? this.size : 'initial'};
          --mdc-icon-button-size: ${this.size ? this.size : 'initial'};
        }
      </style>
      <mwc-icon-button icon="${this.icon}" ?disabled="${this.disabled}"></mwc-icon-button>
    `;
  }
}

if (!customElements.get('simplr-icon-button')) {
  customElements.define('simplr-icon-button', SimplrIconButton);
}
