import { LitElement, html } from 'lit-element';
import '@material/mwc-button';
import { SimplrTheme } from '../theming/simplr-theme.js';

const defaultPrimaryColor = '#9e9e9e';
const defaultPrimaryLabelColor = '#fff';

export default class SimplrButton extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      icon: { type: String },

      trailingIcon: { type: Boolean },
      outlined: { type: Boolean },
      raised: { type: Boolean },
      unelevated: { type: Boolean },
      dense: { type: Boolean },
      disabled: { type: Boolean },

      primary: { type: Boolean },
      secondary: { type: Boolean },

      color: { type: String },
      labelColor: { type: String },
    };
  }

  constructor() {
    super();
    this.label = '';
    this.icon = '';
  }

  handleCustomColor() {
    if (this.color) return this.color;
    if (this.primary) return SimplrTheme().primary.main;
    if (this.secondary) return SimplrTheme().secondary.main;
    return defaultPrimaryColor;
  }

  handleCustomLabelColor() {
    if (this.labelColor) return this.labelColor;
    return defaultPrimaryLabelColor;
  }

  getStyles() {
    if (this.color || this.labelColor) {
      return html`
        <style>
          mwc-button {
            --mdc-theme-primary: ${this.handleCustomColor()};
            --mdc-theme-on-primary: ${this.handleCustomLabelColor()};
          }
        </style>
      `;
    }
    if (this.primary) {
      return html`
        <style>
          mwc-button {
            --mdc-theme-primary: ${SimplrTheme().primary.main};
          }
        </style>
      `;
    }
    if (this.secondary) {
      return html`
        <style>
          mwc-button {
            --mdc-theme-primary: ${SimplrTheme().secondary.main};
          }
        </style>
      `;
    }
    return html`
      <style>
        mwc-button {
          --mdc-theme-primary: ${defaultPrimaryColor};
          --mdc-theme-on-primary: ${defaultPrimaryLabelColor};
        }
      </style>
    `;
  }

  render() {
    return html`
      ${this.getStyles()}
      <mwc-button
        label="${this.label}"
        icon="${this.icon}"
        ?trailingIcon="${this.trailingIcon}"
        ?outlined="${this.outlined}"
        ?raised="${this.raised}"
        ?unelevated="${this.unelevated}"
        ?dense="${this.dense}"
        ?disabled="${this.disabled}"
      ></mwc-button>
    `;
  }
}

if (!customElements.get('simplr-button')) {
  customElements.define('simplr-button', SimplrButton);
}
