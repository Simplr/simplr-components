import { LitElement, html } from 'lit-element';
import '@material/mwc-dialog';

const requiredProps = ['primaryAction'];

export default class SimplrDialog extends LitElement {
  static get properties() {
    return {
      content: { type: Object },
      primaryAction: { type: Object },
      secondaryAction: { type: Object },

      open: { type: Boolean },
      elem: { type: Object },
    };
  }

  openDialog() {
    document.body.appendChild(this);
    this.open = true;
  }

  constructor(props) {
    super();
    if (requiredProps.some(prop => typeof props[prop] === 'undefined')) {
      throw new Error('One or more of required props is not present.');
    }
    this.primaryAction = props.primaryAction || null;
    this.secondaryAction = props.secondaryAction || null;
    this.content = props.content || '';
    this.heading = props.heading || '';
    this.open = false;
  }

  firstUpdated(_changedProperties) {
    this.elem = this.shadowRoot.querySelector('mwc-dialog');
  }

  render() {
    return html`
      <mwc-dialog heading="${this.heading}" ?open=${this.open}>
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
          secondary
        ></simplr-button>
      </mwc-dialog>
    `;
  }
}

if (!customElements.get('simplr-dialog')) {
  customElements.define('simplr-dialog', SimplrDialog);
}
