# Simplr Dialog

### Usage

##### Import
```js
import SimplrDialog from "simplr-components/dialog/dialog.js";
```

##### Use
```js
const dialog = new SimplrDialog({
    primaryAction: {label: "Cool"},
    secondaryAction: {label: "Bleh"},
    heading: "Hello",
    content: "Hello world :) This is my first dialog"
});

dialog.openDialog();
```
