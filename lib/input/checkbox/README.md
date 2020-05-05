# Simplr Checkbox

### Usage

##### Import
```js
import '@simplr-wc/checkbox';
```

##### Use
```html
<simplr-checkbox
  name="selection"
  label="Option 1"
></simplr-checkbox>
```

## Properties

| Property        | Attribute       | Type      | Default | Description                                   |
|-----------------|-----------------|-----------|---------|-----------------------------------------------|
| `checked`       | `checked`       | `boolean` | false   | If the checkbox is checked.                   |
| `disabled`      | `disabled`      | `boolean` | false   | If the checkbox is disabled.                  |
| `indeterminate` | `indeterminate` | `boolean` | false   | If the checkbox is in an indeterminate state. |
| `label`         | `label`         | `string`  | ""      | Label shown next to checkbox                  |
| `name`          | `name`          | `string`  | ""      | Name of checkbox.                             |
| `value`         | `value`         | `string`  | ""      | Value of the checkbox field.                  |

## Methods

| Method             | Type                   |
|--------------------|------------------------|
| `getChecked`       | `(): boolean`          |
| `getValue`         | `(): string`           |
| `setChecked`       | `(checked: any): void` |
| `setIndeterminate` | `(on: any): void`      |

## Events

| Event    |
|----------|
| `change` |
