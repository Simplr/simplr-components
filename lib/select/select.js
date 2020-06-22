/* eslint-disable class-methods-use-this */

import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { SimplrTheme } from '@simplr-wc/theme';

export default class SimplrSelect extends LitElement {
  static get properties() {
    return {
      /**
       * Label of the select field
       * @prop
       * @type string
       */
      label: { type: String },
      /**
       * Selectable options of the select field
       * @prop
       * @type Array
       */
      options: { type: Array },
      /**
       * Select value of the select options
       * @prop
       * @type string
       */
      selectedValues: { type: Array },
      /**
       * Does the Select field allow multiple values
       * @prop
       * @type boolean
       * */
      multi: { type: Boolean },

      /**
       * Is a input required
       * @prop
       * @type boolean
       */
      required: { type: Boolean },
      /**
       * Error message shown on invalid input
       * @prop
       * @type string
       */
      errorMessage: { type: String },
      /**
       * Helper text shown below select element
       * @prop
       * @type string
       */
      helperText: { type: String },
      /**
       * Style the select input in the outline material style
       * @prop
       * @type boolean
       */
      outlined: { type: Boolean },
      /**
       * Icon shown next to the label in the select field
       * @prop
       * @type string
       */
      icon: { type: String },
      /**
       * Name of the select input
       * @prop
       * @type string
       * */
      name: { type: String },

      /**
       * @ignore
       * */
      isOpen: { type: Boolean },
      /**
       * @ignore
       * */
      size: { type: Number },
      /**
       * @ignore
       * */
      fieldHasError: { type: Boolean },
      /**
       * @ignore
       * */
      optionFilter: { type: String },
      /**
       * @ignore
       * */
      selectedIndex: { type: Number },
    };
  }

  constructor() {
    super();
    this.isOpen = false;
    this.options = [];
    this.selectedValues = [];
    this.fieldHasError = false;
    this.outlined = false;
    this.required = false;
    this.errorMessage = '';
    this.icon = '';
    this.name = '';
    this.helperText = '';
    this.optionFilter = '';
    this.selectedIndex = 0;
  }

  firstUpdated() {
    this.selectedValues = this.selectedValues.map(val => val.toString());
    this.size = this.options.length > 10 ? 10 : this.options.length;
    if (!this.multi) this.size += 1;
    this.elem = this.shadowRoot.querySelector('select');
  }

  isMobile() {
    return 'ontouchstart' in document.documentElement;
  }

  handleMultiSelectClick(e) {
    if (this.isMobile()) {
      return;
    }
    this.handleMultiSelect(e);
  }

  handleSingleSelectClick(e) {
    if (this.isMobile()) {
      return;
    }
    e.preventDefault();
    if (e.path[0].nodeName === 'OPTION') {
      return;
    }
    this.elem.setAttribute('size', this.size);
    this.toggleOpen(e);
  }

  /**
   * Handle multi select selects for desktop
   * where custom ui is used
   * */
  handleMultiSelect(e) {
    if (e.target.nodeName === 'OPTION') {
      if (e.target.classList.contains('option--selected')) {
        this.selectedValues.splice(this.selectedValues.indexOf(e.target.value), 1);
      } else {
        this.selectedValues.push(e.target.value);
      }
      this.clearSearchField();
      this.checkFieldForErrors();
      this.requestUpdate();
    }
  }

  /**
   * Handle multi select selects for mobile
   * devices where the native ui takes over
   * */
  handleMultiSelectChange() {
    if (!this.isMobile()) {
      return;
    }
    const selectedVals = [];
    Array.from(this.elem.options).forEach(opt => {
      if (opt.selected) {
        selectedVals.push(opt.value);
      }
    });
    this.selectedValues = selectedVals;
    this.requestUpdate();
  }

  handleSingleSelectChange() {
    this.handleSingleSelect(this.elem.value);
  }

  handleSingleSelect(val) {
    if (val) {
      this.selectedValues = [val];
    } else {
      this.selectedValues = [];
    }
    this.checkFieldForErrors();
    this.elem.removeAttribute('size');
    this.clearSearchField();
    this.close();
  }

