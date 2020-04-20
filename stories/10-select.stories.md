```js script
import { html } from 'lit-html';
import "../lib/select/select.js";

export default {
  title: 'Select',
};


const options = [
    {label: "Banana", value: 1},
    {label: "Strawberry", value: 2},
    {label: "Kiwi", value: 3},
    {label: "Peach", value: 4},
];
```

### Data format

```js 
    const options = [
        {label: "Banana", value: 1},
        {label: "Strawberry", value: 2},
        {label: "Kiwi", value: 3},
        {label: "Peach", value: 4},
    ];

```

### Simple select

```js preview-story
export const SimpleSelect = () => html`
    <simplr-select
        label="Simple select"
        .options=${options}
    ></simplr-select>
`
```

### Simple select with selected value

```js preview-story
export const SimpleSelectWithSelectedValue = () => html`
    <simplr-select
        label="Simple select"
        .options=${options}
        selectedValue="1"
    ></simplr-select>
`
```

### Outlined select

```js preview-story

export const OutlinedSelect = () => html`
    <simplr-select
        ?outlined=${true}
        label="Simple select"
        .options=${options}
        selectedValue="1"
    ></simplr-select>
`
```


### Select with Icon

```js preview-story

export const SelectWithIcon = () => html`
    <simplr-select
        icon="code"
        label="Simple select"
        .options=${options}
        selectedValue="1"
    ></simplr-select>
`
```
