import { LitElement, html, css } from 'lit-element';
import '../checkbox/checkbox.js';
import '@material/mwc-formfield';

class SimplrCheckboxGroup extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      options: { type: Object },
      selectedOptions: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      .category-options {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
      }
    `;
  }

  constructor() {
    super();
    this.label = '';
    this.selectedOptions = [];
  }

  handleChange(e) {
    const val = e.target.getValue();
    if (e.target.getChecked()) {
      this.selectedOptions.push(val);
    } else {
      this.selectedOptions = this.selectedOptions.filter(opt => opt !== val);
    }
  }

  handleCategoryOptionLabelSelect(e) {
    const category = e.target.id.replace('-label', '');
    const { options } = this.options.find(opt => opt.id === category);
    const checked = e.target.getChecked();
    options.forEach(opt => {
      const elem = this.shadowRoot.querySelector(`[value='${opt.value}']`);
      if (elem) {
        elem.setChecked(checked);
      }
      const optValueAsString = opt.value.toString();
      if (checked && !this.selectedOptions.includes(optValueAsString)) {
        this.selectedOptions.push(optValueAsString);
      }
      if (!checked) {
        this.selectedOptions = this.selectedOptions.filter(o => o !== optValueAsString);
      }
    });
  }

  handleCategoryOptionChange(e) {
    this.handleChange(e);

    const category = e.target.dataset.id.replace('-option', '');
    const labelElem = this.shadowRoot.querySelector(`#${category}-label`);

    const { options } = this.options.find(opt => opt.id === category);
    const collisions = options
      .map(opt => opt.value.toString())
      .filter(x => this.selectedOptions.includes(x)).length;

    if (collisions === options.length) {
      labelElem.setIndeterminate(false);
      labelElem.setChecked(true);
      return;
    }
    if (collisions > 0) {
      labelElem.setChecked(false);
      labelElem.setIndeterminate(true);
      return;
    }
    labelElem.setChecked(false);
    labelElem.setIndeterminate(false);
  }

  getValue() {
    return this.selectedOptions;
  }

  render() {
    return html`
      <mwc-formfield label="${this.label}"></mwc-formfield>
      ${this.options.map(opt => {
        // Is option
        if (Object.prototype.hasOwnProperty.call(opt, 'value')) {
          return html`
            <simplr-checkbox
              @change="${e => this.handleChange(e)}"
              label="${opt.label}"
              value="${opt.value}"
            ></simplr-checkbox>
          `;
        }
        // Is option category
        return html`
          <simplr-checkbox
            @change="${e => this.handleCategoryOptionLabelSelect(e)}"
            id="${opt.id}-label"
            label="${opt.label}"
          ></simplr-checkbox>
          <div class="category-options">
            ${opt.options.map(
              o =>
                html`
                  <simplr-checkbox
                    data-id="${opt.id}-option"
                    label="${o.label}"
                    value="${o.value}"
                    @change="${e => this.handleCategoryOptionChange(e)}"
                  ></simplr-checkbox>
                `,
            )}
          </div>
        `;
      })}
    `;
  }
}

if (!customElements.get('simplr-checkbox-group')) {
  customElements.define('simplr-checkbox-group', SimplrCheckboxGroup);
}