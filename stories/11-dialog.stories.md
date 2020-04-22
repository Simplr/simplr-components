```js script
import { html } from 'lit-html';
import SimplrDialog from "../lib/dialog/dialog.js";
import "../lib/input/text-input/text-input.js"
import "../lib/button/button.js"

export default {
  title: 'Dialog',
};
```

### API params

| Name | Type | Description |
|---|---|---|
| `content` | `String` or `html` TemplateResult  | Content of the dialog. For basic dialog can be just a string. Can be populates with the Lit HTML `html` element. |
| `primaryAction` | `Object` | Sets the label and action of the primary button in dialog. Properties: `label` : String, `action` : Function |
| `secondaryAction` | `Object` | Sets the label and action of the secondary button in dialog. Properties: `label` : String, `action` : Function |
| `stacked` | `Boolean` | Default: false. Stacks the action buttons in dialog. |
| `onOpened` | `Function` | Function that's called after the dialog has finished opening. |
| `onClosed` | `Function` | Function that's called after the dialog has finished closing. |
|  |   |   |


### API Functions

| Name | Description |
|---|---|
| openDialog | Appends the dialog to `document.body` and opens it |



### Regular dialog

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
    <simplr-button primary raised label="Launch dialog" @click=${() => openDialog()}></simplr-button>
`;
```

### Dialog with custom HTML

```js preview-story
const openHtmlDialog = () => {
    const dialog = new SimplrDialog({
        primaryAction: {label: "Cool"},
        secondaryAction: {label: "Bleh"},
        heading: "You can also have custom html",
        content: html`
            <simplr-container flex flexDirection="column" noMargin noPadding alignItems="flex-end">
                <p>Instead of having just normal boring text, you can add any html elements with the \`html\` tag.</p>
                <simplr-text-input label="Label"></simplr-text-input>
                <simplr-button 
                    style="margin-top:1rem"
                    label="Submit" 
                    icon="code" 
                    raised 
                    primary
                ></simplr-button>
            </simplr-container>
        `
    });
    dialog.openDialog();
}

export const CustomHtmlDialog = () => html`
    <simplr-button primary raised label="Launch dialog" @click=${() => openHtmlDialog()}></simplr-button>
`;
```

### Regular selection dialog

```js preview-story
const openSelectionDialog = () => {
    const dialog = new SimplrDialog({
        primaryAction: {label: "Submit"},
        secondaryAction: {label: "Cancel"},
        heading: "What's your favorite game?",
        content: html`
                    <simplr-radio-group name="fav-game" 
                        .options=${[
                            {id: 1, label: "Doom"},
                            {id: 2, label: "Wolfenstein 3D"}, 
                            {id: 3, label: "Quake"}
                        ]} 
                        align="column"
                    ></simplr-radio-group>
            `
    });
    dialog.openDialog();
}

export const SelectionDialog = () => html`
    <simplr-button primary raised label="Launch dialog" @click=${() => openSelectionDialog()}></simplr-button>
`;
```

### Dialog with stacked actions

```js preview-story
const openStackedActionsDialog = () => {
    const dialog = new SimplrDialog({
        primaryAction: {label: "Cool"},
        secondaryAction: {label: "Bleh"},
        heading: "I'm stacked",
        content: "As you might notice, my actions are now stacked instead of being next to each other.",
        stacked: true
    });
    dialog.openDialog();
}

export const StackedActions = () => html`
    <simplr-button primary raised label="Launch dialog" @click=${() => openStackedActionsDialog()}></simplr-button>
`;
```


### Dialog with actions

```js preview-story

const handlePrimary = e => {
    console.log(e);
}

const handleSecondary = e => {
    console.log(e);
}

const openDialogWithActions = () => {
    const dialog = new SimplrDialog({
        primaryAction: {label: "Primary", action: handlePrimary},
        secondaryAction: {label: "Secondary", action: handleSecondary},
        heading: "I have actions",
        content: "I will launch actions on button presses."
    });
    dialog.openDialog();
}

export const DialogWithActions = () => html`
    <simplr-button primary raised label="Launch dialog" @click=${() => openDialogWithActions()}></simplr-button>
`;
```
