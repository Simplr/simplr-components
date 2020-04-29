```js script
import { html } from 'lit-html';
import openSnackBar from '../lib/snackbar/snackbar.js';
import '../lib/input/text-input/text-input.js';
import '../lib/button/button.js';
import '../lib/containers/container.js';

export default {
  title: 'Snackbar',
};
```

### API Description

| Property   | Type       | Description                                                                                                                                                        |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `message`  | `string`   | Message displayed by the Snackbar.                                                                                                                                 |
| `timeout`  | `number`   | Default: `4000`. Timeout in milliseconds until the snackbar closes automatically.                                                                                  |
| `position` | `string`   | Default: `bottom`. Position of the snackbar on screen. <br />_Possible params:_<br /> `top`, `topleft`, `topright`<br />`bottom`, `bottomleft`, `bottomright`      |
| `action`   | `Function` | Function called when/if snackbar get's clicked.                                                                                                                    |
| `status`   | `string`   | Default: `info`. Status and theme of the snackbar. Modifies the color and icon of the snackbar.<br />_Possible params:_<br />`info`, `success`, `error`, `caution` |

### API Methods

| Method                | Params   | Example                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| openSnackBar          |          |                                                                                                                                                                                                                                       | `openSnackBar` is the only method exported from the Snackbar class.<br />`openSnackBar` can be called ways documented below.                                                                                                                           |
| openSnackBar (simple) | `string` | Example: `openSnackBar("Info updated")`                                                                                                                                                                                               | Opens the Snackbar with default settings and displays the message given as parameter                                                                                                                                                                   |
| openSnackBar (custom) | `Object` | Example (wrap params in curly brackets. Storybook doesn't allow them so they're omitted in the example): `openSnackBar(message: "Submit successful", timeout: 6000, position: "top", action: handleSubmitSuccess, status: "success")` | Opens the snackbar with given settings. Properties are given as a single JSON object. All of the properties are optional and will default to defaults if omitted.<br /><br />_Parameters of this function are documented in the API Description above_ |

### Default snackbar

```js preview-story
export const defaultSnackBar = () => html`
  <simplr-button
    raised
    primary
    label="Launch snackbar"
    @click=${() => openSnackBar("I'm a snackbar")}
  ></simplr-button>
`;
```

### Snackbar with timeout

```js preview-story
export const snackbarWithTimeout = () => html`
  <simplr-button
    raised
    primary
    label="Launch snackbar"
    @click=${() => openSnackBar({ message: "I'm a snackbar", timeout: 6000 })}
  ></simplr-button>
`;
```

### Snackbar with custom position

```js preview-story
export const snackbarWithCustomPosition = () => html`
  <simplr-container flex flexDirection="column">
    <simplr-text-input
      id="position"
      label="position"
      helperText="Valid props: top, topright, topleft, bottom, bottomleft, bottomright"
      value="bottom"
    ></simplr-text-input>
    <simplr-button
      raised
      primary
      label="Launch snackbar"
      @click=${() =>
        openSnackBar({
          message: "I'm a snackbar",
          position: document.querySelector('#position').getValue(),
        })}
    ></simplr-button>
  </simplr-container>
`;
```

### Snackbar with statuses

```js preview-story
export const snackBarWithStatus = () => html`
  <simplr-container flex flexDirection="column">
    <simplr-button
      raised
      primary
      label="Launch success snackbar"
      @click=${() => openSnackBar({ message: 'Success !', status: 'success' })}
    ></simplr-button>
    <simplr-button
      raised
      secondary
      label="Launch error snackbar"
      @click=${() => openSnackBar({ message: 'Error !', status: 'error' })}
    ></simplr-button>
    <simplr-button
      raised
      label="Launch caution snackbar"
      @click=${() => openSnackBar({ message: 'Caution !', status: 'caution' })}
    ></simplr-button>
    <simplr-button
      raised
      primary
      label="Launch info snackbar"
      @click=${() => openSnackBar({ message: 'Info !', status: 'info' })}
    ></simplr-button>
  </simplr-container>
`;
```

### Snackbar with action

```js preview-story
export const snackbarWithAction = () => html`
  <simplr-button
    raised
    primary
    label="Launch snackbar"
    @click=${() =>
      openSnackBar({ message: 'Click me for alert', action: () => alert('You did it!') })}
  ></simplr-button>
`;
```
