```js script
import { html } from 'lit-html';
import '../lib/button/button.js';

export default {
  title: 'Button elements',
};
```

### Normal button
```js preview-story
export const NormalButton = () => html`
  <simplr-button label="Button"></simplr-button>
`
```

### Button with event
```js preview-story
export const ButtonWithEvent = () => html`
  <simplr-button label="Click me for event" @click="${() => alert('YAY!')}"></simplr-button>
`
```

### Button with Icon
```js preview-story
export const IconButton = () => html`
  <simplr-button label="Button" icon="cancel"></simplr-button>
`
```

### Button with trailing icon
```js preview-story
export const TrailingIconButton = () => html`
  <simplr-button label="Button" icon="cancel" trailingIcon></simplr-button>
`
```

### Primary button
```js preview-story
export const PrimaryButton = () => html`
  <simplr-button label="Button" icon="code" primary></simplr-button>
  <simplr-button label="Button" icon="code" primary raised></simplr-button>
`
```

### Secondary button
```js preview-story
export const SecondaryButton = () => html`
  <simplr-button label="Button" icon="code" secondary></simplr-button>
  <simplr-button label="Button" icon="code" secondary raised></simplr-button>
`
```


### Custom color button
```js preview-story
export const CustomColorButton = () => html`
    <simplr-button label="Button" icon="code" color="#ff6d00"></simplr-button>
    <simplr-button
        label="Button"
        icon="code"
        color="#ff6d00"
        labelColor="#484848"
        raised
    ></simplr-button>
`
```

### Outlined button
```js preview-story
export const OutlineButton = () => html`
  <simplr-button label="Button" outlined></simplr-button>
`
```

### Raised button
```js preview-story
export const RaisedButton = () => html`
  <simplr-button label="Button" raised></simplr-button>
`
```

### Unelevated button
```js preview-story
export const UnelevatedButton = () => html`
  <simplr-button label="Button" unelevated></simplr-button>
`
```
### Dense button
```js preview-story
export const DenseButton = () => html`
  <simplr-button label="Button" dense></simplr-button>
`
```
### Disabled button
```js preview-story
export const DisabledButton = () => html`
  <simplr-button label="Button" disabled></simplr-button>
`
```
