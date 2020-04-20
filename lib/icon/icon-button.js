import { LitElement, html } from 'lit-element';
import '@material/mwc-icon-button';
import { SimplrTheme } from '../theming/simplr-theme.js';

export default class SimplrIconButton extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
      size: { type: String },
      disabled: { type: Boolean },

      primary: { type: Boolean },
      secondary: { type: Boolean },
      color: { type: String },
    };
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
