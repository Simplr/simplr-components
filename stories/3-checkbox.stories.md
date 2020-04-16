```js script
import { html } from 'lit-html';
import '../lib/input/checkbox/checkbox.js';

export default {
  title: 'Checkbox elements',
};
```

### Normal checkbox
```js preview-story
export const Checkbox = () => html`
    <simplr-checkbox label="Label"></simplr-checkbox>
`
```

### Normal checkbox without label
```js preview-story
export const CheckboxWithoutLabel = () => html`
    <simplr-checkbox></simplr-checkbox>
`
```

### Indeterminate checkbox
```js preview-story
export const IndeterminateCheckbox = () => html`
    <simplr-checkbox label="Label" indeterminate></simplr-checkbox>
`
```

### Disabled checkbox
```js preview-story
export const DisabledCheckbox = () => html`
    <simplr-checkbox label="Label" disabled></simplr-checkbox>
`
```

### Checked checkbox
```js preview-story
export const CheckedCheckbox = () => html`
    <simplr-checkbox label="Label" checked></simplr-checkbox>
`
```

### Checkbox with change event
```js preview-story
export const CheckboxWithEvent = () => html`
    <simplr-checkbox
      id="event-checkbox"
      label="Label"
      @change="${e => {
        console.log('Changed checked state', e);
        console.log('Value ', document.querySelector('#event-checkbox').getValue());
        console.log('Checked ', document.querySelector('#event-checkbox').getChecked());
      }}"
    ></simplr-checkbox>
`
```
