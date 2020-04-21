```js script
import { html } from 'lit-html';
import SimplrDialog from "../lib/dialog/dialog.js";

export default {
  title: 'Dialog',
};
```

```js preview-story
const openDialog = () => {
    const dialog = new SimplrDialog({
        primaryAction: {label: "Cool"},
        secondaryAction: {label: "Bleh"},
        heading: "Hello",
        content: "Hello world :) This is my first dialog"
    });
    dialog.openDialog();
}

export const RegularDialog = () => html`
    <simplr-button label="Launch dialog" @click=${() => openDialog()}></simplr-button>
`;
```
