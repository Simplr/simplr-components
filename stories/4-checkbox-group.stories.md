```js script
import { html } from 'lit-html';
import '../lib/input/checkbox-group/checkbox-group.js';

export default {
  title: 'Checkbox group',
};
```

### Checkbox group
```js preview-story
const singleCategoryOptions = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
];

export const CheckboxGroup = () =>
  html`
    <simplr-checkbox-group
      label="Single category options"
      .options="${singleCategoryOptions}"
    ></simplr-checkbox-group>
`
```

### Checkbox group with categories
```js preview-story
const multipleCategoriesOptions = [
  {
    label: 'Category one',
    id: 'cat-1',
    options: [
      { label: 'Category one, option one', value: 1 },
      { label: 'Category one, option two', value: 2 },
    ],
  },
  {
    label: 'Category two',
    id: 'cat-2',
    options: [
      { label: 'Category two, option three', value: 3 },
      { label: 'Category two, option four', value: 4 },
      { label: 'Category two, option five', value: 5 },
      { label: 'Category two, option six', value: 6 },
    ],
  },
];

export const MultipleCategoryCheckboxGroup = () =>
  html`
    <simplr-checkbox-group
      label="Multiple category options"
      .options="${multipleCategoriesOptions}"
    ></simplr-checkbox-group>
`
```
