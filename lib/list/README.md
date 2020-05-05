# Simplr List

### Usage

##### Import
```js
import '@simplr-wc/list';
```

##### Use


```js
import '@simplr-wc/list';

const items = [
    {label: "Item 1", icon: "bookmark_border"},
    {label: "Item 2", icon: "bookmark_border"},
    {label: "Item 3", icon: "bookmark_border"},
    {label: "Item 4", icon: "bookmark_border"},
    {label: "Item 5", icon: "bookmark_border"},
]
```

```html
<simplr-list .items=${items}></simplr-list>
```



## Properties

| Property        | Attribute       | Type      | Default | Description                                      |
|-----------------|-----------------|-----------|---------|--------------------------------------------------|
| `activatable`   | `activatable`   | `boolean` | false   | Activate activatable list item graphics          |
| `items`         | `items`         | `array`   | []      | Items shown on the list                          |
| `listHeader`    | `listHeader`    | `object`  | null    | Header element of the list                       |
| `multi`         | `multi`         | `boolean` | false   | Allow activation of multiple list items (! Requires activatable !) |
| `selectedItems` | `selectedItems` | `array`   | []      | Array of selected item values from list          |
| `separator`     | `separator`     | `boolean` | false   | Show separator between list items                |
