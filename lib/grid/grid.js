/* eslint-disable class-methods-use-this,no-nested-ternary */
import { LitElement, html, css, unsafeCSS } from 'lit-element';

export default class SimplrGrid extends LitElement {
  static get properties() {
    return {
      /**
       * Is the grid element an grid item
       * @prop
       * @type boolean
       */
      item: { type: Boolean },
      /**
       * Size of the grid / grid item { 1 - 12 }
       * @prop
       * @type number
       */
      size: { type: Number },
      /**
       * Size of the grid / grid item on tablet devices { 1 - 12 }
       * @prop
       * @type number
       */
      tabletSize: { type: Number },
      /**
       * Size of the grid / grid item on phones { 1 - 12 }
       * @prop
       * @type number
       */
      phoneSize: { type: Number },
      /**
       * Column gap size between grid items
       * @prop
       * @type string
       */
      columnGap: { type: String },
      /**
       * Row gap size between grid items
       * @prop
       * @type number
       */
      rowGap: { type: String },

      // For setting custom column / row sizes
      /**
       * Grid-column column size
       * @prop
       * @type string
       */
      column: { type: String },
      /**
       * Grid-column row size
       * @prop
       * @type string
       */
      row: { type: String },
    };
  }

  constructor() {
    super();
    this.item = false;
    this.size = 12;
    this.tabletSize = 8;
    this.phoneSize = 4;
    this.columnGap = '0px';
    this.rowGap = '0px';
    this.column = null;
    this.row = null;
  }

  getContainerStyles() {
    return css`
      :host {
        display: grid;
        ${unsafeCSS(`grid-column-gap: ${this.columnGap};`)}
        ${unsafeCSS(`grid-row-gap: ${this.rowGap};`)}
        ${unsafeCSS(`grid-template-columns: repeat(${this.size ? this.size : 12}, 1fr);`)}
        grid-auto-rows: 1fr;
      }
      @media only screen and (max-width: 992px) {
        :host {
        ${unsafeCSS(
          `grid-template-columns: repeat(${this.tabletSize ? this.tabletSize : 8}, 1fr);`,
        )}
        }
      }

      @media only screen and (max-width: 768px) {
        :host {
        ${unsafeCSS(`grid-template-columns: repeat(${this.phoneSize ? this.phoneSize : 4}, 1fr);`)}
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
              ${unsafeCSS(`grid-column: ${this.column};`)}
            `
          : css`
              ${unsafeCSS(`grid-column: auto / span ${this.size ? this.size : 1};`)}
            `}
        ${this.row
          ? css`
              ${unsafeCSS(`grid-row: ${this.row};`)}
            `
          : css``}
      }

      @media only screen and (max-width: 992px) {
        :host {
          ${unsafeCSS(
            `grid-column: auto / span ${
              this.tabletSize ? this.tabletSize : this.size ? this.size : 1
            };`,
          )};
        }
      }

      @media only screen and (max-width: 768px) {
        :host {
          ${unsafeCSS(
            `grid-column: auto / span ${
              this.phoneSize ? this.phoneSize : this.size ? this.size : 1
            };`,
          )};
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
