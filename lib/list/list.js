import { LitElement, html } from 'lit-element';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

export default class SimplrList extends LitElement {
  static get properties() {
    return {
      /**
       * Header element of the list
       * @prop
       * @type object
       */
      listHeader: { type: Object },
      /**
       * Items shown on the list
       * @prop
       * @type Array
       */
      items: { type: Array },
      /**
       * Show separator between list items
       * @prop
       * @type boolean
       */
      separator: { type: Boolean },
      /**
       * Activate activatable list item graphics
       * @prop
       * @type boolean
       */
      activatable: { type: Boolean },
      /**
       * Allow activation of multiple list items (! Requires activatable !)
       * @prop
       * @type boolean
       */
      multi: { type: Boolean },
      /**
       * Array of selected item values from list
       * @prop
       * @type Array
       */
      selectedItems: { type: Array },
    };
  }

  constructor() {
    super();
    this.listHeader = null;
    this.items = [];
    this.separator = false;
    this.activatable = false;
    this.multi = false;
    this.selectedItems = [];
  }

  getValue() {
    return this.shadowRoot.querySelector('mwc-list').selected;
  }

  render() {
    return html`
      <mwc-list ?activatable="${this.activatable}" ?multi="${this.multi}">
        ${this.listHeader
          ? html`
              <mwc-list-item twoline graphic="avatar" noninteractive>
                <span>${this.listHeader.label}</span>
                <span slot="secondary">${this.listHeader.subtitle}</span>
                <simplr-icon slot="graphic" icon="${this.listHeader.icon}"></simplr-icon>
              </mwc-list-item>
              <li divider role="separator"></li>
            `
          : ''}
        ${this.items.map(
          item =>
            html`
              <mwc-list-item
                ?hasMeta="${item.trailingIcon}"
                graphic="${item.icon ? 'avatar' : ''}"
                ?twoline="${item.subtitle}"
              >
                ${item.label}
                ${item.icon
                  ? html`
                      <simplr-icon icon="${item.icon}" slot="graphic"></simplr-icon>
                    `
                  : ''}
                ${item.trailingIcon
                  ? html`
                      <simplr-icon icon="${item.trailingIcon}" slot="meta"></simplr-icon>
                    `
                  : ''}
                ${item.subtitle
                  ? html`
                      <span slot="secondary">${item.subtitle}</span>
                    `
                  : ''}
              </mwc-list-item>
              ${this.separator
                ? html`
                    <li divider role="separator"></li>
                  `
                : ''}
            `,
        )}
      </mwc-list>
    `;
  }
}

if (!customElements.get('simplr-list')) {
  customElements.define('simplr-list', SimplrList);
}
