import { LitElement, html } from 'lit-element';
import '@material/mwc-top-app-bar';
import '@simplr-wc/icon-button';
import { SimplrTheme } from '@simplr-wc/theme';

export default class SimplrTopAppBar extends LitElement {
  static get properties() {
    return {
      /**
       * Display burger menu at the left side of the top app bar
       * @prop
       * @type boolean
       */
      showBurger: { type: Boolean },
      /**
       * Center horizontally title of top app bar
       * @prop
       * @type boolean
       */
      centerTitle: { type: Boolean },
      /**
       * Activate dense styling of top app bar
       * @prop
       * @type boolean
       */
      dense: { type: Boolean },
      /**
       * Array of action items displayed at the right end of top app bar
       * @prop
       * @type Array
       */
      actionItems: { type: Array },
      /**
       * Background color of top app bar
       * @prop
       * @type string
       */
      backgroundColor: { type: String },
      /**
       * Text color of top app bar
       * @prop
       * @type string
       */
      textColor: { type: String },
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
    this.showBurger = false;
    this.centerTitle = false;
    this.dense = false;

    this.backgroundColor = '';
    this.textColor = '';
    this.primary = false;
    this.secondary = false;
    this.actionItems = [];
  }

  getStyles() {
    return `
    mwc-top-app-bar {
      ${this.backgroundColor ? `--mdc-theme-primary: ${this.backgroundColor};` : ''}
      ${this.primary ? `--mdc-theme-primary: ${SimplrTheme().primary.main};` : ''}
      ${this.secondary ? `--mdc-theme-primary: ${SimplrTheme().secondary.main};` : ''};

      ${this.textColor ? `--mdc-theme-on-primary: ${this.textColor};` : ''}
    }
    `;
  }

  render() {
    return html`
      <style>
        ${this.getStyles()}
      </style>
      <mwc-top-app-bar
        ?dense="${this.dense}"
        ?centerTitle="${this.centerTitle}"
        @MDCTopAppBar:nav=${e => this.dispatchEvent(new CustomEvent('navigationIconPressed', e))}
      >
        ${this.showBurger
          ? html`
              <simplr-icon-button icon="menu" slot="navigationIcon"></simplr-icon-button>
            `
          : ''}
        <div slot="title">Title</div>
        ${this.actionItems.map(
          item =>
            html`
              <simplr-icon-button
                icon=${item.icon}
                slot="actionItems"
                @click="${item.onclick}"
              ></simplr-icon-button>
            `,
        )}
        <slot></slot>
      </mwc-top-app-bar>
    `;
  }
}

if (!customElements.get('simplr-top-app-bar')) {
  customElements.define('simplr-top-app-bar', SimplrTopAppBar);
}
