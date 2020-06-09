/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import '@simplr-wc/container';

export default class SimplrCard extends LitElement {
  static get properties() {
    return {
      /**
       * Should the card be elevated
       * @prop
       * @type boolean
       * */
      elevated: { type: Boolean },
      /**
       * Title of the card element
       * @prop
       * @type string
       * */
      title: { type: String },
      /**
       * Subtitle of the card element
       * @prop
       * @type string
       * */
      subtitle: { type: String },
      /**
       * Content of the card element
       * @prop
       * @type string
       * */
      content: { type: String },
      /**
       * Image url of the card element
       * @prop
       * @type string
       * */
      image: { type: String },
      /**
       * Padding of the image on the card element
       * @prop
       * @type string
       * */
      imagePadding: { type: String },

      /**
       * Width of the card element. Automatically sized to reference
       * size between 250px and 350px if left unset
       *
       * @prop
       * @type string
       * */
      width: { type: String },
      /**
       * Width of the image on card. 100% if not set.
       *
       * @prop
       * @type string
       * */
      imageWidth: { type: String },
      /**
       * The Alternative text for image in the card. Used for accessibility reasons
       * @prop
       * @type string
       * */
      imageAltText: { type: String },
      /**
       * Should the card dim on hover.
       * This should be turned on if the card is clickable
       * @prop
       * @type boolean
       * */
      dimOnHover: { type: Boolean },
      /**
       * Font size to scale the card contents by
       * @prop
       * @type boolean
       * */
      fontSize: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(
          --mdc-typography-button-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-weight: var(--mdc-typography-button-font-weight, 500);

        display: block;
        position: relative;
      }

      :host::before {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: ' ';
        display: block;
        background: #000;
        opacity: 0;
        transition: 150ms ease-in-out;
        pointer-events: none;
      }

      .title {
        margin: 0.25rem 0;
        flex-basis: 100%;
      }

      .subtitle,
      .content {
        font-weight: 400;
        color: #5f5f5f;
        flex-basis: 100%;
        white-space: break-spaces;
      }

      .subtitle {
        margin: 0.25rem 0;
      }

      .content {
        margin: 1rem 0 0.25rem;
      }

      img {
        margin: auto;
        border-radius: 4px 4px 0 0;
      }

      slot {
        display: flex;
        width: 100%;
        align-items: center;
        margin-top: 1rem;
        justify-content: space-between;
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.image = '';
    this.imagePadding = '';
    this.dimOnHover = false;
    this.elevated = false;
    this.fontSize = '1rem';
    this.imageAltText = '';
  }

  render() {
    return html`
      <style>
        :host {
        ${this.width
          ? `width: ${this.width};`
          : `
          width: fit-content;
          min-width: 250px;
          max-width: 350px;
      `}

          ${this.dimOnHover ? 'cursor: pointer;' : ''}
        --mdc-typography-button-font-size: calc(${this.fontSize} * 0.875);
        }

        .title {
            font-size: calc(${this.fontSize} * 1.3);
        }

        .subtitle,
        .content {
            font-size: ${this.fontSize};
        }

        img {
            width: ${this.imageWidth ? this.imageWidth : '100%'};
            box-sizing: border-box;
            padding: ${this.imagePadding ? this.imagePadding : ''};
        }

        ${this.dimOnHover
          ? `
            :host(:hover)::before {
              opacity: 0.04;
            }

            :host(:active)::before {
              opacity: 0.1;
            }
        `
          : ''}
      </style>
      <simplr-container
        elevation=${this.elevated ? '3' : '1'}
        flex
        flexDirection="column"
        noMargin
        noPadding
        roundedCorners
      >
        ${this.image
          ? html`
              <img src=${this.image} alt="${this.imageAltText}" />
            `
          : ''}
        <simplr-container flex noMargin padding="1rem" flexWrap>
          <p class="title">${this.title}</p>
          ${this.subtitle
            ? html`
                <p class="subtitle">${this.subtitle}</p>
              `
            : ''}
          ${this.content
            ? html`
                <p class="content">${this.content}</p>
              `
            : ''}
          <slot></slot
        ></simplr-container>
      </simplr-container>
    `;
  }
}

if (!customElements.get('simplr-card')) {
  customElements.define('simplr-card', SimplrCard);
}
