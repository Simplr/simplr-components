import { LitElement, html, css, unsafeCSS } from 'lit-element';
import Elevation from '../util/elevation.js';

export default class SimplrContainer extends LitElement {
  static get properties() {
    return {
      // Display types
      display: { type: String },
      block: { type: Boolean },
      flex: { type: Boolean },
      inline: { type: Boolean },

      // Size attributes
      maxWidth: { type: Boolean },
      maxHeight: { type: Boolean },
      width: { type: String },
      height: { type: String },

      // Margin & padding
      margin: { type: String },
      noMargin: { type: Boolean },
      padding: { type: String },
      noPadding: { type: Boolean },

      // Flex types
      flexDirection: { type: String },
      alignItems: { type: String },
      alignContent: { type: String },
      justifyContent: { type: String },
      flexWrap: { type: Boolean },

      // Extra styling
      borderRadius: { type: String },
      elevation: { type: Number },
      roundedCorners: { type: Boolean },
      verticalCenter: { type: Boolean },
      horizontalCenter: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.display = 'block';
    this.width = 'auto';
    this.height = 'auto';
    this.flexDirection = 'row';
    this.margin = '8px';
    this.padding = '0px';
    this.borderRadius = '0px';
  }

  getDisplay() {
    if (this.block) return 'block';
    if (this.flex) return 'flex';
    if (this.inline) return 'inline';
    return this.display;
  }

  getWidth() {
    if (this.maxWidth) return '100%';
    return this.width;
  }

  getHeight() {
    if (this.maxHeight) return '100%';
    return this.height;
  }

  getFlexSettings() {
    return css`
      ${unsafeCSS(`flex-direction: ${this.flexDirection || 'row'};`)};
      ${this.flexDirection === 'row'
        ? css`
              ${
                this.verticalCenter
                  ? unsafeCSS(`align-items: center;`)
                  : unsafeCSS(`align-items: ${this.alignItems || 'stretch'};`)
              }
              ${
                this.alignContent
                  ? unsafeCSS(`align-content: ${this.alignContent};`)
                  : unsafeCSS('align-content: stretch;')
              }
              ${
                this.horizontalCenter
                  ? unsafeCSS(`justify-content: center;`)
                  : unsafeCSS(`justify-content: ${this.justifyContent || 'flex-start'};`)
              }
            `
        : css`
              ${
                this.horizontalCenter
                  ? unsafeCSS(`align-items: center;`)
                  : unsafeCSS(`align-items: ${this.alignItems || 'stretch'};`)
              }
              ${
                this.alignContent
                  ? unsafeCSS(`align-content: ${this.alignContent};`)
                  : unsafeCSS('align-content: stretch;')
              }
              ${
                this.verticalCenter
                  ? unsafeCSS(`justify-content: center;`)
                  : unsafeCSS(`justify-content: ${this.justifyContent || 'flex-start'};`)
              }
            `}
      ${this.flexWrap ? unsafeCSS(`flex-wrap: wrap;`) : unsafeCSS(`flex-wrap: nowrap;`)}
    `;
  }

  getElevation() {
    if (!this.elevation) {
      return null;
    }
    return Elevation.forElem(this.elevation);
  }

  render() {
    return html`
      <style>
        :host {
          display: ${this.getDisplay()};
          margin: ${this.noMargin ? '0' : this.margin};
          padding: ${this.noPadding ? '0' : this.padding};
          height: ${this.getHeight()};
          width: ${this.getWidth()};
          border-radius: ${this.roundedCorners ? '4px' : this.borderRadius};

          ${this.getDisplay() === 'flex' ? this.getFlexSettings() : ''}
          ${this.getElevation()}
        }
      </style>
      <slot></slot>
    `;
  }
}

if (!customElements.get('simplr-container')) {
  customElements.define('simplr-container', SimplrContainer);
}
