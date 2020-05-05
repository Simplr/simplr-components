```js script
import { html } from 'lit-html';
import '../lib/input/text-input/text-input.js';
import '../lib/input/number-input/number-input.js';
import '../lib/input/email-input/email-input.js';
import '../lib/input/password-input/password-input.js';
import '../lib/button/button.js';
import '../lib/input/textarea/textarea.js';

export default {
  title: 'Input elements',
  parameters: { components: 'simplr-input' },
};
```

### Properties

| Name               | Type      | Default | Description                                                                |
| ------------------ | --------- | ------- | -------------------------------------------------------------------------- |
| `name`             | `String`  |         | Name of the input field                                                    |
| `label`            | `String`  |         | Label shown above the input field                                          |
| `icon`             | `String`  |         | Material icon prepended to the input field                                 |
| `iconTrailing`     | `String`  |         | Material icon appended to the input field                                  |
| `value`            | `String`  |         | Set value of the input field                                               |
| `placeHolder`      | `String`  |         | Placeholder string on the input                                            |
| `helperText`       | `String`  |         | Helper text below the input field                                          |
| `helperPersistent` | `Boolean` | `false` | Should the helper text disappear on blur                                   |
| `required`         | `Boolean` | `false` | Is the input field required                                                |
| `disabled`         | `Boolean` | `false` | Is the input field disabled                                                |
| `fullWidth`        | `Boolean` | `false` | Is the input field fullWidth                                               |
| `outlined`         | `Boolean` | `false` | Should the input field use the outlined style of material input            |
| `chartCounter`     | `String`  |         | Should the input field have a character counter below it                   |
| `maxLength`        | `Number`  |         | The maximum length of the input field value                                |
| `errorMessage`     | `String`  |         | Error message that is shown on invalid input                               |
| `autoValidate`     | `Boolean` | `false` | Should the input field automatically validate the input on every keystroke |

### Unique properties

##### Number input

| Name   | Type     | Default | Description                                                                   |
| ------ | -------- | ------- | ----------------------------------------------------------------------------- |
| `step` | `Number` | `1`     | Step size of the number input. Less than 1 must be given in "0.2", "0.5" etc. |
| `min`  | `Number` | `NaN`   | Minimum value of the number input                                             |
| `max`  | `Number` | `NaN`   | Maximum value of the number input                                             |

##### Textarea

| Name   | Type     | Default | Description                |
| ------ | -------- | ------- | -------------------------- |
| `rows` | `Number` |         | Number of rows in textarea |
| `cols` | `Number` |         | Number of cols in textarea |

### Normal input

```js preview-story
export const TextInput = () =>
  html`
    <simplr-text-input label="Label"></simplr-text-input>
  `;
```

### Input with icon

```js preview-story
export const TextInputWithIcon = () =>
  html`
    <simplr-text-input label="Label" icon="cancel"></simplr-text-input>
  `;
```

### Input with trailing icon

```js preview-story
export const TextInputWithTrailingIcon = () =>
  html`
    <simplr-text-input label="Label" iconTrailing="cancel"></simplr-text-input>
  `;
```

### Required input

```js preview-story
export const RequiredInput = () =>
  html`
    <simplr-text-input label="Label" required></simplr-text-input>
  `;
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
  `;
```

### Disabled input

```js preview-story
export const DisabledInput = () =>
  html`
    <simplr-text-input label="Label" ?disabled="${true}"></simplr-text-input>
  `;
```

### Fullwidth input

```js preview-story
export const FullwidthInput = () =>
  html`
    <!-- Note: FullWidth does not support label; Only placeholder -->
    <simplr-text-input placeholder="Placeholder" ?fullWidth="${true}"></simplr-text-input>
  `;
```

### Character counter input

```js preview-story
export const CharacterCounterInput = () =>
  html`
    <simplr-text-input label="Label" ?charCounter="${true}" maxLength="255"></simplr-text-input>
  `;
```

### Input with placeholder

```js preview-story
export const InputWithPlaceholder = () =>
  html`
    <simplr-text-input label="Label" placeHolder="Placeholder"></simplr-text-input>
  `;
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
  `;
```

### Input with helper text (Disappearing)

```js preview-story
export const InputWithDisappearingHelperText = () =>
  html`
    <simplr-text-input label="Label" helperText="${"I'm here to help"}"></simplr-text-input>
  `;
```

### Number input

```js preview-story
export const NumberInput = () =>
  html`
    <simplr-number-input label="Label"></simplr-number-input>
  `;
```

### Email input

```js preview-story
export const EmailInput = () =>
  html`
    <simplr-email-input label="Label"></simplr-email-input>
  `;
```

### Password input

```js preview-story
export const PasswordInput = () => html`
  <simplr-password-input label="Label"></simplr-password-input>
`;
```

### Textarea input

```js preview-story
export const TextareaInput = () =>
  html`
    <simplr-text-area label="Label"></simplr-text-area>
  `;
```
