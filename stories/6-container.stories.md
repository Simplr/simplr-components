```js script
import { html } from 'lit-html';
import '../lib/containers/container.js';
import '../lib/button/button.js';

export default {
  title: 'Container',
};
```

### Display

| Name      | Type      | Default | Description                     |
| --------- | --------- | ------- | ------------------------------- |
| `display` | `String`  | `block` | Display type                    |
| `block`   | `Boolean` | `false` | Shorthand for display: 'block'  |
| `flex`    | `Boolean` | `false` | Shorthand for display : 'flex'  |
| `inline`  | `Boolean` | `false` | Shorthand for display: 'inline' |

### Sizing

| Name        | Type      | Default | Description                             |
| ----------- | --------- | ------- | --------------------------------------- |
| `maxWidth`  | `Boolean` | `false` | Set the container to use 100% of width  |
| `maxHeight` | `Boolean` | `false` | Set the container to use 100% of height |
| `width`     | `String`  | `auto`  | Value for containers width              |
| `height`    | `String`  | `auto`  | Value for containers height             |

### Margin & Padding

| Name        | Type      | Default | Description                |
| ----------- | --------- | ------- | -------------------------- |
| `margin`    | `String`  | `8px`   | Value of containers margin |
| `noMargin`  | `Boolean` | `false` | Shorthand for no-margin    |
| `padding`   | `String`  | `0px`   | Value of container padding |
| `noPadding` | `Boolean` | `false` | Shorthand for no-padding   |

### Flex

| Name             | Type      | Default | Description                      |
| ---------------- | --------- | ------- | -------------------------------- |
| `flexDirection`  | `String`  | `row`   | Flex-direction for the container |
| `alignItems`     | `String`  |         | Value for align-items            |
| `alignContent`   | `String`  |         | Value for align-content          |
| `justifyContent` | `String`  |         | Value for justify-content        |
| `flexWrap`       | `Boolean` | `false` | Shorthand for flex-wrap          |

### Extra

| Name               | Type      | Default | Description                                                                                     |
| ------------------ | --------- | ------- | ----------------------------------------------------------------------------------------------- |
| `borderRadius`     | `String`  | `0px`   | Value for border-radius                                                                         |
| `elevation`        | `Number`  |         | Value for elevation. Range is 0-12.                                                             |
| `roundedCorners`   | `Boolean` | `false` | Shorthand for rounded corners on the container                                                  |
| `verticalCenter`   | `Boolean` | `false` | Shorthand for centering containers content vertically. NOTE: Requires display: 'flex' to work   |
| `horizontalCenter` | `Boolean` | `false` | Shorthand for centering containers content horizontally. NOTE: Requires display: 'flex' to work |

### Basic container

```js preview-story
export const BasicContainer = () => html`
  <simplr-container>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Elevated container

```js preview-story
export const ElevatedContainer = () => html`
  <simplr-container elevation="3">
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Rounded corners container

```js preview-story
export const RoundedContainer = () => html`
  <simplr-container elevation="3" roundedCorners>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Fixed width and height container

```js preview-story
export const FixedWidthAndHeight = () => html`
  <simplr-container elevation="3" roundedCorners width="200px" height="75px">
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Max width and height container

```js preview-story
export const MaxWidthAndHeight = () => html`
  <simplr-container elevation="3" roundedCorners maxWidth maxHeight>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Flex container

```js preview-story
export const FlexContainer = () => html`
  <simplr-container elevation="3" roundedCorners flex>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Flex container with horizontal centering

```js preview-story
export const FlexContainerHorizontalCenter = () => html`
  <simplr-container elevation="3" roundedCorners flex horizontalCenter>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Flex container with vertical centering

```js preview-story
export const FlexContainerVerticalCenter = () => html`
  <simplr-container elevation="3" roundedCorners flex verticalCenter height="200px">
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Container without margin nor padding

```js preview-story
export const ContainerWithNoMarginAndPadding = () => html`
  <simplr-container noPadding noMargin elevation="3">
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Flex direction container

```js preview-story
export const FlexDirectionContainer = () => html`
  <simplr-container flex flexDirection="column">
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```

### Flex Wrap container

```js preview-story
export const FlexWrapContainer = () => html`
  <simplr-container flex flexWrap>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
    <simplr-button raised label="Button" icon="code"></simplr-button>
  </simplr-container>
`;
```
