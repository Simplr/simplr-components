```js script
import { html } from 'lit-html';
import "../lib/icon/icon-button.js";

export default {
  title: 'Icon Button',
};
```

### Default icon

```js preview-story
export const Icon = () => html`
    <simplr-icon-button icon="code"></simplr-icon-button>
`
```

### Primary icon

```js preview-story
export const Primary = () => html`
    <simplr-icon-button icon="code" primary></simplr-icon-button>
`
```

### Secondary icon

```js preview-story
export const Secondary = () => html`
    <simplr-icon-button icon="code" secondary></simplr-icon-button>
`
```

### Custom color icon

```js preview-story
export const CustomColor = () => html`
    <simplr-icon-button icon="code" color="#ff6d00"></simplr-icon-button>
`
```

### Icon size

```js preview-story
export const CustomSize = () => html`
    <simplr-icon-button icon="code" primary size="64px"></simplr-icon-button>
`
```

### Disabled

```js preview-story
export const Disabled = () => html`
    <simplr-icon-button icon="code" primary ?disabled=${true}></simplr-icon-button>
`
```
