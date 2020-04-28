```js script
import { html } from 'lit-html';
import '../lib/input/checkbox/checkbox.js';

export default {
  title: 'Checkbox elements',
};
```

### Properties

| Name            | Type      | Default | Description                                                                                                                                                              |
| --------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`         | `String`  |         | Label for the checkbox                                                                                                                                                   |
| `checked`       | `Boolean` | `false` | Creates a checked checkbox                                                                                                                                               |
| `indeterminate` | `Boolean` | `false` | When a checkbox is the parent of a set of child checkboxes, the indeterminate state is used on the parent to indicate that some but not all of its children are checked. |
| `disabled`      | `Boolean` | `false` | Disables the checkbox                                                                                                                                                    |
| `value`         | `String`  |         | Value for the checkbox                                                                                                                                                   |

### Normal checkbox

```js preview-story
export const Checkbox = () => html`
  <simplr-checkbox label="Label"></simplr-checkbox>
`;
```

### Normal checkbox without label

```js preview-story
export const CheckboxWithoutLabel = () => html`
  <simplr-checkbox></simplr-checkbox>
`;
```

### Indeterminate checkbox

```js preview-story
export const IndeterminateCheckbox = () => html`
  <simplr-checkbox label="Label" indeterminate></simplr-checkbox>
`;
```

### Disabled checkbox

```js preview-story
export const DisabledCheckbox = () => html`
  <simplr-checkbox label="Label" disabled></simplr-checkbox>
`;
```

### Checked checkbox

```js preview-story
export const CheckedCheckbox = () => html`
  <simplr-checkbox label="Label" checked></simplr-checkbox>
`;
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
`;
```
