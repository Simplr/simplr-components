import { LitElement, html } from 'lit-element';
import '@material/mwc-icon';
import { SimplrTheme } from '../theming/simplr-theme.js';

export default class SimplrIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
      size: { type: String },

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
          --mdc-icon-size: ${this.size};
        }
      </style>
      <mwc-icon>${this.icon}</mwc-icon>
    `;
  }
}

if (!customElements.get('simplr-icon')) {
  customElements.define('simplr-icon', SimplrIcon);
}
