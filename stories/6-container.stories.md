```js script
import { html } from 'lit-html';
import '../lib/containers/container.js';
import '../lib/button/button.js';

export default {
  title: 'Container',
};
```

### Basic container

```js preview-story
export const BasicContainer = () => html`
    <simplr-container>
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Elevated container

```js preview-story
export const ElevatedContainer = () => html`
    <simplr-container elevation="3">
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Rounded corners container

```js preview-story
export const RoundedContainer = () => html`
    <simplr-container elevation="3" roundedCorners>
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Fixed width and height container

```js preview-story
export const FixedWidthAndHeight = () => html`
    <simplr-container elevation="3" roundedCorners width="200px" height="75px">
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Max width and height container

```js preview-story
export const MaxWidthAndHeight = () => html`
    <simplr-container elevation="3" roundedCorners maxWidth maxHeight>
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Flex container

```js preview-story
export const FlexContainer = () => html`
    <simplr-container elevation="3" roundedCorners flex>
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Flex container with horizontal centering

```js preview-story
export const FlexContainerHorizontalCenter = () => html`
    <simplr-container elevation="3" roundedCorners flex horizontalCenter>
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Flex container with vertical centering

```js preview-story
export const FlexContainerVerticalCenter = () => html`
    <simplr-container elevation="3" roundedCorners flex verticalCenter height="200px">
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Container without margin nor padding

```js preview-story
export const ContainerWithNoMarginAndPadding = () => html`
    <simplr-container noPadding noMargin elevation="3">
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
```

### Flex direction container

```js preview-story
export const FlexDirectionContainer = () => html`
    <simplr-container flex flexDirection="column">
        <simplr-button raised label="Button" icon="code"></simplr-button>
        <simplr-button raised label="Button" icon="code"></simplr-button>
        <simplr-button raised label="Button" icon="code"></simplr-button>
    </simplr-container>
`
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
`
```
