import { LitElement, html } from 'lit-element';
import '@material/mwc-button';
import { SimplrTheme } from '../theming/simplr-theme.js';

class SimplrButton extends LitElement {
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
    };
  }

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.trailingIcon = '';
  }

  getStyles() {
    console.log('Button coloring');
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
          --mdc-theme-primary: #9e9e9e;
          --mdc-theme-on-primary: #fff;
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
