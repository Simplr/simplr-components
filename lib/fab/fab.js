import { LitElement, html } from 'lit-element';
import '@material/mwc-fab';
import { SimplrTheme } from '@simplr-wc/theme';

export default class SimplrFab extends LitElement {
  static get properties() {
    return {
      /**
       * Create a smaller version of the fab
       * @prop
       * @type boolean
       */
      mini: { type: Boolean },
      /**
       * Create a extended version of the fab. Enabled `label`
       * @prop
       * @type boolean
       */
      extended: { type: Boolean },
      /**
       * Display icon after the label (! Only on extended mode !)
       * @prop
       * @type boolean
       */
      showIconAtEnd: { type: Boolean },
      /**
       * Icon to populate the fab with
       * @prop
       * @type string
       */
      icon: { type: String },
      /**
       * Label to show next to the icon in the fab (! Only on extended mode !)
       * @prop
       * @type boolean
       */
      label: { type: String },
      /**
       * Position of the Fab
       * @prop
       * @type {"bottomright"|"bottom"|"bottomleft"|"topleft"|"top"|"topright"}
       */
      position: { type: String },
      /**
       * Color of the fab button
       * @prop
       * @type string
       */
      buttonColor: { type: String },
      /**
       * Color of the fab icon and label
       * @prop
       * @type string
       */
      color: { type: String },
      /**
       * Use primary color theme
       * @prop
       * @type boolean
       */
      primary: { type: Boolean },
      /**
       * Use secondary color theme
       * @prop
       * @type boolean
       */
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
    this.primary = false;
    this.secondary = false;
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
