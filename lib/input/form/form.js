/* eslint-disable class-methods-use-this */
import { LitElement, html } from 'lit-element';
import { querySelectorAllDeep } from 'query-selector-shadow-dom';

/**
 * @emits submit
 * */
export default class SimplrForm extends LitElement {
  static get properties() {
    return {
      form: { type: Object },
    };
  }

  constructor() {
    super();
    this.form = null;
  }

  firstUpdated() {
    this.initializeListeners();
    this.form = this.shadowRoot.querySelector('form');
    this.form.addEventListener('submit', e => this.submit(e));
  }

  async initializeListeners() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for elements of instantiate
    const inputElems = querySelectorAllDeep('*', this).filter(elem => elem.nodeName === 'INPUT');

    inputElems.forEach(el => {
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.submit();
        }
      });
    });
  }

  getValue() {
    const formElements = this.getFormElements();
    const formData = {};
    formElements.forEach(fe => {
      formData[fe.name] = fe.getValue();
    });
    return formData;
  }

  getFormElements() {
    return querySelectorAllDeep('*', this)
      .filter(elem => typeof elem.getValue === 'function')
      .filter(el => el.nodeName !== 'SIMPLR-FORM');
  }

  submit(e) {
    if (e) {
      e.preventDefault();
    }
    const formData = this.getValue();
    this.dispatchEvent(new CustomEvent('submit', { detail: { formData } }));
  }

  render() {
    return html`
      <form novalidate>
        <slot></slot>
      </form>
    `;
  }
}

if (!customElements.get('simplr-form')) {
  customElements.define('simplr-form', SimplrForm);
}
