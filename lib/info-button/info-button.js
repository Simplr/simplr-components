import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@simplr-wc/icon';
import { SimplrTheme } from '@simplr-wc/theme';
import Elevation from '@simplr-wc/elevation';
import SimplrDialog from '@simplr-wc/dialog';

export default class SimplrInfoButton extends LitElement {
  static get properties() {
    return {
      /**
       * Determines the icon of info button
       * @property
       * @type string
       * */
      icon: { type: String },
      /**
       * Content of info bubble displayed by the info button
       * @property
       * @type string
       * */
      content: { type: String },
      /** Dialog heading for the dialog opened when clicking the info button
       * @property
       * @type string
       * */
      dialogHeading: { type: String },
      /**
       * Content of info dialog opened by pressing the info button
       * @property
       * @type string
       * */
      dialogContent: { type: String },
      /**
       * Dialog's close text
       * @property
       * @type string
       * */
      dialogCloseText: { type: String },
      /**
       * Size of the info button. Determines the icon size as well as the button size
       * @property
       * @type number
       * */
      size: { type: Number },
      /**
       * Use the primary color theme
       * @property
       * @type boolean
       * */
      primary: { type: Boolean },
      /**
       * Use the secondary color theme
       * @property
       * @type boolean
       * */
      secondary: { type: Boolean },
      /**
       * Custom color for button
       * @property
       * @type string
       * */
      buttonColor: { type: String },
      /**
       * Custom color for the icon inside the button
       * @property
       * @type string
       * */
      color: { type: String },
      /**
       * Custom color for the bubble background
       * @property
       * @type string
       * */
      bubbleColor: { type: String },
      /**
       * Custom color for the bubble content
       * @property
       * @type string
       * */
      bubbleTextColor: { type: String },
    };
  }

  static get styles() {
    return css`
      simplr-icon {
        border-radius: 25%;
        padding: 0.75rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        ${unsafeCSS(Elevation.forElem(2))};
        transition: 0.3s ease-in-out;
      }
      simplr-icon:hover {
        transform: scale(1.02);
      }
      :host {
        width: min-content;
        display: block;
        position: relative;
      }
    `;
  }

  constructor() {
    super();
    this.icon = '';
    this.content = '';
    this.size = '1.4rem';
    this.openDialog = false;
    this.primary = false;
    this.secondary = false;
    this.buttonColor = '';
    this.color = '#FFFFFF';
    this.bubbleColor = SimplrTheme().primary.dark;
    this.bubbleTextColor = '#FFFFFF';
    this.dialogCloseText = 'close';
  }

  getButtonColor() {
    if (this.primary) return SimplrTheme().primary.main;
    if (this.secondary) return SimplrTheme().secondary.main;
    if (this.color) return this.color;
    return 'inherit';
  }

  handleDialogOpen() {
    const dialog = new SimplrDialog({
      heading: this.dialogHeading,
      content: this.dialogContent,
      primaryAction: { label: this.dialogCloseText },
    });
    dialog.openDialog();
  }

  render() {
    return html`
      <style>
        simplr-icon {
          background: ${this.getButtonColor()};
          color: ${this.color};
          width: min-content;
          height: min-content;
        }

        :host::before {
          position: absolute;
          top: calc(-${this.size} - 1rem);
          left: 50%;
          width: max-content;
          content: '${this.content}';
          display: flex;
          margin-bottom: 2rem;
          background: ${this.bubbleColor};
          color: ${this.bubbleTextColor};
          border-radius: 4px;
          padding: 0.35rem;
          font-size: 0.9rem;
          transform: translate(-50%, -0%) scale(0.9);
          opacity: 0;
          transition: 0.1s ease-in-out;
          white-space: nowrap;
          pointer-events: none;
        }
        :host(:hover)::before {
          opacity: 1;
          transform: translate(-50%, -0%) scale(1);
          pointer-events: all;
        }
      </style>
      <simplr-icon
        @click=${() => (this.dialogContent ? this.handleDialogOpen() : null)}
        size=${this.size}
        ?opensDialog=${this.openDialog}
        data-info-content="${this.content}"
        icon="${this.icon}"
      ></simplr-icon>
    `;
  }
}

if (!customElements.get('simplr-info-button')) {
  customElements.define('simplr-info-button', SimplrInfoButton);
}
