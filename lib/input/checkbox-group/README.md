# Simplr Checkbox Group

### Usage

##### Import
```js
import '@simplr-wc/checkbox-group';
```

##### Use


```js
  import '@simplr-wc/checkbox-group';


const singleCategoryOptions = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
];
```

```html
<simplr-checkbox-group
  label="Single category options"
  .options="${singleCategoryOptions}"
  .selectedOptions=${[2]}
></simplr-checkbox-group>
```

## Properties

| Property          | Attribute         | Type     | Default | Description                               |
|-------------------|-------------------|----------|---------|-------------------------------------------|
| `label`           | `label`           | `string` | ""      | Label shown above the group of checkboxes |
| `options`         | `options`         | `array`  | []      | List of options shown as checkboxes.      |
| `selectedOptions` | `selectedOptions` | `array`  | []      | List of selected values in options.       |

## Methods

| Method                            | Type              |
|-----------------------------------|-------------------|
| `getValue`                        | `(): any`         |
