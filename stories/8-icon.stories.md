```js script
import { html } from 'lit-html';
import "../lib/icon/icon.js";

export default {
  title: 'Icon',
};
```

### Default icon

```js preview-story
export const Icon = () => html`
    <simplr-icon icon="code"></simplr-icon>
`
```

### Primary icon

```js preview-story
export const Primary = () => html`
    <simplr-icon icon="code" primary></simplr-icon>
`
```

### Secondary icon

```js preview-story
export const Secondary = () => html`
    <simplr-icon icon="code" secondary></simplr-icon>
`
```

### Custom color icon

```js preview-story
export const CustomColor = () => html`
    <simplr-icon icon="code" color="#ff6d00"></simplr-icon>
`
```

### Icon size

```js preview-story
export const CustomSize = () => html`
    <simplr-icon icon="code" primary size="64px"></simplr-icon>
`
```
