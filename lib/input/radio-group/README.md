# Simplr Radio Group

### Usage

##### Import
```js
import '@simplr-wc/radio-group';
```

##### Use
```js
import '@simplr-wc/radio-group';

const radioSelections = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
];
```

```html
<simplr-radio-group
  name="inputs-one"
  .options="${radioSelections}"
  .selectedValue=${2}
></simplr-radio-group>
```

## Properties

| Property        | Attribute       | Type              | Default | Description                        |
|-----------------|-----------------|-------------------|---------|------------------------------------|
| `align`         | `align`         | `"row"\|"column"` | "row"   | Alignment of radio button group.   |
| `name`          | `name`          | `string`          | ""      | Name of the group of radio buttons |
| `options`       | `options`       | `array`           | []      | Array of radio button options.     |
| `selectedValue` | `selectedValue` | `string`          | []      | Pre-selected radio button value.   |

## Methods

| Method     | Type        |
|------------|-------------|
| `getValue` | `(): any[]` |

## Events

| Event    |
|----------|
| `change` |
