import { LitElement, html } from 'lit-element';
import '@material/mwc-fab';
import { SimplrTheme } from '../theming/simplr-theme.js';

export default class SimplrFab extends LitElement {
  static get properties() {
    return {
      mini: { type: Boolean },
      extended: { type: Boolean },
      showIconAtEnd: { type: Boolean },
      icon: { type: String },
      label: { type: String },
      position: { type: String },
      buttonColor: { type: String },
      color: { type: String },

      primary: { type: Boolean },
      secondary: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.mini = false;
    this.extended = false;
    this.showIconAtEnd = false;
    this.label = '';
    this.icon = '';
    this.position = 'bottomright';

    this.color = '';
    this.buttonColor = '';
  }

  getPositionStyles() {
    if (!this.position) {
      return '';
    }
    return `
      ${this.position.includes('bottom') ? 'bottom: 1rem; top: unset;' : ''}
      ${this.position.includes('right') ? 'right: 1rem; left: unset;' : ''}
      ${this.position.includes('left') ? 'left: 1rem; right: unset;' : ''}
      ${this.position.includes('top') ? 'top: 1rem; bottom: unset;' : ''}
      ${
        !this.position.includes('right') && !this.position.includes('left')
          ? 'left: 0; right: 0;'
          : ''
      }
      ${
        !this.position.includes('top') && !this.position.includes('bottom')
          ? 'top: 0; bottom: 0;'
          : ''
      }
    `;
  }

  getColorStyles() {
    return `
      ${this.primary ? `--mdc-theme-secondary: ${SimplrTheme().primary.main}` : ''}
      ${this.secondary ? `--mdc-theme-secondary: ${SimplrTheme().secondary.main}` : ''}
      ${this.buttonColor ? `--mdc-theme-secondary: ${this.buttonColor}` : ''};
      ${this.color ? `--mdc-theme-on-secondary: ${this.color}` : ''}
    `;
  }

  render() {
    return html`
      <style>
        :host {
            width: fit-content;
            height: fit-content;
            position: fixed;
            margin: auto;
            ${this.getPositionStyles()}
            ${this.getColorStyles()}
        }
      </style>
      <mwc-fab
        ?mini="${this.mini}"
        ?extended="${this.extended}"
        ?showIconAtEnd="${this.showIconAtEnd}"
        icon="${this.icon}"
        label="${this.label}"
      ></mwc-fab>
    `;
  }
}

if (!customElements.get('simplr-fab')) {
  customElements.define('simplr-fab', SimplrFab);
}
