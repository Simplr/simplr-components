import { LitElement, html } from 'lit-element';
import '@material/mwc-top-app-bar';
import '../icon/icon-button.js';
import { SimplrTheme } from '../theming/simplr-theme.js';

class SimplrTopAppBar extends LitElement {
  static get properties() {
    return {
      showBurger: { type: Boolean },
      centerTitle: { type: Boolean },
      dense: { type: Boolean },
      actionItems: { type: Array },

      backgroundColor: { type: String },
      textColor: { type: String },
      primary: { type: Boolean },
      secondary: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.showBurger = false;
    this.centerTitle = false;
    this.dense = false;

    this.backgroundColor = null;
    this.textColor = null;
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
