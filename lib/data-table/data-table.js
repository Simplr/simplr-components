/* eslint-disable class-methods-use-this */
import { LitElement, html } from 'lit-element';
import { styles, dataTableStyles } from './data-table-styles.js';
import { SimplrTheme } from '../theming/simplr-theme.js';

const defaultOptions = {
  isRowSelectable: false,
  tableClass: 'simplr-table',
  highlightFirstRowOnMobile: true,
};

/**
 * @param tableOptions isRowSelectable, tableClass, highlightFirstRowOnMobile
 */
export default class SimplrDataTable extends LitElement {
  static get properties() {
    return {
      /**
       * Data of data table
       * @prop
       * @type Array
       */
      tableData: { type: Array },
      /**
       * Column names of data table
       * @prop
       * @type Array
       */
      tableColumns: { type: Array },
      /**
       * Options of data table
       * @prop
       * @type Object
       */
      tableOptions: { type: Object },
      /**
       * Current page of data table
       * @prop
       * @type number
       */
      tablePage: { type: Number },
      /**
       * Count of pages in table
       * @prop
       * @type number
       */
      pageCount: { type: Number },
      /**
       * Number of results to display per page
       * @prop
       * @type number
       */
      resultsPerPage: { type: Number },
      /**
       * Message shown when no results were found
       * @prop
       * @type number
       */
      noResultsMessage: { type: String },
      /**
       * Label of the data table
       * @prop
       * @type number
       */
      tableLabel: { type: String },
      /**
       * Is the data-table still loading
       * @prop
       * @type boolean
       */
      loading: { type: Boolean },
    };
  }

  static get styles() {
    return [dataTableStyles, styles];
  }

  constructor() {
    super();
    this.tableData = [];
    this.tableColumns = [];
    this.tableOptions = defaultOptions;
    this.tableLabel = '';
    this.tablePage = 1;
    this.pageCount = 1;
    this.resultsPerPage = 20;
    this.noResultsMessage = '';
    this.loading = false;
  }

  createLoadingTableData() {
    const arr = [];
    for (let i = 0; i < this.resultsPerPage; i += 1) {
      arr.push({ id: i, data: {} });
    }
    return arr;
  }

  firstUpdated() {
    this.pageCount = Math.ceil(this.tableData.length / this.resultsPerPage);
  }

  updated(_changedProperties) {
    this.pageCount = Math.ceil(this.tableData.length / this.resultsPerPage);
    for (const key of _changedProperties.keys()) {
      if (key === 'tableData') {
        this.tablePage = 1;
      }
    }
  }

  handleRowClick(e) {
    if (this.isTableButtonClick(e)) {
      return;
    }
    const rowId = this.findRowId(e);
    this.dispatchEvent(
      new CustomEvent('rowClick', {
        detail: {
          e,
          rowId,
        },
      }),
    );
  }

  isTableButtonClick(e) {
    // If icon on table was clicked, one of the first 2 elements in the path
    // should contain tableButton in their dataset
    return e.path
      .splice(0, 2)
      .some(elem => Object.prototype.hasOwnProperty.call(elem.dataset, 'tableButton'));
  }

  handleButtonClickEvent(e, eventName) {
    const rowId = this.findRowId(e);
    this.dispatchEvent(new CustomEvent(eventName, { detail: { e, rowId } }));
  }

  findRowId(e) {
    let rowId = null;
    for (const elem of e.path) {
      if (elem.nodeName === 'TR') {
        rowId = elem.id;
        break;
      }
    }
    return rowId;
  }

  createTableHeader() {
    return html`
      <thead>
        <tr class="mdc-data-table__header-row">
          ${this.tableColumns.map(
            header => html`
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">
                ${header}
              </th>
            `,
          )}
        </tr>
      </thead>
    `;
  }

  createTableBody() {
    const arrStart = (this.tablePage - 1) * this.resultsPerPage;
    const arrEnd = arrStart + this.resultsPerPage;
    return html`
      <tbody
        class="mdc-data-table__content ${this.tableOptions.isRowSelectable
          ? 'table-rows--selectable'
          : ''}"
      >
        ${this.tableData.slice(arrStart, arrEnd).map(
          dataRow =>
            html`
              <tr
                class="mdc-data-table__row"
                id="${dataRow.id}"
                @click="${this.tableOptions.isRowSelectable ? this.handleRowClick : null}"
              >
                ${dataRow.data.map((dataCol, i) => this.createTableCell(dataCol, i))}
              </tr>
            `,
        )}
      </tbody>
    `;
  }

  getThemeStyles() {
    return `
    @media (max-width: 1024px) {
      ${
        this.tableOptions.highlightFirstRowOnMobile
          ? `
      td:nth-child(1), td:nth-child(1)[data-header]:before {
        background: ${SimplrTheme().primary.main};
        }
        `
          : `
          td:nth-child(1) span {
            color: rgba(111, 123, 150, 0.7); !important;
          }
          td:nth-child(1)[data-header]:before {
            color: #6f7b96 !important;
          }
        `
      }
    }
    `;
  }

  render() {
    return html`
      <style>
        ${this.getThemeStyles()}
      </style>
      <div class="simplr-data-table-wrapper">
        ${this.tableLabel
          ? html`
              <p class="table-label">${this.tableLabel}</p>
            `
          : ''}
        <div class="mdc-data-table mdc-elevation--z3">
          <table class="mdc-data-table__table reportr-table--${this.tableOptions.tableClass}">
            ${this.createTableHeader()} ${this.createTableBody()}
          </table>
          ${this.tableData.length < 1
            ? html`
                <p class="no-results-found-message">${this.noResultsMessage}</p>
              `
            : ''}
          ${this.createPagination()}
        </div>
      </div>
    `;
  }

