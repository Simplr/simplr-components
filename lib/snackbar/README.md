# Simplr Snackbar

### Usage

##### Import
```js
import openSnackBar from '@simplr-wc/snackbar';
```

##### Use
```js
openSnackBar();

openSnackBar({
  status: "success",
  message: "Successfully saved progress",
  timeout: 6000,
  action: () => console.log("closed by user action"),
  position: "topright"
});
```

## Properties

| Property   | Attribute  | Type                                             | Default    | Description                                      |
|------------|------------|--------------------------------------------------|------------|--------------------------------------------------|
| `action`   | `action`   |                                                  | "action"   | Function initiated if the user clicks on the snackbar |
| `message`  | `message`  | `string`                                         | "message"  | Message displayed with the snackbar              |
| `position` | `position` | `"topleft"\|"top"\|"topright"\|"right"\|"bottomright"\|"bottom"\|"bottomleft"\|"left"` | "position" | Position of the snackbar. Defaults to bottom     |
| `status`   | `status`   | `"success"\|"error"\|"caution"\|"info"`          | "status"   | Status / Theme of the snackbar. Defaults to Info |
| `timeout`  | `timeout`  | `number`                                         | "timeout"  | Timeout in milliseconds until the snackbar fades away. Defaults to 4000 |

## Methods

| Method           | Type                                             |
|------------------|--------------------------------------------------|
| `openSnackbar`   | `(): Promise<void>`                              |
