import { html, css } from 'lit-element';
import SimplrInputBase from '@simplr-wc/input-base';
import 'lit-flatpickr';
import '@simplr-wc/text-input';

export default class SimplrDateInput extends SimplrInputBase {
  static get properties() {
    return {
      ...super.properties,
      allowInput: { type: Boolean },
      altFormat: { type: String },
      altInput: { type: Boolean },
      ariaDateFormat: { type: String },
      clickOpens: { type: Boolean },
      dateFormat: { type: String },
      defaultHour: { type: Number },
      defaultMinute: { type: Number },
      disable: { type: Array },
      disableMobile: { type: Boolean },
      enable: { type: Array },
      enableSeconds: { type: Boolean },
      enableTime: { type: Boolean },
      formatDateFn: { type: Function },
      hoursIncrement: { type: Number },
      inline: { type: Boolean },
      maxDate: { type: String },
      minDate: { type: String },
      minuteIncrement: { type: Number },
      mode: { type: String },
      nextArrow: { type: String },
      noCalendar: { type: Boolean },
      onChange: { type: Function },
      onClose: { type: Function },
      onMonthChange: { type: Function },
      onOpen: { type: Function },
      onReady: { type: Function },
      onValueUpdate: { type: Function },
      onYearChange: { type: Function },
      parseDateFn: { type: Function },
      position: { type: String },
      prevArrow: { type: String },
      shorthandCurrentMonth: { type: Boolean },
      showMonths: { type: Number },
      static: { type: Boolean },
      theme: { type: String },
      time_24hr: { type: Boolean },
      weekNumbers: { type: Boolean },
      wrap: { type: Boolean },

      flatPickrInstance: { type: Object },
    };
  }

  static get styles() {
    return css`
      lit-flatpickr {
        overflow: visible;
        width: 100%;
      }
    `;
  }

  constructor() {
    super();
    this.allowInput = false;
    this.altFormat = 'F j, Y';
    this.altInput = false;
    this.ariaDateFormat = 'F j, Y';
    this.clickOpens = true;
    this.dateFormat = 'd.m.Y';
    this.value = '';
    this.defaultHour = 12;
    this.defaultMinute = 0;
    this.disable = [];
    this.disableMobile = false;
    this.enable = [];
    this.enableSeconds = false;
    this.enableTime = false;
    this.hourIncrement = 1;
    this.inline = false;
    this.minuteIncrement = 5;
    this.mode = 'single';
    this.nextArrow = '>';
    this.prevArrow = '<';
    this.noCalendar = false;
    this.position = 'auto';
    this.shorthandCurrentMonth = false;
    this.showMonths = 1;
    this.static = false;
    this.theme = 'material_blue';
    this.time_24hr = true;
    this.weekNumbers = false;
    this.wrap = false;
    this.flatPickrInstance = null;
  }

  getFlatpickrInstance() {
    if (!this.flatPickrInstance) {
      this.flatPickrInstance = this.shadowRoot.querySelector('lit-flatpickr');
    }
    return this.flatPickrInstance;
  }

  getValue() {
    return this.getFlatpickrInstance().getValue();
  }

  setValue(value) {
    this.value = value;
    this.getFlatpickrInstance().setDate(value);
  }

  changeMonth(monthNum, isOffset) {
    this.getFlatpickrInstance().changeMonth(monthNum, isOffset);
  }

  clear() {
    this.getFlatpickrInstance().clear();
  }

  close() {
    this.getFlatpickrInstance().close();
  }

  open() {
    this.getFlatpickrInstance().open();
  }

  destroy() {
    this.getFlatpickrInstance().destroy();
  }

  formatDate(dateObj, formatStr) {
    return this.getFlatpickrInstance().formatDate(dateObj, formatStr);
  }

  parseDate(dateStr, dateFormat) {
    return this.getFlatpickrInstance().parseDate(dateStr, dateFormat);
  }

  getCurrentMonth() {
    return this.getFlatpickrInstance().getCurrentMonth();
  }

  getCurrentYear() {
    return this.getFlatpickrInstance().getCurrentYear();
  }

  getSelectedDates() {
    return this.getFlatpickrInstance().getSelectedDates();
  }

  jumpToDate(date, triggerChange) {
    this.getFlatpickrInstance().jumpToDate(date, triggerChange);
  }

  redraw() {
    this.getFlatpickrInstance().redraw();
  }

  set(option, value) {
    this.getFlatpickrInstance().set(option, value);
  }

  setDate(date, triggerChange, dateFormat) {
    this.getFlatpickrInstance().setDate(date, triggerChange, dateFormat);
  }

  toggle() {
    this.getFlatpickrInstance().toggle();
  }

  render() {
    return html`
      <lit-flatpickr
        allowInput=${this.allowInput}
        altFormat=${this.altFormat}
        ?altInput=${this.altInput}
        altInputClass="mdc-text-field__input flatpickr-input"
        ariaDateFormat=${this.ariaDateFormat}
        ?clickOpens=${this.clickOpens}
        dateFormat=${this.dateFormat}
        .defaultDate=${this.value}
        defaultHour=${this.defaultHour}
        defaultMinute=${this.defaultMinute}
        .disable=${this.disable}
        ?disableMobile=${this.disableMobile}
        .enable=${this.enable}
        ?enableSeconds=${this.enableSeconds}
        ?enableTime=${this.enableTime}
        .formatDateFn=${this.formatDateFn}
        hoursIncrement=${this.hourIncrement}
        ?inline=${this.inline}
        .maxDate=${this.maxDate}
        .minDate=${this.minDate}
        minuteIncrement=${this.minuteIncrement}
        mode=${this.mode}
        nextArrow=${this.nextArrow}
        ?noCalendar=${this.noCalendar}
        .onChange=${this.onChange}
        .onClose=${this.onClose}
        .onMonthChange=${this.onMonthChange}
        .onOpen=${this.onOpen}
        .onReady=${this.onReady}
        .onValueUpdate=${this.onValueUpdate}
        .onYearChange=${this.onYearChange}
        .parseDateFn=${this.parseDateFn}
        position=${this.position}
        prevArrow=${this.prevArrow}
        ?shorthandCurrentMonth=${this.shorthandCurrentMonth}
        showMonths=${this.showMonths}
        ?static=${this.static}
        theme=${this.theme}
        ?time_24hr=${this.time_24hr}
        ?weekNumbers=${this.weekNumbers}
        ?wrap=${this.wrap}
        ><simplr-text-input
          label="${this.label}"
          placeHolder="${this.placeHolder}"
          value=${this.value}
          type="date"
          .icon="${this.icon}"
          .iconTrailing="${this.iconTrailing}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          .validationMessage="${this.errorMessage}"
          ?fullWidth="${this.fullWidth}"
          ?outlined="${this.outlined}"
          ?charCounter="${this.charCounter}"
          .maxLength="${this.maxLength}"
          ?autoValidate="${this.autoValidate}"
          .helper="${this.helperText}"
          ?helperPersistent=${this.helperPersistent}
          pattern=${this.pattern}
        ></simplr-text-input
      ></lit-flatpickr>
    `;
  }
}

if (!customElements.get('simplr-date-input')) {
  customElements.define('simplr-date-input', SimplrDateInput);
}
