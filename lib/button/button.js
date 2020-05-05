import { LitElement, html } from 'lit-element';
import '@material/mwc-button';
import { SimplrTheme } from '../theming/simplr-theme.js';

const defaultPrimaryColor = '#9e9e9e';
const defaultPrimaryLabelColor = '#fff';

export default class SimplrButton extends LitElement {
  static get properties() {
    return {
      /**
       * Label of the button.
       * @prop
       * @type string
       */
      label: { type: String },
      /**
       * Icon shown next to the label.
       * @prop
       * @type string
       */
      icon: { type: String },
      /**
       * Is the icon trailing the label.
       * @prop
       * @type boolean
       */
      trailingIcon: { type: Boolean },
      /**
       * Is the button using the outlined style
       * @prop
       * @type boolean
       */
      outlined: { type: Boolean },
      /**
       * Is the button using the raised style
       * @prop
       * @type boolean
       */
      raised: { type: Boolean },
      /**
       * Is the button using the unelevated style
       * @prop
       * @type boolean
       */
      unelevated: { type: Boolean },
      /**
       * Is the button using the dense style
       * @prop
       * @type boolean
       */
      dense: { type: Boolean },
      /**
       * Is the button disabled
       * @prop
       * @type boolean
       */
      disabled: { type: Boolean },
      /**
       * Is the button using the primary style
       * @prop
       * @type boolean
       */
      primary: { type: Boolean },
      /**
       * Is the button using the secondary style
       * @prop
       * @type boolean
       */
      secondary: { type: Boolean },

      /**
       * Custom color for the button
       * @prop
       * @type string
       */
      color: { type: String },
      /**
       * Custom color for the button label
       * @prop
       * @type string
       */
      labelColor: { type: String },
    };
  }

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.trailingIcon = false;
    this.outlined = false;
    this.raised = false;
    this.unelevated = false;
    this.dense = false;
    this.disabled = false;
    this.primary = false;
    this.secondary = false;
    this.color = '';
    this.labelColor = '';
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
