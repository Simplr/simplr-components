```js script
import { html } from 'lit-html';
import "../lib/list/list.js"


export default {
  title: 'List',
};
```

### Default list

```js preview-story

const items = [
    {label: "Item 1"},
    {label: "Item 2"},
    {label: "Item 3"},
    {label: "Item 4"},
    {label: "Item 5"},
]

export const defaultList = () => html`
    <simplr-list .items=${items}></simplr-list>
`
```

### List with icons

```js preview-story

const itemsWithIcons = [
    {label: "Item 1", icon: "bookmark_border"},
    {label: "Item 2", icon: "bookmark_border"},
    {label: "Item 3", icon: "bookmark_border"},
    {label: "Item 4", icon: "bookmark_border"},
    {label: "Item 5", icon: "bookmark_border"},
]

export const listWithIcons = () => html`
    <simplr-list .items=${itemsWithIcons}></simplr-list>
`
```

### List with trailing icons

```js preview-story

const itemsWithTrailingIcons = [
    {label: "Item 1", trailingIcon: "info"},
    {label: "Item 2", trailingIcon: "info"},
    {label: "Item 3", trailingIcon: "info"},
    {label: "Item 4", trailingIcon: "info"},
    {label: "Item 5", trailingIcon: "info"},
]

export const listWithTrailingIcons = () => html`
    <simplr-list .items=${itemsWithTrailingIcons}></simplr-list>
`
```


### List with subtitles

```js preview-story
const itemsWithSubtitles = [
    {label: "Item 1", subtitle: "I am a subtitle"},
    {label: "Item 2", subtitle: "I am a subtitle"},
    {label: "Item 3", subtitle: "I am a subtitle"},
    {label: "Item 4", subtitle: "I am a subtitle"},
    {label: "Item 5", subtitle: "I am a subtitle"},
]

export const listWithSubtitles = () => html`
    <simplr-list .items=${itemsWithSubtitles}></simplr-list>
`
```

### List with separators

```js preview-story
const itemsWithSubtitlesAndSeparator = [
    {label: "Item 1", subtitle: "I am a subtitle"},
    {label: "Item 2", subtitle: "I am a subtitle"},
    {label: "Item 3", subtitle: "I am a subtitle"},
    {label: "Item 4", subtitle: "I am a subtitle"},
    {label: "Item 5", subtitle: "I am a subtitle"},
]

export const listWithSeparator = () => html`
    <simplr-list .items=${itemsWithSubtitlesAndSeparator} separator></simplr-list>
`
```

### List with events

```js preview-story
const itemsWithEvents = [
    {label: "Click me for alert", onclick: (e) => alert("I'm an alert")},
    {label: "Click me for console log", onclick: (e) => console.log("I'm a console log",e)},
];

export const listWithEvents = () => html`
    <simplr-list @selected=${e => itemsWithEvents[e.detail.index].onclick.call(this, e)} .items=${itemsWithEvents}></simplr-list>
`
```

### List with a header

```js preview-story
const itemsForListWithHeader = [
    {label: "About me", icon: "person"},
    {label: "Log out", icon: "exit_to_app"},
];

export const listWithHeader = () => html`
    <simplr-list 
        .listHeader=${{label: "Joe Exotic", subtitle: "Tiger King", icon: "folder"}}
        .items=${itemsForListWithHeader}
    ></simplr-list>
`
```

### List with activatable items

```js preview-story
const activatableItems = [
    {label: "item 1", icon: "person"},
    {label: "item 2", icon: "exit_to_app"},
    {label: "item 3", icon: "add"},
    {label: "item 4", icon: "cancel"},
];

export const activatableList = () => html`
    <simplr-list 
        activatable
        .items=${activatableItems}
    ></simplr-list>
`
```

### List with multi select

```js preview-story
const multiSelectItems = [
    {label: "item 1", icon: "person"},
    {label: "item 2", icon: "exit_to_app"},
    {label: "item 3", icon: "add"},
    {label: "item 4", icon: "cancel"},
];

export const multiSelectList = () => html`
    <simplr-list 
        @selected=${() => console.log(document.querySelector("simplr-list").getValue())}
        activatable
        multi
        .items=${multiSelectItems}
    ></simplr-list>
`
```
