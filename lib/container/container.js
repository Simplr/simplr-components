import { LitElement, html } from 'lit-element';
import Elevation from '@simplr-wc/elevation';

export default class SimplrContainer extends LitElement {
  static get properties() {
    return {
      // Display types
      /**
       * Display type of the container
       * @prop
       * @type {"inline"|"block"|"contents"|"flex"|"grid"|"inline-block"|"inline-flex"|"inline-grid"|"inline-table"|"list-item"|"run-in"|"table"|"table-caption"|"table-column-group"|"table-header-group"|"table-footer-group"|"table-row-group"|"table-cell"|"table-column"|"table-row"|"none"|"initial"|"inherit"}
       */
      display: { type: String },
      /**
       * Shorthand to use "display: block;"
       * @prop
       * @type boolean
       */
      block: { type: Boolean },
      /**
       * Shorthand to use "display: flex;"
       * @prop
       * @type boolean
       */
      flex: { type: Boolean },
      /**
       * Shorthand to use "display: inline;"nm
       * @prop
       * @type boolean
       */
      inline: { type: Boolean },

      // Size attributes
      /**
       * Shorthand for "width: 100%;"
       * @prop
       * @type boolean
       */
      maxWidth: { type: Boolean },
      /**
       * Shorthand for "height: 100%;"
       * @prop
       * @type boolean
       */
      maxHeight: { type: Boolean },
      /**
       * Width property of the container
       * @prop
       * @type string
       */
      width: { type: String },
      /**
       * Height property of the container
       * @prop
       * @type string
       */
      height: { type: String },

      // Margin & padding
      /**
       * Margin property of the container
       * @prop
       * @type string
       */
      margin: { type: String },
      /**
       * Shorthand for "margin: 0;"
       * @prop
       * @type boolean
       */
      noMargin: { type: Boolean },
      /**
       * Padding property of the container
       * @prop
       * @type string
       */
      padding: { type: String },
      /**
       * Shorthand for "padding: 0;"
       * @prop
       * @type boolean
       */
      noPadding: { type: Boolean },

      // Flex types
      /**
       * Flex-direction property of the container
       * @prop
       * @type string
       */
      flexDirection: { type: String },
      /**
       * Align-items property of the container
       * @prop
       * @type string
       */
      alignItems: { type: String },
      /**
       * Align-content property of the container
       * @prop
       * @type string
       */
      alignContent: { type: String },
      /**
       * Justify-content property of the container
       * @prop
       * @type string
       */
      justifyContent: { type: String },
      /**
       * Shorthand from "flex-wrap: wrap;"
       * @prop
       * @type boolean
       */
      flexWrap: { type: Boolean },
      /**
       * Flex basis for children of flex containers
       * @prop
       * @type string
       * */
      flexBasis: { type: String },

      // Extra styling
      /**
       * Border radius of the container
       * @prop
       * @type string
       */
      borderRadius: { type: String },
      /**
       * Elevation of the container. (Values 0 - 12)
       * @prop
       * @type number
       */
      elevation: { type: Number },
      /**
       * Shorthand to round corners by material guidelines (4px)
       * @prop
       * @type boolean
       */
      roundedCorners: { type: Boolean },
      /**
       * Shorthand to vertically center content (! Required display: flex !)
       * @prop
       * @type boolean
       */
      verticalCenter: { type: Boolean },
      /**
       * Shorthand to horizontally center content (! Required display: flex !)
       * @prop
       * @type boolean
       */
      horizontalCenter: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.display = 'block';
    this.block = false;
    this.flex = false;
    this.inline = false;
    this.maxWidth = false;
    this.maxHeight = false;
    this.noMargin = false;
    this.noPadding = false;
    this.alignItems = '';
    this.alignContent = '';
    this.justifyContent = '';
    this.flexWrap = false;
    this.flexBasis = '';
    this.elevation = 0;
    this.roundedCorners = false;
    this.verticalCenter = false;
    this.horizontalCenter = false;
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
    let flexSettings = ``;
    flexSettings += `flex-direction: ${this.flexDirection || 'row'};`;
    if (this.flexDirection === 'row') {
      flexSettings += this.verticalCenter
        ? `align-items: center;`
        : `align-items: ${this.alignItems || 'stretch'};`;
      flexSettings += this.alignContent
        ? `align-content: ${this.alignContent};`
        : `align-content: stretch;`;
      flexSettings += this.horizontalCenter
        ? `justify-content: center;`
        : `justify-content: ${this.justifyContent || 'flex-start'};`;
    } else {
      flexSettings += this.horizontalCenter
        ? `align-items: center;`
        : `align-items: ${this.alignItems || 'stretch'};`;
      flexSettings += this.alignContent
        ? `align-content: ${this.alignContent};`
        : `align-content: stretch;`;
      flexSettings += this.verticalCenter
        ? `justify-content: center;`
        : `justify-content: ${this.justifyContent || 'flex-start'};`;
    }
    flexSettings += this.flexWrap ? `flex-wrap: wrap;` : `flex-wrap: nowrap;`;
    return flexSettings;
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
        ${this.flexBasis ? `flex-basis: ${this.flexBasis};` : ''}

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
