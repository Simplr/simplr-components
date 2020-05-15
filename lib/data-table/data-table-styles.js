import { css } from 'lit-element';

export const styles = css`
  * {
    font-family: Roboto, sans-serif;
  }

  .simplr-data-table-wrapper {
  }

  .table-label {
    color: #6f7b96;
    font-size: 1.2rem;
    margin-top: 0;
    font-weight: 600;
  }

  .mdc-data-table__table {
    width: 100%;
  }

  .mdc-data-table__cell {
    padding: 0 0 0.5em 3%;
    line-height: 1rem;
    text-align: left;
    text-overflow: unset;
    color: #6f7b96;
    font-weight: bold;
    overflow: visible;
  }

  .mdc-data-table__cell--icon-cell simplr-icon {
    margin-right: 5px;
    height: 24px;
  }

  .mdc-data-table__cell--icon-cell span {
    display: flex;
    align-items: center;
  }

  .mdc-data-table__cell--button-cell {
    padding: 0 0 0 1.5%;
  }

  .mdc-data-table__cell--button-cell i {
    font-size: 2rem;
    color: #6f7b96;
    transition: 0.1s ease-in;
  }

  .mdc-data-table__cell--button-cell i:hover {
    color: unset;
  }

  .mdc-data-table__cell--button-cell span {
    display: table-cell;
    align-items: center;
  }

  .mdc-data-table__header-cell {
    padding: 0 0 0.5em 3%;
    text-align: left;
    font-weight: 800;
    opacity: 0.7;
  }

  .mdc-data-table__row {
    border-top-color: rgba(0, 0, 0, 0.07);
  }

  .mdc-data-table .no-results-found-message {
    color: #6f7b96;
    text-align: center;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .pagination p {
    position: absolute;
    left: 5px;
    bottom: 0;
    opacity: 0.5;
  }

  .pagination pagination-entry,
  .pagination div {
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: 0.4s ease-in;
  }

  .pagination .pagination-action--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .table-rows--selectable tr {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .pagination p {
      bottom: -2.5rem;
      left: auto;
      right: auto;
    }

    .mdc-data-table {
      box-shadow: none;
      border: 0;
      width: 100%;
      overflow: visible;
    }

    .mdc-data-table thead {
      display: none;
    }

    .mdc-data-table__table {
      display: block;
    }

    .mdc-data-table__content {
      display: block;
    }

    .mdc-data-table__row {
      display: flex;
      width: 99%;
      flex-direction: column;
      flex-wrap: wrap;
      border: 1px solid rgba(0, 0, 0, 0.07);
      margin-bottom: 2rem;
      background: #fff;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
        0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }

    .mdc-data-table__row td[data-header]:before {
      content: attr(data-header) ':';
      padding: 1rem 0 1rem 1rem;
      flex-basis: 30%;
      text-align: left;
      font-weight: 800;
      border-right: 2px solid rgba(0, 0, 0, 0.07);
      margin-right: 1rem;
      color: rgba(111, 123, 150, 1);
      font-size: 1rem;
      display: flex;
      align-items: center;
      word-break: break-word;
    }

    .mdc-data-table__row td:nth-child(1),
    .mdc-data-table__row td:nth-child(1)[data-header]:before {
      color: #fff;
    }

    .mdc-data-table__row .full-width-mobile {
      flex-basis: 100%;
    }

    .mdc-data-table__cell {
      flex-grow: 1;
      flex-basis: 100%;
      color: rgba(111, 123, 150, 0.7);
      padding: 0;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.07);
      font-size: 1rem;
    }

    .mdc-data-table__cell span {
      display: flex;
      flex-basis: 50%;
      align-items: center;
    }

    .mdc-data-table__cell--button-cell i {
      font-size: 1.8rem;
    }

    .mdc-data-table__cell--button-cell span {
      flex-basis: 0;
    }
  }
`;

