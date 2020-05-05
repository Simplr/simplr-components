# Simplr Container

### Usage

##### Import
```js
import '@simplr-wc/container';
```

##### Use
```html
<simplr-container></simplr-container>
```


## Properties

| Property           | Attribute          | Type                                             | Default | Description                                      |
|--------------------|--------------------|--------------------------------------------------|---------|--------------------------------------------------|
| `alignContent`     | `alignContent`     | `string`                                         | ""      | Align-content property of the container          |
| `alignItems`       | `alignItems`       | `string`                                         | ""      | Align-items property of the container            |
| `block`            | `block`            | `boolean`                                        | false   | Shorthand to use "display: block;"               |
| `borderRadius`     | `borderRadius`     | `string`                                         | "0px"   | Border radius of the container                   |
| `display`          | `display`          | `"inline"\|"block"\|"contents"\|"flex"\|"grid"\|"inline-block"\|"inline-flex"\|"inline-grid"\|"inline-table"\|"list-item"\|"run-in"\|"table"\|"table-caption"\|"table-column-group"\|"table-header-group"\|"table-footer-group"\|"table-row-group"\|"table-cell"\|"table-column"\|"table-row"\|"none"\|"initial"\|"inherit"` | "block" | Display type of the container                    |
| `elevation`        | `elevation`        | `number`                                         | 0       | Elevation of the container. (Values 0 - 12)      |
| `flex`             | `flex`             | `boolean`                                        | false   | Shorthand to use "display: flex;"                |
| `flexDirection`    | `flexDirection`    | `string`                                         | "row"   | Flex-direction property of the container         |
| `flexWrap`         | `flexWrap`         | `boolean`                                        | false   | Shorthand from "flex-wrap: wrap;"                |
| `height`           | `height`           | `string`                                         | "auto"  | Height property of the container                 |
| `horizontalCenter` | `horizontalCenter` | `boolean`                                        | false   | Shorthand to horizontally center content (! Required display: flex !) |
| `inline`           | `inline`           | `boolean`                                        | false   | Shorthand to use "display: inline;"nm            |
| `justifyContent`   | `justifyContent`   | `string`                                         | ""      | Justify-content property of the container        |
| `margin`           | `margin`           | `string`                                         | "8px"   | Margin property of the container                 |
| `maxHeight`        | `maxHeight`        | `boolean`                                        | false   | Shorthand for "height: 100%;"                    |
| `maxWidth`         | `maxWidth`         | `boolean`                                        | false   | Shorthand for "width: 100%;"                     |
| `noMargin`         | `noMargin`         | `boolean`                                        | false   | Shorthand for "margin: 0;"                       |
| `noPadding`        | `noPadding`        | `boolean`                                        | false   | Shorthand for "padding: 0;"                      |
| `padding`          | `padding`          | `string`                                         | "0px"   | Padding property of the container                |
| `roundedCorners`   | `roundedCorners`   | `boolean`                                        | false   | Shorthand to round corners by material guidelines (4px) |
| `verticalCenter`   | `verticalCenter`   | `boolean`                                        | false   | Shorthand to vertically center content (! Required display: flex !) |
| `width`            | `width`            | `string`                                         | "auto"  | Width property of the container                  |
