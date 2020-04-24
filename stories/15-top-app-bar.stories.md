```js script
import { html } from 'lit-html';
import "../lib/top-app-bar/top-app-bar.js"


export default {
  title: 'Top app bar',
};
```

### Default top app bar

```js preview-story

export const defaultTopAppBar = () => html`
    <simplr-top-app-bar>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```

### Center title of top app bar

```js preview-story
export const centerTitleTopAppBar = () => html`
    <simplr-top-app-bar centerTitle>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```

### Show burger top app bar

```js preview-story
export const showBurgerTopAppbar = () => html`
    <simplr-top-app-bar showBurger @navigationIconPressed=${e => console.log(e)}>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```

### Dense top app bar

```js preview-story
export const denseTopAppBar = () => html`
    <simplr-top-app-bar dense>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```

### Action items in top app bar

```js preview-story
export const actionitemsTopAppBar = () => html`
    <simplr-top-app-bar .actionItems=${[
            {icon: "code", onclick: () => alert("Code action")},
            {icon: "add", onclick: () => alert("Add action")}
        ]}>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```


### Primary color top app bar

```js preview-story
export const primaryTopAppBar = () => html`
    <simplr-top-app-bar primary>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```

### Secondary color top app bar

```js preview-story
export const secondaryTopAppBar = () => html`
    <simplr-top-app-bar secondary>
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```

### Custom color top app bar

```js preview-story
export const customColorTopAppBar = () => html`
    <simplr-top-app-bar backgroundColor="#FF6D00" textColor="#000">
    </simplr-top-app-bar>
    <simplr-container height="150vh" fullWidth elevation="1"></simplr-container>
`
```