  checkFieldForErrors() {
    this.fieldHasError = this.required && this.selectedValues.length < 1;
  }

  toggleOpen(e) {
    // If delete button is pressed on entry
    if (e.target.nodeName === 'P' || e.target.nodeName === 'INPUT') {
      return;
    }
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.isOpen = true;

    this.shadowRoot.querySelector('#search-input-field').focus();
  }

  close() {
    this.checkFieldForErrors();
    this.optionFilter = '';
    this.selectedIndex = 0;
    // Makes for a smoother experience
    // Also allows to close from dialog open area. Might need to come up with something better
    // down the line
    setTimeout(() => {
      if (!this.multi) {
        this.elem.removeAttribute('size');
      }
      this.isOpen = false;
    }, 150);
  }

  deleteSelectedValue(index) {
    this.selectedValues.splice(index, 1);
    this.requestUpdate();
  }

  getValue() {
    if (this.multi) {
      return this.selectedValues;
    }
    return this.selectedValues.length > 0 ? this.selectedValues[0] : null;
  }

  updateOptionFilter(e) {
    if (e.key === 'Enter') {
      // Select on enter
      const bestMatch = this.shadowRoot.querySelectorAll('option')[this.selectedIndex];
      if (bestMatch) {
        bestMatch.click();
      }
      return;
    }
    if (e.key === 'ArrowUp') {
      this.selectedIndex -= this.selectedIndex > 0 ? 1 : 0;
      return;
    }
    if (e.key === 'ArrowDown') {
      const maxIndex = this.multi ? this.options.length - 1 : this.options.length;
      this.selectedIndex += this.selectedIndex < maxIndex ? 1 : 0;
      return;
    }
    if (e.key === 'Escape') {
      this.close();
      return;
    }
    this.selectedIndex = 0;
    this.optionFilter = e.target.value;

    if (!this.multi) {
      this.elem.setAttribute('size', this.getFilteredOptions().length + 1);
    }
    this.requestUpdate();
  }

  filterOptions(opt) {
    return new RegExp(this.optionFilter, 'gi').test(opt.label);
  }

  getFilteredOptions() {
    return this.options.filter(this.filterOptions.bind(this));
  }

  clearSearchField() {
    this.optionFilter = '';
    this.shadowRoot.querySelector('#search-input-field').value = '';
  }

  createSearchField() {
    if (this.isMobile()) {
      return html``;
    }
    return html`
      <div class="search-field${this.isOpen ? 'search-field--open' : ''}">
        <input
          type="text"
          id="search-input-field"
          @keyup=${this.updateOptionFilter}
          @blur=${this.close}
          autocomplete="off"
        />
      </div>
    `;
  }

  createSelectedValuesArea() {
    return html`
      <div
        class="selected-values
                 ${this.outlined ? ' selected-values--outlined' : ''}
                 ${this.isOpen ? ' selected-values--focused' : ''}
                 ${this.fieldHasError ? ' selected-values--has-errors' : ''}"
        @click=${this.toggleOpen}
      >
        ${this.icon
          ? html`
              <simplr-icon icon=${this.icon}></simplr-icon>
            `
          : ''}
        <label class="${this.isOpen || this.selectedValues.length > 0 ? 'minimize-label' : ''}"
          >${this.label}${this.required ? ' *' : ''}</label
        >
        ${this.selectedValues.map((sv, i) => this.createSelectedValueSpan(sv, i))}
        ${this.createSearchField()}

        <simplr-icon
          class="select-arrow-anchor${this.isOpen ? ' select-arrow-anchor-rotated' : ''}"
          icon="keyboard_arrow_down"
        >
        </simplr-icon>
      </div>
    `;
  }

  createSelectedValueSpan(sv, i) {
    const opt = this.options.find(o => o.value.toString() === sv.toString());
    if (!opt) {
      return html``;
    }
    return html`
      <span class="selected-value"
        >${opt.label}
        ${this.multi
          ? html`
              <p @click=${() => this.deleteSelectedValue(i)}>X</p>
            `
          : ''}
      </span>
    `;
  }