  createPagination() {
    if (this.pageCount <= 1) {
      return null;
    }
    const pageArr = [];
    if (this.pageCount < 10) {
      for (let i = 0; i < this.pageCount; i += 1) {
        pageArr.push(i + 1);
      }
    } else {
      const start = this.tablePage > 6 ? this.tablePage - 3 : 1;
      let end = this.tablePage + 3;
      if (this.pagePage < 6) {
        end = 8;
      }
      if (this.pagePage + 5 > this.pageCount) {
        end = this.pageCount;
      }
      for (let i = start; i < end; i += 1) {
        pageArr.push(i);
      }
    }
    const fromPage = (this.tablePage - 1) * this.resultsPerPage;
    let toPage = fromPage + 20;
    if (toPage > this.tableData.length) {
      toPage = this.tableData.length;
    }
    return html`
      <div class="pagination pagination--${this.tableOptions.tableClass}">
        <p>
          'Showing results of range 1-9 (10)'
        </p>
        <div
          class="pagination-previous-page ${this.tablePage === 1
            ? 'pagination-action--disabled'
            : ''}"
          @click="${() => this.changePageTo(this.tablePage - 1)}"
        >
          <reportr-icon icon="chevron_left"></reportr-icon>
        </div>

        ${pageArr.map(
          page => html`
            <div
              class="pagination-entry ${page === this.tablePage
                ? 'pagination-entry--selected'
                : ''}"
              @click="${() => this.changePageTo(page)}"
            >
              ${page}
            </div>
          `,
        )}
        <div
          class="pagination-next-page ${this.tablePage < this.pageCount
            ? ''
            : 'pagination-action--disabled'}"
          @click="${() => this.changePageTo(this.tablePage + 1)}"
        >
          <reportr-icon icon="chevron_right"></reportr-icon>
        </div>
      </div>
    `;
  }

  getIcon(dataCol) {
    if (Array.isArray(dataCol)) {
      return dataCol.some(col => Object.prototype.hasOwnProperty.call(col, 'icon')) ? true : null;
    }
    return Object.prototype.hasOwnProperty.call(dataCol, 'icon') ? dataCol.icon : null;
  }

  getValue(dataCol) {
    return Object.prototype.hasOwnProperty.call(dataCol, 'value') ? dataCol.value : dataCol;
  }

  isButton(dataCol) {
    if (Array.isArray(dataCol)) {
      return dataCol.some(col => col.type === 'button');
    }
    return dataCol.type === 'button';
  }

  getWrapper(dataCol) {
    if (Array.isArray(dataCol)) {
      return dataCol.some(col => Object.prototype.hasOwnProperty.call(col, 'wrapper'))
        ? dataCol[0].wrapper
        : null;
    }
    return Object.prototype.hasOwnProperty.call(dataCol, 'wrapper') ? dataCol.wrapper : null;
  }

  createTableCell(dataCol, i) {
    const icon = this.getIcon(dataCol);
    const value = this.getValue(dataCol);
    const button = this.isButton(dataCol);
    const wrapper = this.getWrapper(dataCol);
    return html`
      <td
        class="${this.getTableCellClasses(dataCol, icon, button)}"
        data-header="${this.tableColumns[i]}"
      >
        ${wrapper
          ? html`
              <div class="${wrapper}">
                ${this.doTableCellContent(dataCol, icon, value)}
              </div>
            `
          : this.doTableCellContent(dataCol, icon, value)}
      </td>
    `;
  }

  doTableCellContent(dataCol, icon, value) {
    return html`
      ${Array.isArray(dataCol)
        ? html`
            ${dataCol.map(
              dataColEntry => html`
                ${this.createTableCellContent(
                  dataColEntry,
                  this.getIcon(dataColEntry),
                  this.getValue(dataColEntry),
                )}
              `,
            )}
          `
        : html`
            ${this.createTableCellContent(dataCol, icon, value)}
          `}
    `;
  }

  createTableCellContent(dataCol, icon, value) {
    return html`
      <span style="${this.getTableCellContentStyles(dataCol)}">
        ${icon
          ? html`
              ${dataCol.type === 'button'
                ? html`
                    <simplr-icon-button
                      icon="${icon}"
                      @click="${e => this.handleButtonClickEvent(e, dataCol.eventName)}"
                    ></simplr-icon-button>
                  `
                : html`
                    <simplr-icon
                      icon="${icon}"
                      @click="${dataCol.eventName
                        ? e => this.handleButtonClickEvent(e, dataCol.eventName)
                        : null}"
                    ></simplr-icon>
                    ${typeof value === 'object' ? '' : value}
                  `}
            `
          : html`
              ${value}
            `}
      </span>
    `;
  }

  getTableCellContentStyles(dataCol) {
    let contentStyles = '';
    if (dataCol.color) {
      contentStyles += `color: ${dataCol.color};`;
    }
    if (dataCol.background) {
      contentStyles += ` background: ${dataCol.background};`;
    }
    return contentStyles;
  }

  getTableCellClasses(dataCol, icon, button) {
    let dataColClasses = dataCol;
    if (Array.isArray(dataColClasses)) {
      dataColClasses = dataCol.length > 0 ? dataCol[0] : dataCol;
    }
    let classes = 'mdc-data-table__cell';
    if (icon) {
      classes += ' mdc-data-table__cell--icon-cell';
    }
    if (button) {
      classes += ' mdc-data-table__cell--button-cell';
    }
    if (dataColClasses.extraClasses) {
      classes += ` ${dataColClasses.extraClasses}`;
    }
    return classes;
  }

  changePageTo(page) {
    this.tablePage = page;
  }
}

if (!customElements.get('simplr-data-table')) {
  customElements.define('simplr-data-table', SimplrDataTable);
}
