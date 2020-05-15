# Simplr Theme

Simplr Theme was built to be used in conjunction with other [Simplr Components](https://github.com/Simplr/simplr-components).

Simplr Theme is used to set the overall theme of application for easy use by Simplr Components and custom developed code.

### Usage

##### Init
```js
// Default config init
import SimplrThemeInit from '@simplr-wc/theming';

SimplrThemeInit();
```

```js
// Custom config init
import SimplrThemeInit from '@simplr-wc/theming';

SimplrThemeInit({
  primary: {
    main: '#02a9ee',
    light: '#66daff',
    dark: '#007abb',
  },
  secondary: {
    main: '#e0001e',
    light: '#ff5448',
    dark: '#a50000',
  },
});
```

##### Use

```js
import { SimplrTheme }  from '@simplr-wc/theming';

const mainColor = SimplrTheme().primary.main;
```
