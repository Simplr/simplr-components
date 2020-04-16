``` js script
import { html } from 'lit-html';
import '../lib/input/text-input/text-input.js';
import '../lib/input/number-input/number-input.js';
import '../lib/input/email-input/email-input.js';
import '../lib/input/password-input/password-input.js';
import '../lib/button/simplr-button.js';

export default {
  title: 'Input elements',
    parameters: { components: 'simplr-input' }
};
```

### Normal input
```js preview-story
export const TextInput = () =>
html`
    <simplr-text-input label="Label"></simplr-text-input>
`
```

### Input with icon
```js preview-story
export const TextInputWithIcon = () =>
html`
<simplr-text-input label="Label" icon="cancel"></simplr-text-input>
`
```

### Input with trailing icon
```js preview-story
export const TextInputWithTrailingIcon = () =>
html`
    <simplr-text-input label="Label" iconTrailing="cancel"></simplr-text-input>
`
```

### Required input
```js preview-story
export const RequiredInput = () =>
html`
    <simplr-text-input label="Label" required></simplr-text-input>
`
```


### Required input ( Custom error message )
```js preview-story
export const RequiredInputWithCustomErrorMessage = () =>
html`
    <simplr-text-input
      label="Label"
      required
      errorMessage="${'This input is not valid'}"
    ></simplr-text-input>
`
```

### Disabled input
```js preview-story
export const DisabledInput = () =>
html`
    <simplr-text-input label="Label" ?disabled="${true}"></simplr-text-input>
`
```

### Fullwidth input
```js preview-story
export const FullwidthInput = () =>
html`
    <simplr-text-input label="Label" ?fullWidth="${true}"></simplr-text-input>
`
```

### Character counter input
```js preview-story
export const CharacterCounterInput = () =>
html`
    <simplr-text-input label="Label" ?charCounter="${true}" maxLength="255"></simplr-text-input>
`
```

### Input with placeholder
```js preview-story
export const InputWithPlaceholder = () =>
html`
    <simplr-text-input label="Label" placeHolder="Placeholder"></simplr-text-input>
`
```

### Input with helper text
```js preview-story
export const InputWithHelperText = () =>
html`
    <simplr-text-input
      label="Label"
      helperText="I'm here to help"
      ?helperPersistent="${true}"
    ></simplr-text-input>
`
```

### Input with helper text (Disappearing)
```js preview-story
export const InputWithDisappearingHelperText = () =>
html`
    <simplr-text-input label="Label" helperText="${"I'm here to help"}"></simplr-text-input>
`
```


### Number input
```js preview-story
export const NumberInput = () => html`
  <simplr-number-input label="Label"></simplr-number-input>
`;
```

### Email input
```js preview-story
export const EmailInput = () => html`
  <simplr-email-input label="Label"></simplr-email-input>
`;
```

### Password input
```js preview-story
export const PasswordInput = () => html`
  <simplr-password-input label="Label"></simplr-password-input>
`;
```
