import { LitElement, html, css, unsafeCSS } from 'lit-element';
import Elevation from '@simplr-wc/elevation';
import '@simplr-wc/icon';

export default class SimplrAccordion extends LitElement {
  static get properties() {
    return {
      /**
       * Label of the accordion
       * @prop
       * @type string
       * */
      label: { type: String },
      /**
       * Icon shown in the header of accordion
       * @prop
       * @type string
       * */
      icon: { type: String },
      /**
       * Background color of the accordion header
       * @prop
       * @type string
       * */
      backgroundColor: { type: String },
      /**
       * Backgroundcolor of the header when the accordion is open
       * @prop
       * @type string
       * */
      openBackgroundColor: { type: String },

      /**
       * Is the accordion open?
       * @prop
       * @type boolean
       * */
      open: { type: Boolean },

      slotHeight: { type: Number },
      hasAccordionBelow: { type: Boolean },
      hasAccordionAbove: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.backgroundColor = '#FFFFFF';
    this.openBackgroundColor = this.backgroundColor;
    this.open = false;

    this.hasAccordionAbove = false;
    this.hasAccordionBelow = false;
  }

  firstUpdated() {
    const nextSibling = this.nextElementSibling;
    const prevSibling = this.previousElementSibling;
    this.hasAccordionBelow = nextSibling && nextSibling.nodeName === this.nodeName;
    this.hasAccordionAbove = prevSibling && prevSibling.nodeName === this.nodeName;
  }

  toggle() {
    if (!this.slotHeight) {
      this.slotHeight = this.shadowRoot.querySelector('slot').clientHeight;
    }

    this.open = !this.open;
  }

  render() {
    return html`
      <style>
        :host {
            ${this.hasAccordionBelow && !this.hasAccordionAbove
          ? 'border-radius: 4px 4px 0 0;'
          : ''}
            ${this.hasAccordionAbove && !this.hasAccordionBelow
          ? 'border-radius: 0 0 4px 4px;'
          : ''}
        ${this.hasAccordionAbove && this.open ? 'margin-top: 1rem;' : ''}
        ${this.hasAccordionBelow && this.open ? 'margin-bottom: 1rem;' : ''}
        }

        .header {
            ${this.backgroundColor ? `background: ${this.backgroundColor};` : ''}
            transition: 100ms ease-in-out;
        }

        .header--open {
            ${this.openBackgroundColor ? `background: ${this.openBackgroundColor};` : ''}
        }

        .content {
          height: 0;
          overflow: hidden;
        }

        .content--open {
          height: calc(${this.slotHeight}px + 3rem);
        }
      </style>
      <div class="header${this.open ? ' header--open' : ''}" @click=${this.toggle}>
        <simplr-icon class="header-icon" icon="${this.icon}"></simplr-icon>
        <p class="label">${this.label}</p>
        <simplr-icon class="open-arrow" icon="expand_more"></simplr-icon>
      </div>
      <div class="content${this.open ? ' content--open' : ''}">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background: #fff;
        min-height: 48px;
        width: 100%;
        ${unsafeCSS(Elevation.forElem(1))}

        font-family: var(
          --mdc-typography-button-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-weight: var(--mdc-typography-button-font-weight, 500);
        transition: 200ms ease-in-out;
        overflow: hidden;
      }

      slot {
        display: block;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        min-height: inherit;
        cursor: pointer;
      }

      .content {
        width: 100%;
        transition: 200ms ease-in-out;
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
