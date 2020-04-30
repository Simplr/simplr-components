```js script
import { html } from 'lit-html';
import '../lib/containers/container.js';
import '../lib/grid/grid.js';

export default {
  title: 'Grid',
};
```

### Properties

| Name         | Type      | Default | Description                                                                       |
| ------------ | --------- | ------- | --------------------------------------------------------------------------------- |
| `item`       | `Boolean` | `false` | Shorthand for the grid representing one cell on the container. Check the examples |
| `size`       | `Number`  |         | Set the size of grid-template-columns                                             |
| `tabletSize` | `Number`  |         | Set the size of grid-template-columns for tablets                                 |
| `phoneSize`  | `Number`  |         | Set the size of grid-template-columns for phones                                  |
| `columnGap`  | `String`  | `0px`   | Set the size of grid-column-gap                                                   |
| `rowGap`     | `String`  | `0px`   | Set the size of grid-row-gap                                                      |
| `column`     | `String`  | `null`  | Set custom column size as 'grid-column' value                                     |
| `row`        | `String`  | `null`  | Set custom row size as 'grid-row' value                                           |

### Regular grid

```js preview-story
export const Grid = () => html`
  <style>
    simplr-container {
      border: 1px solid #000;
    }
  </style>
  <simplr-grid size="12">
    <simplr-grid item size="12">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 12</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="6">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 6</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="6">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 6</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
  </simplr-grid>
`;
```

### Grid with gaps

```js preview-story
export const GridWithGaps = () => html`
  <style>
    simplr-container {
      border: 1px solid #000;
    }
  </style>
  <simplr-grid size="12" columnGap="8px" rowGap="8px">
    <simplr-grid item size="12">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 12</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="6">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 6</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="6">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 6</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
  </simplr-grid>
`;
```

### Grid with custom sizing

```js preview-story
export const GridWithCustomSizing = () => html`
  <style>
    simplr-container {
      border: 1px solid #000;
    }
  </style>
  <simplr-grid size="12" columnGap="8px" rowGap="8px">
    <simplr-grid item column="1 / 4" row="1 / 3">
      <simplr-container
        noMargin
        flex
        flexDirection="column"
        horizontalCenter
        verticalCenter
        maxWidth
        maxHeight
      >
        <p>Column: 1 / 4</p>
        <p>Row: 1 / 3</p>
        <p>3 Columns wide, 2 rows high</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item column="4 / 13" row="1 / 5">
      <simplr-container
        noMargin
        flex
        flexDirection="column"
        horizontalCenter
        verticalCenter
        maxWidth
        maxHeight
      >
        <p>Column: 4 / 13</p>
        <p>Row: 1 / 5</p>
        <p>9 Columns wide, 4 rows high</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item column="1 / 13" row="5">
      <simplr-container
        noMargin
        flex
        flexDirection="column"
        horizontalCenter
        verticalCenter
        maxWidth
        maxHeight
      >
        <p>Column: 1 / 13</p>
        <p>Row: 5</p>
        <p>12 Columns wide, 1 row high</p>
      </simplr-container>
    </simplr-grid>
  </simplr-grid>
`;
```

### Grid with gaps

```js preview-story
export const ResponsiveGrid = () => html`
  <style>
    simplr-container {
      border: 1px solid #000;
    }
  </style>
  <simplr-grid columnGap="8px" rowGap="8px">
    <simplr-grid item size="12" tabletSize="8" phoneSize="4">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 12</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="6" tabletSize="4" phoneSize="2">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 6</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="6" tabletSize="4" phoneSize="2">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 6</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="3" tabletSize="2" phoneSize="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3" tabletSize="2" phoneSize="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3" tabletSize="2" phoneSize="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="3" tabletSize="2" phoneSize="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 3</p>
      </simplr-container>
    </simplr-grid>

    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
    <simplr-grid item size="1">
      <simplr-container noMargin flex horizontalCenter verticalCenter maxWidth maxHeight>
        <p>Size: 1</p>
      </simplr-container>
    </simplr-grid>
  </simplr-grid>
`;
```
