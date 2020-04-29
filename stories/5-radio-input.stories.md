```js script
import { html } from 'lit-html';
import '../lib/input/radio-group/radio-group.js';

export default {
  title: 'Radio group',
};
```

### Properties

| Name            | Type     | Default | Description                                                                                                                                                                        |
| --------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`          | `String` |         | Name of the input for form submission, and identifier for the selection group. Only one radio button can be checked for a given selection group. Maps to the native name attribute |
| `options`       | `Array`  | `[]`    | Create radiobuttons with labels and values according to the options - model                                                                                                        |
| `align`         | `String` | `row`   | The value of radio-button groups 'flex-direction' css-rule                                                                                                                         |
| `selectedValue` | `String` |         | The value of the selected option                                                                                                                                                   |

### Regular radio button row

```js preview-story
const radioSelections = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2, checked: true },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
];

export const RadioGroup = () => html`
  <simplr-radio-group name="inputs-one" .options="${radioSelections}"></simplr-radio-group>
`;
```

### Regular radio button column

```js preview-story
const radioSelectionsInColumn = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2, checked: true },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
];

export const RadioButtonColumn = () => html`
  <simplr-radio-group
    name="inputs-two"
    .options="${radioSelections}"
    align="column"
  ></simplr-radio-group>
`;
```
