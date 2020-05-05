```js script
import { html } from 'lit-html';
import "../lib/fab/fab.js";
import "../lib/container/container.js";
import "../lib/select/select.js";

export default {
  title: 'Fab',
};
```

### Default Fab element

```js preview-story
export const defaultFab = () => html`
    <simplr-fab icon="add"></simplr-fab>
`
```


### Positioned fab element

```js preview-story

const options = [
    {label: "Bottom", value: "bottom"},
    {label: "Bottom right", value: "bottomright"},
    {label: "Bottom left", value: "bottomleft"},
    {label: "Left", value: "left"},
    {label: "Top left", value: "topleft"},
    {label: "Top", value: "top"},
    {label: "Top right", value: "topright"},
    {label: "Right", value: "right"},
];

export const positionedFab = () => html`
    <simplr-select @selected=${e => document.querySelector("simplr-fab").position = document.querySelector("simplr-select").getValue()} label="position" .options=${options}></simplr-select>    

    <simplr-fab icon="code"></simplr-fab>
`
```


### Primary fab button

```js preview-story

export const primaryFab = () => html`
    <simplr-fab icon="code" primary></simplr-fab>
`
```


### Secondary fab button

```js preview-story

export const secondaryFab = () => html`
    <simplr-fab icon="code" secondary></simplr-fab>
`
```


### Custom color fab button

```js preview-story

export const customColorFab = () => html`
    <simplr-fab icon="code" buttonColor="#FF6D00" color="#000"></simplr-fab>
`
```


### Extended fab button

```js preview-story

export const extendedFab = () => html`
    <simplr-fab icon="shopping_cart" label="Add to cart" extended ></simplr-fab>
`
```

### Mini fab button

```js preview-story

export const miniFab = () => html`
    <simplr-fab icon="shopping_cart" mini></simplr-fab>
`
```

