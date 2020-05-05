import { LitElement, html } from 'lit-element';
import '@material/mwc-dialog';

const requiredProps = ['primaryAction'];

export default class SimplrDialog extends LitElement {
  static get properties() {
    return {
      /**
       * Content of dialog
       * @prop
       * @type number
       */
      content: { type: Object },
      /**
       * Button label and action on dialog's primary button
       * @prop
       * @type Object
       */
      primaryAction: { type: Object },
      /**
       * Button label and action on dialog's secondary button
       * @prop
       * @type Object
       */
      secondaryAction: { type: Object },
      /**
       * Should dialog actions be stacked
       * @prop
       * @type boolean
       */
      stacked: { type: Boolean },
      /**
       * Callback function launched as dialog is opened
       * @prop
       * @type {Function}
       */
      onOpened: { type: Function },
      /**
       * Callback function launched as dialog is closed
       * @prop
       * @type {Function}
       */
      onClosed: { type: Function },
      /**
       * Is the dialog open
       * @prop
       * @type boolean
       */
      open: { type: Boolean },
      /**
       * Heading of the dialog element
       * @prop
       * @type string
       */
      heading: { type: String },
      elem: { type: Object },
    };
  }

  openDialog() {
    document.body.appendChild(this);
    this.open = true;
  }

  constructor(props) {
    super();
    if (!props || requiredProps.some(prop => typeof props[prop] === 'undefined')) {
      throw new Error('One or more of required props is not present.');
    }
    this.primaryAction = props.primaryAction || null;
    this.secondaryAction = props.secondaryAction || null;
    this.content = props.content || '';
    this.heading = props.heading || '';
    this.stacked = props.stacked || false;
    this.onOpened = props.onOpened || null;
    this.onClosed = props.onClosed || null;
    this.open = false;
  }

  firstUpdated(_changedProperties) {
    this.elem = this.shadowRoot.querySelector('mwc-dialog');
  }

  handleClosing(e) {
    if (e.detail.action === 'primary') {
      if (this.primaryAction.action) {
        this.primaryAction.action.call(this, e);
      }
    }
    if (e.detail.action === 'secondary') {
      if (this.secondaryAction.action) {
        this.secondaryAction.action.call(this, e);
      }
    }
  }

  handleClosed(e) {
    if (this.onClosed) {
      this.onClosed.call(this, e);
    }
  }

  handleOpened(e) {
    if (this.onOpened) {
      this.onOpened.call(this, e);
    }
  }

  render() {
    return html`
      <mwc-dialog
        heading="${this.heading}"
        ?open=${this.open}
        ?stacked="${this.stacked}"
        @closing="${this.handleClosing}"
        @opened="${this.handleOpened}"
        @closed="${this.handleClosed}"
      >
        <div>${this.content}</div>
        <simplr-button
          slot="primaryAction"
          dialogAction="primary"
          label="${this.primaryAction.label}"
          primary
        ></simplr-button>
        <simplr-button
          slot="secondaryAction"
          dialogAction="secondary"
          label="${this.secondaryAction.label}"
        ></simplr-button>
      </mwc-dialog>
    `;
  }
}

if (!customElements.get('simplr-dialog')) {
  customElements.define('simplr-dialog', SimplrDialog);
}
