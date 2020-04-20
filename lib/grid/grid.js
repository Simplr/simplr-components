/* eslint-disable class-methods-use-this,no-nested-ternary */
import { LitElement, html, css, unsafeCSS } from 'lit-element';

export default class SimplrGrid extends LitElement {
  static get properties() {
    return {
      item: { type: Boolean },
      size: { type: Number },
      tabletSize: { type: Number },
      phoneSize: { type: Number },
      columnGap: { type: String },
      rowGap: { type: String },

      // For setting custom column / row sizes
      column: { type: String },
      row: { type: String },
    };
  }

  constructor() {
    super();
    this.columnGap = '0px';
    this.rowGap = '0px';
    this.column = null;
    this.row = null;
  }

  getContainerStyles() {
    return css`
      :host {
        display: grid;
        grid-column-gap: ${unsafeCSS(this.columnGap)};
        grid-row-gap: ${unsafeCSS(this.rowGap)};
        grid-template-columns: repeat(${unsafeCSS(this.size ? this.size : 12)}, 1fr);
        grid-auto-rows: 1fr;
      }
      @media only screen and (max-width: 992px) {
        :host {
          grid-template-columns: repeat(${unsafeCSS(this.tabletSize ? this.tabletSize : 8)}, 1fr);
        }
      }

      @media only screen and (max-width: 768px) {
        :host {
          grid-template-columns: repeat(${unsafeCSS(this.phoneSize ? this.phoneSize : 4)}, 1fr);
        }
      }
    `;
  }

  getItemStyles() {
    return css`
      :host {
        display: flex;
        ${this.column
          ? css`
              grid-column: ${unsafeCSS(this.column)};
            `
          : css`
              grid-column: auto / span ${unsafeCSS(this.size ? this.size : 1)};
            `}
        ${this.row
          ? css`
              grid-row: ${unsafeCSS(this.row)};
            `
          : css``}
      }

      @media only screen and (max-width: 992px) {
        :host {
          grid-column: auto / span
            ${unsafeCSS(this.tabletSize ? this.tabletSize : this.size ? this.size : 1)};
        }
      }

      @media only screen and (max-width: 768px) {
        :host {
          grid-column: auto / span
            ${unsafeCSS(this.phoneSize ? this.phoneSize : this.size ? this.size : 1)};
        }
      }
    `;
  }

  render() {
    return html`
      <style>
        ${this.item ? this.getItemStyles() : this.getContainerStyles()}
      </style>
      <slot></slot>
    `;
  }
}

if (!customElements.get('simplr-grid')) {
  customElements.define('simplr-grid', SimplrGrid);
}