  createMultiSelectElement() {
    const options = this.getFilteredOptions();
    const isMobile = this.isMobile();
    return html`
      <select
        ?required=${this.required}
        @change=${this.handleMultiSelectChange}
        @click=${this.handleMultiSelectClick}
        multiple
        size=${this.optionFilter.length > 0 ? options.length : this.size}
        class="multi-select${this.isOpen ? ' select--open' : ''}"
      >
        ${options.map((opt, i) => {
          const selected = this.selectedValues.some(sv => sv.toString() === opt.value.toString());
          return html`
            <option
              ?selected=${isMobile && selected}
              class="${selected ? 'option--selected' : ''}${this.selectedIndex === i
                ? ' option--index-selected'
                : ''}"
              value="${opt.value}"
              >${opt.label}</option
            >
          `;
        })}</select
      >
    `;
  }

  createSingleSelectElement() {
    const options = this.getFilteredOptions();
    const isMobile = this.isMobile();
    return html`
      <select
        ?required=${this.required}
        @change=${this.handleSingleSelectChange}
        @blur=${this.close}
        class="single-select"
        @mousedown=${e => {
          if (!this.isMobile()) e.preventDefault();
        }}
        @click=${this.handleSingleSelectClick}
      >
        <option
          @click=${() => this.handleSingleSelect()}
          class="${this.selectedIndex === 0 ? 'option--index-selected' : ''}"
        ></option>
        ${options.map((opt, i) => {
          const selected = this.selectedValues.some(sv => sv.toString() === opt.value.toString());
          return html`
            <option
              class="${selected ? 'option--selected' : ''}${this.selectedIndex - 1 === i
                ? ' option--index-selected'
                : ''}"
              @click=${() => this.handleSingleSelect(opt.value.toString())}
              ?selected=${selected && isMobile}
              value="${opt.value}"
              >${opt.label}</option
            >
          `;
        })}</select
      >
    `;
  }

  render() {
    return html`
        <style>
            ${
              this.isMobile()
                ? `
                    .multi-select {
                      font-size: 0;
                      position: absolute;
                      top: 0;
                      transform: scale(1) translateY(-56px);
                      min-height: 56px;
                      background: transparent;
                      border: none;
                      -webkit-appearance: none;
                      -moz-appearance: none;
                    }
                    .multi-select option {
                      pointer-events: none;
                      visibility: hidden;
                    }
                  `
                : ''
            }

            .selected-values label {
              left: ${this.icon ? '2rem' : '0'};
            }
        </style>
        ${this.createSelectedValuesArea()}
      <div class="select-area${this.isOpen ? ' select-area--open' : ''}">
          ${this.multi ? this.createMultiSelectElement() : this.createSingleSelectElement()}
        </select>
      </div>
      <div class="helper-content">
      ${
        this.fieldHasError && this.errorMessage
          ? html`
              <span class="error-line">${this.errorMessage}</span>
            `
          : html`
              ${this.helperText
                ? html`
                    <span class="helper-line">${this.helperText}</span>
                  `
                : ''}
            `
      }
    </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        position: relative;
        display: block;
        font-family: Roboto, sans-serif;

        ${unsafeCSS(`--simplr-theme-primary: ${SimplrTheme().primary.main};`)}
      }

      .search-field {
        transform: scale(0);
      }

      .search-field--open {
        transform: scale(1);
      }

      .selected-values {
        display: flex;
        min-height: 56px;
        width: 100%;

        background-color: #f5f5f5;
        cursor: pointer;
        padding: 1rem 1.5rem 0 1rem;
        box-sizing: border-box;
        position: relative;
        flex-wrap: wrap;
        transition: 200ms ease-in-out;
        border-bottom: 1px solid;
        border-color: rgba(167, 167, 167);
      }

      .selected-values--outlined {
        background: transparent;
        border: 1px solid;
        border-radius: 4px;
        padding: 0.5rem 1rem 0 1rem;
      }

      .selected-values--focused {
        border-color: var(--simplr-theme-primary);
      }

      .selected-values--has-errors {
        border-color: #b00020;
      }

      .selected-values--has-errors label,
      .selected-values--has-errors simplr-icon {
        color: #b00020 !important;
      }

      .selected-values:hover {
        background-color: #ececec;
      }

      .selected-values label {
        position: absolute;
        top: 0;
        transform: translate(1rem, 100%);
        height: fit-content;
        transition: 200ms ease-in-out;
        pointer-events: none;
        z-index: 20;

        -webkit-font-smoothing: antialiased;
        font-family: var(
          --mdc-typography-subtitle1-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
        font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
        letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
        text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
        color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
        line-height: 1.15rem;
      }

      .selected-values .minimize-label {
        font-size: 0.7rem;
        transform: translate(1rem, 10%);
        color: var(--simplr-theme-primary);
      }

      .selected-values--outlined .minimize-label {
        transform: translate(0.5rem, -50%);
        background: #fff;
        padding: 0 0.25rem;
      }

      .selected-values simplr-icon {
        margin-right: 0.5rem;
        color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
      }

      .selected-values--outlined simplr-icon {
        margin-top: 0.5rem;
      }

      .selected-values .select-arrow-anchor {
        color: #797979;
        position: absolute;
        top: calc(50% - 0.5rem);
        right: 0.5rem;
        margin: 0;
        transform: rotate(0);
        transition: 200ms ease-in-out;
        pointer-events: none;
      }

      .selected-values .select-arrow-anchor-rotated {
        transform: rotate(180deg);
      }

      .selected-value {
        height: fit-content;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        padding: 0.25rem;
        border-radius: 4px;
        background: var(--simplr-theme-primary);
        color: #fff;
        margin-right: 0.5rem;
        animation: spawn-in;
        animation-duration: 200ms;
        display: flex;

        transform: scale(1);
      }

      .selected-value p {
        margin: 0 0 0 1rem;
        color: #fff;
        transition: 100ms linear;
      }

      .selected-value p:hover {
        color: #6f0000;
      }

      .helper-content {
        padding: 6px 16px 0;
        -webkit-font-smoothing: antialiased;
        font-family: var(
          --mdc-typography-caption-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-size: var(--mdc-typography-caption-font-size, 0.75rem);
        font-weight: var(--mdc-typography-caption-font-weight, 400);
        letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333em);
        text-transform: var(--mdc-typography-caption-text-transform, inherit);
      }

      .error-line {
        color: #b00020;
      }

      .helper-line {
        color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
      }

      @keyframes spawn-in {
        from {
          transform: scale(0.5);
        }
      }

      .select-area {
        width: 100%;
        position: absolute;
      }

      .select-area--open {
        z-index: 999;
      }

      select,
      select > option {
        width: 100%;
      }

      select.select--open {
        transform: scale(1);
      }

      select {
        transform: scale(0);
        outline: none;
        border: 2px solid #3c3c3c;
        border-radius: 4px;
        transition: 50ms linear;
      }

      option,
      optgroup {
        font-size: 1rem;
        padding: 0.5rem;
        -webkit-appearance: none;
      }

      option:hover {
        background-color: var(--simplr-theme-primary);
        color: #fff;
      }

      option:checked {
        background-color: #66daff66;
      }

      option:focus {
        outline: none;
      }

      option.option--selected {
        cursor: not-allowed;
        color: #626262;
      }

      .single-select {
        font-size: 0;
        cursor: pointer;
        position: absolute;
        top: 0;
        transform: scale(1) translateY(-56px);
        min-height: 56px;
        background: transparent;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .single-select[size] {
        background: #fff;
        border: 2px #3c3c3c solid;
        transform: scale(1) translateY(0);
      }

      #search-input-field {
        font-size: 1.4rem;
        border: none;
        background: transparent;
        color: var(--simplr-theme-primary);
        outline: none;
        margin-top: 5px;
        width: 50%;
      }

      .option--index-selected {
        background-color: var(--simplr-theme-primary) !important;
        color: #fff;
      }
    `;
  }
}

if (!customElements.get('simplr-select')) {
  customElements.define('simplr-select', SimplrSelect);
}
