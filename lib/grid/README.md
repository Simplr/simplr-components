# Simplr Grid

### Usage

##### Import
```js
import '@simplr-wc/grid';
```

##### Use
```js
import '@simplr-wc/grid';
```

```html
<simplr-grid size="12">
  <simplr-grid item size="12">
  </simplr-grid>

  <simplr-grid item size="6">
  </simplr-grid>
  <simplr-grid item size="6">
  </simplr-grid>

  <simplr-grid item size="3">
  </simplr-grid>
  <simplr-grid item size="3">
  </simplr-grid>
  <simplr-grid item size="3">
  </simplr-grid>
  <simplr-grid item size="3">
  </simplr-grid>
</simplr-grid>
```

## Properties

| Property     | Attribute    | Type      | Default | Description                                      |
|--------------|--------------|-----------|---------|--------------------------------------------------|
| `column`     | `column`     | `string`  | null    | Grid-column column size                          |
| `columnGap`  | `columnGap`  | `string`  | "0px"   | Column gap size between grid items               |
| `item`       | `item`       | `boolean` | false   | Is the grid element an grid item                 |
| `phoneSize`  | `phoneSize`  | `number`  | 4       | Size of the grid / grid item on phones { 1 - 12 } |
| `row`        | `row`        | `string`  | null    | Grid-column row size                             |
| `rowGap`     | `rowGap`     | `string`  | "0px"   | Row gap size between grid items                  |
| `size`       | `size`       | `number`  | 12      | Size of the grid / grid item { 1 - 12 }          |
| `tabletSize` | `tabletSize` | `number`  | 8       | Size of the grid / grid item on tablet devices { 1 - 12 } |
