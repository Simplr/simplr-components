# Simplr Select

### Usage

##### Import

```js
import '@simplr-wc/select';
```

##### Use

```js
import '@simplr-wc/select';

const options = [
  { label: 'Banana', value: 1 },
  { label: 'Strawberry', value: 2 },
  { label: 'Kiwi', value: 3 },
  { label: 'Peach', value: 4 },
];
```

```html
<simplr-select label="Simple select" .options="${options}"></simplr-select>
```

## Properties

| Property         | Attribute        | Type      | Default | Description                                          |
| ---------------- | ---------------- | --------- | ------- | ---------------------------------------------------- |
| `errorMessage`   | `errorMessage`   | `string`  | ""      | Error message shown on invalid input                 |
| `fieldHasError`  |                  | `boolean` | false   |                                                      |
| `helperText`     | `helperText`     | `string`  | ""      | Helper text shown below select element               |
| `icon`           | `icon`           | `string`  | ""      | Icon shown next to the label in the select field     |
| `isOpen`         |                  | `boolean` | false   |                                                      |
| `label`          | `label`          | `string`  |         | Label of the select field                            |
| `multi`          | `multi`          | `boolean` |         | Does the Select field allow multiple values          |
| `name`           | `name`           | `string`  | ""      | Name of the select input                             |
| `options`        | `options`        | `array`   | []      | Selectable options of the select field               |
| `outlined`       | `outlined`       | `boolean` | false   | Style the select input in the outline material style |
| `required`       | `required`       | `boolean` | false   | Is a input required                                  |
| `selectedValues` | `selectedValues` | `array`   | []      | Select value of the select options                   |

## Methods

| Method     | Type       | Description |
| ---------- | ---------- | ----------- |
| `close`    | `(): void` |             |
| `getValue` | `(): any`  |             |
| `open`     | `(): void` |             |
