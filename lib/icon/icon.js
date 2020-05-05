import { LitElement, html } from 'lit-element';
import '@material/mwc-icon';
import { SimplrTheme } from '@simplr-wc/theme';

export default class SimplrIcon extends LitElement {
  static get properties() {
    return {
      /**
       * Icon displayed
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
       * Use primary styles on icon
       * @prop
       * @type boolean
       */
      primary: { type: Boolean },
      /**
       * Use secondary styles on icon
       * @prop
       * @type boolean
       */
      secondary: { type: Boolean },
      /**
       * Custom color of icon
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
    this.primary = false;
    this.secondary = false;
    this.color = 'inherit';
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
          display: flex;
          color: ${this.getColor()};
          --mdc-icon-size: ${this.size ? this.size : 'initial'};
        }
      </style>
      <mwc-icon>${this.icon}</mwc-icon>
    `;
  }
}

if (!customElements.get('simplr-icon')) {
  customElements.define('simplr-icon', SimplrIcon);
}
