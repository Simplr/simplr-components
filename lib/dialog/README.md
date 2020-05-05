# Simplr Dialog

### Usage

##### Import
```js
import SimplrDialog from "@simplr-wc/dialog";
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

## Properties

| Property          | Attribute         | Type       | Default | Description                                      |
|-------------------|-------------------|------------|---------|--------------------------------------------------|
| `content`         | `content`         | `object`   |         | Content of dialog                                |
| `heading`         | `heading`         | `string`   |         | Heading of the dialog element                    |
| `onClosed`        | `onClosed`        | `Function` |         | Callback function launched as dialog is closed   |
| `onOpened`        | `onOpened`        | `Function` |         | Callback function launched as dialog is opened   |
| `open`            | `open`            | `boolean`  | false   | Is the dialog open                               |
| `primaryAction`   | `primaryAction`   | `object`   |         | Button label and action on dialog's primary button |
| `secondaryAction` | `secondaryAction` | `object`   |         | Button label and action on dialog's secondary button |
| `stacked`         | `stacked`         | `boolean`  |         | Should dialog actions be stacked                 |

## Methods

| Method          | Type             |
|-----------------|------------------|
| `openDialog`    | `(): void`       |
