import { html } from 'lit-html';
import '../lib/input/checkbox/checkbox.js';

export default {
  title: 'Checkbox elements',
};

export const Checkbox = () =>
  html`
    <p>Normal checkbox</p>
    <simplr-checkbox label="Label"></simplr-checkbox>

    <p>Without label</p>
    <simplr-checkbox></simplr-checkbox>

    <p>Indeterminate</p>
    <simplr-checkbox label="Label" indeterminate></simplr-checkbox>

    <p>Disabled</p>
    <simplr-checkbox label="Label" disabled></simplr-checkbox>

    <p>Checked</p>
    <simplr-checkbox label="Label" checked></simplr-checkbox>

    <p>@change event listener (Prints to console)</p>
    <simplr-checkbox
      id="event-checkbox"
      label="Label"
      @change="${e => {
        console.log('Changed checked state', e);
        console.log('Value ', document.querySelector('#event-checkbox').getValue());
        console.log('Checked ', document.querySelector('#event-checkbox').getChecked());
      }}"
    ></simplr-checkbox>
  `;
