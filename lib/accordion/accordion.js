import { LitElement, html, css, unsafeCSS } from 'lit-element';
import Elevation from '@simplr-wc/elevation';
import '@simplr-wc/icon';

export default class SimplrAccordion extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      icon: { type: String },
      backgroundColor: { type: String },
      openBackgroundColor: { type: String },

      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.backgroundColor = '#FFFFFF';
    this.openBackgroundColor = this.backgroundColor;
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <div class="header${this.open ? ' header--open' : ''}" @click=${this.toggle}>
        <simplr-icon class="header-icon" icon="${this.icon}"></simplr-icon>
        <p class="label">${this.label}</p>
        <simplr-icon class="open-arrow" icon="expand_more"></simplr-icon>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 48px;
        width: 100%;
        border-radius: 4px;
        ${unsafeCSS(Elevation.forElem(1))}
        cursor: pointer;

        font-family: var(
          --mdc-typography-button-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-weight: var(--mdc-typography-button-font-weight, 500);
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        min-height: inherit;
      }

      .open-arrow {
        transform: rotate(0);
        transition: 0.2s ease-in-out;
      }

      .header--open .open-arrow {
        transform: rotate(180deg);
      }

      p {
        margin: 0;
        font-size: 1.2rem;
      }

      .label {
        flex-basis: 90%;
      }

      .subtitle {
        color: #3c3c3c;
      }
    `;
  }
}

if (!customElements.get('simplr-accordion')) {
  customElements.define('simplr-accordion', SimplrAccordion);
}
