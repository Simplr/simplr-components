import { LitElement, html } from 'lit-element';
import '@material/mwc-snackbar';
import '../icon/icon.js';

class SimplrSnackbar extends LitElement {
  static get properties() {
    return {
      /**
       * Message displayed with the snackbar
       * @prop
       * @type string
       */
      message: { type: String },
      /**
       * Timeout in milliseconds until the snackbar fades away. Defaults to 4000
       * @prop
       * @type number
       */
      timeout: { type: Number },
      /**
       * Position of the snackbar. Defaults to bottom
       * @prop
       * @type {"topleft"|"top"|"topright"|"right"|"bottomright"|"bottom"|"bottomleft"|"left"}
       */
      position: { type: String },
      /**
       * Function initiated if the user clicks on the snackbar
       * @prop
       * @type number
       */
      action: { type: Function },
      /**
       * Status / Theme of the snackbar. Defaults to Info
       * @prop
       * @type {"success"|"error"|"caution"|"info"}
       */
      status: { type: String },

      elem: { type: Object },
    };
  }

  constructor(message, timeout, position, action, status) {
    super();
    this.message = message;
    this.timeout = timeout;
    this.position = position;
    this.action = action;
    this.status = status;
  }

  firstUpdated() {
    this.openSnackbar();
  }

  async openSnackbar() {
    this.elem = this.shadowRoot.querySelector('mwc-snackbar');
    await this.setStyles();
    this.elem.open();
  }

  handleClick() {
    if (this.action) {
      this.action.call(this);
    }
    this.elem.close();
  }

  setStyles() {
    return new Promise(resolve => {
      const trySetStyles = () => {
        const snackBarElem = this.elem.shadowRoot.querySelector('.mdc-snackbar');
        if (!snackBarElem) return window.requestAnimationFrame(() => trySetStyles());

        const css = document.createElement('style');
        css.innerHTML = `
          .mdc-snackbar {
            ${this.position.includes('top') ? 'top: 0; bottom: unset;' : ''}
            ${this.position.includes('bottom') ? 'bottom: 0; top: unset;' : ''}
            ${this.position.includes('right') ? 'right: 0; left: unset;' : ''}
            ${this.position.includes('left') ? 'left: 0; right: unset;' : ''}
          }

          .mdc-snackbar__surface {
            flex-direction: row-reverse;
          }

          .mdc-snackbar > .mdc-snackbar__surface {
            background-color: #FFF;
          }

          .mdc-snackbar__actions {
            width: 56px;
            border-radius: 4px 0 0 4px;
            height: 56px;
            background-color: ${this.getStatusColor()};
            justify-content: center;
            align-content: center;
            color: #FFF;
          }

          .mdc-snackbar > .mdc-snackbar__surface > .mdc-snackbar__label {
            color: #313131;
            padding: 14px;
          }
        `;
        this.elem.shadowRoot.appendChild(css);

        return resolve();
      };
      trySetStyles();
    });
  }

  getStatusColor() {
    switch (this.status) {
      case 'error':
        return 'red';
      case 'success':
        return '#4caf50';
      case 'caution':
        return 'orange';
      default:
        return 'gray';
    }
  }

  getStatusIcon() {
    switch (this.status) {
      case 'error':
        return 'error';
      case 'success':
        return 'done';
      case 'caution':
        return 'warning';
      default:
        return 'help_outline';
    }
  }

  render() {
    return html`
      <mwc-snackbar
        timeoutMs="${this.timeout}"
        labelText="${this.message}"
        @MDCSnackbar:closed="${() => this.remove()}"
        @click="${this.handleClick}"
      >
        <simplr-icon size="2rem" icon="${this.getStatusIcon()}" slot="dismiss"></simplr-icon
      ></mwc-snackbar>
    `;
  }
}

if (!customElements.get('simplr-snackbar')) {
  customElements.define('simplr-snackbar', SimplrSnackbar);
}

export default function openSnackBar(props) {
  const message = typeof props === 'string' ? props : props.message;
  const timeout = props.timeout ? props.timeout : 4000;
  const position = props.position ? props.position : 'bottom';
  const action = props.action ? props.action : null;
  const status = props.status ? props.status : 'info';

  document.body.appendChild(new SimplrSnackbar(message, timeout, position, action, status));
}
