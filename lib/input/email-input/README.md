# Simplr Email Input

### Usage

##### Import
```js
import '@simplr-wc/email-input';
```

##### Use
```html
<simplr-email-input label="Label" icon="cancel"></simplr-email-input>
```

## Properties

| Property                  | Attribute          | Type                                             | Default | Description                                      |
|---------------------------|--------------------|--------------------------------------------------|---------|--------------------------------------------------|
| `autoValidate`            | `autoValidate`     | `boolean`                                        | false   | Report input validity on input rather than on blur |
| `charCounter`             | `charCounter`      | `boolean`                                        | false   | Enable character counter of input field (! Required maxLength to be set !) |
| `disabled`                | `disabled`         | `boolean`                                        | false   | Is input field disabled                          |
| `errorMessage`            | `errorMessage`     | `string`                                         | ""      | Error message displayed on invalid input         |
| `fullWidth`               | `fullWidth`        | `boolean`                                        | false   | Does input field use the full width of the field |
| `helperPersistent`        | `helperPersistent` | `boolean`                                        | false   | Determines if helper text is visible always or only on focus |
| `helperText`              | `helperText`       | `string`                                         | ""      | Helper text shown below input field              |
| `icon`                    | `icon`             | `string`                                         | ""      | Icon shown inside the input element              |
| `iconTrailing`            | `iconTrailing`     | `string`                                         | ""      | Trailing icon shown inside the input element     |
| `label`                   | `label`            | `string`                                         | ""      | Label of the input element                       |
| `maxLength`               | `maxLength`        | `number`                                         | -1      | Maximum length of the input field                |
| `name`                    | `name`             | `string`                                         | ""      | Name of the input element                        |
| `outlined`                | `outlined`         | `boolean`                                        | false   | Style the input field as an outlined input element |
| `placeHolder`             | `placeHolder`      | `string`                                         | ""      | Placeholder text of input field                  |
| `required`                | `required`         | `boolean`                                        | false   | Is input field required                          |
| `value`                   | `value`            | `string`                                         | ""      | Preset value of the input field                  |

## Methods

| Method          | Type                 |
|-----------------|----------------------|
| `checkValidity` | `(): boolean`        |
| `getValue`      | `(): string`         |
| `setValue`      | `(value: any): void` |
