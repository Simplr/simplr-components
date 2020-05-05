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
    {label: "Banana", value: 1},
    {label: "Strawberry", value: 2},
    {label: "Kiwi", value: 3},
    {label: "Peach", value: 4},
];
```

```html
<simplr-select
    label="Simple select"
    .options=${options}
></simplr-select>
```

## Properties

| Property                  | Attribute          | Type                                      | Default | Description                                      |
|---------------------------|--------------------|-------------------------------------------|---------|--------------------------------------------------|
| `errorMessage`            | `errorMessage`     | `string`                                  | null    | Error message shown on invalid input             |
| `helperPersistent`        | `helperPersistent` | `boolean`                                 | false   | Is the helper text persistent or only displayed on focus |
| `helperText`              | `helperText`       | `string`                                  | null    | Helper text shown below select element           |
| `icon`                    | `icon`             | `string`                                  | ""      | Icon shown next to the label in the select field |
| `label`                   | `label`            | `string`                                  | ""      | Label of the select field                        |
| `options`                 | `options`          | `array`                                   | []      | Selectable options of the select field           |
| `outlined`                | `outlined`         | `boolean`                                 | false   | Style the select input in the outline material style |
| `required`                | `required`         | `boolean`                                 | false   | Is a input required                              |
| `selectedValue`           | `selectedValue`    | `string`                                  | ""      | Select value of the select options               |

## Methods

| Method             | Type         |
|--------------------|--------------|
| `getValue`         | `(): string` |
| `getValueAsObject` | `(): any`    |