// From mdc.data-table.css
export const dataTableStyles = css`
  .mdc-data-table__content {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
  }

  .mdc-data-table {
    background-color: #fff;
    /* @alternate */
    background-color: var(--mdc-theme-surface, #fff);
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    -webkit-overflow-scrolling: touch;
    display: inline-flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-x: auto;
  }
  .mdc-data-table__row {
    background-color: inherit;
  }

  .mdc-data-table__header-row {
    background-color: inherit;
  }

  .mdc-data-table__row--selected {
    background-color: rgba(98, 0, 238, 0.04);
  }

  .mdc-data-table__row {
    border-top-color: rgba(0, 0, 0, 0.12);
  }

  .mdc-data-table__row {
    border-top-width: 1px;
    border-top-style: solid;
  }

  .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .mdc-data-table__header-cell {
    color: rgba(0, 0, 0, 0.87);
  }

  .mdc-data-table__cell {
    color: rgba(0, 0, 0, 0.87);
  }

  .mdc-data-table__cell {
    height: 52px;
  }

  .mdc-data-table__header-cell {
    height: 56px;
  }

  .mdc-data-table__cell,
  .mdc-data-table__header-cell {
    padding-right: 16px;
    padding-left: 16px;
  }

  .mdc-data-table__header-cell--checkbox,
  .mdc-data-table__cell--checkbox {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 0;
  }
  [dir='rtl'] .mdc-data-table__header-cell--checkbox,
  .mdc-data-table__header-cell--checkbox[dir='rtl'],
  [dir='rtl'] .mdc-data-table__cell--checkbox,
  .mdc-data-table__cell--checkbox[dir='rtl'] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 16px;
  }

  .mdc-data-table__table {
    min-width: 100%;
    border: 0;
    white-space: nowrap;
    border-collapse: collapse;
    /**
   * With table-layout:fixed, table and column widths are defined by the width
   * of the first row of cells. Cells in subsequent rows do not affect column
   * widths. This results in a predictable table layout and may also speed up
   * rendering.
   */
    table-layout: fixed;
  }

  .mdc-data-table__cell {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mdc-data-table__cell--numeric {
    text-align: right;
  }
  [dir='rtl'] .mdc-data-table__cell--numeric,
  .mdc-data-table__cell--numeric[dir='rtl'] {
    /* @noflip */
    text-align: left;
  }

  .mdc-data-table__header-cell {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.0071428571em;
    text-decoration: inherit;
    text-transform: inherit;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  [dir='rtl'] .mdc-data-table__header-cell,
  .mdc-data-table__header-cell[dir='rtl'] {
    /* @noflip */
    text-align: right;
  }

  .mdc-data-table__header-cell--numeric {
    text-align: right;
  }
  [dir='rtl'] .mdc-data-table__header-cell--numeric,
  .mdc-data-table__header-cell--numeric[dir='rtl'] {
    /* @noflip */
    text-align: left;
  }

  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:checked
    ~ .mdc-checkbox__background::before,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:indeterminate
    ~ .mdc-checkbox__background::before {
    background-color: #6200ee;
  }
  @supports not (-ms-ime-align: auto) {
    .mdc-data-table__header-row-checkbox
      .mdc-checkbox__native-control:checked
      ~ .mdc-checkbox__background::before,
    .mdc-data-table__header-row-checkbox
      .mdc-checkbox__native-control:indeterminate
      ~ .mdc-checkbox__background::before,
    .mdc-data-table__row-checkbox
      .mdc-checkbox__native-control:checked
      ~ .mdc-checkbox__background::before,
    .mdc-data-table__row-checkbox
      .mdc-checkbox__native-control:indeterminate
      ~ .mdc-checkbox__background::before {
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {
    background-color: #6200ee;
  }
  @supports not (-ms-ime-align: auto) {
    .mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,
    .mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after,
    .mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,
    .mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after {
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before {
    opacity: 0.04;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused
    .mdc-checkbox__ripple::before,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus
    .mdc-checkbox__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)
    .mdc-checkbox__ripple::after {
    transition: opacity 150ms linear;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active
    .mdc-checkbox__ripple::after {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,
  .mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.12;
  }
  .mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::after,
  .mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::before,
  .mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
    .mdc-checkbox__ripple::after {
    background-color: #6200ee;
  }
  @supports not (-ms-ime-align: auto) {
    .mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
      .mdc-checkbox__ripple::before,
    .mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
      .mdc-checkbox__ripple::after,
    .mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
      .mdc-checkbox__ripple::before,
    .mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected
      .mdc-checkbox__ripple::after {
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
  }
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
    ~ .mdc-checkbox__background {
    border-color: rgba(0, 0, 0, 0.54);
    background-color: transparent;
  }
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:enabled:checked
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox
    .mdc-checkbox__native-control:enabled:indeterminate
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:enabled:checked
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox
    .mdc-checkbox__native-control:enabled:indeterminate
    ~ .mdc-checkbox__background {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
    background-color: #6200ee;
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
  @-webkit-keyframes mdc-checkbox-fade-in-background-u5n97po {
    0% {
      border-color: rgba(0, 0, 0, 0.54);
      background-color: transparent;
    }
    50% {
      border-color: #6200ee;
      /* @alternate */
      border-color: var(--mdc-theme-primary, #6200ee);
      background-color: #6200ee;
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
  }
  @keyframes mdc-checkbox-fade-in-background-u5n97po {
    0% {
      border-color: rgba(0, 0, 0, 0.54);
      background-color: transparent;
    }
    50% {
      border-color: #6200ee;
      /* @alternate */
      border-color: var(--mdc-theme-primary, #6200ee);
      background-color: #6200ee;
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
  }
  @-webkit-keyframes mdc-checkbox-fade-out-background-u5n97po {
    0%,
    80% {
      border-color: #6200ee;
      /* @alternate */
      border-color: var(--mdc-theme-primary, #6200ee);
      background-color: #6200ee;
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
    100% {
      border-color: rgba(0, 0, 0, 0.54);
      background-color: transparent;
    }
  }
  @keyframes mdc-checkbox-fade-out-background-u5n97po {
    0%,
    80% {
      border-color: #6200ee;
      /* @alternate */
      border-color: var(--mdc-theme-primary, #6200ee);
      background-color: #6200ee;
      /* @alternate */
      background-color: var(--mdc-theme-primary, #6200ee);
    }
    100% {
      border-color: rgba(0, 0, 0, 0.54);
      background-color: transparent;
    }
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-u5n97po;
    animation-name: mdc-checkbox-fade-in-background-u5n97po;
  }
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background,
  .mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-u5n97po;
    animation-name: mdc-checkbox-fade-out-background-u5n97po;
  }
`;
