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
      flex-direction: ${unsafeCSS(this.flexDirection || '')};
      ${
        this.flexDirection === 'row'
          ? css`
              align-items: ${unsafeCSS(this.verticalCenter ? 'center' : this.alignItems || '')};
              align-content: ${unsafeCSS(this.alignContent || '')};
              justify-content: ${unsafeCSS(
                this.horizontalCenter ? 'center' : this.justifyContent || '',
              )};
            `
          : css`
              align-items: ${unsafeCSS(this.horizontalCenter ? 'center' : this.alignItems || '')};
              align-content: ${unsafeCSS(this.alignContent || '')};
              justify-content: ${unsafeCSS(
                this.verticalCenter ? 'center' : this.justifyContent || '',
              )};
            `
      }
      flex-wrap: ${unsafeCSS(this.flexWrap ? 'wrap' : 'nowrap')};
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
