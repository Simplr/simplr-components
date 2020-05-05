# Simplr Top app bar

### Usage

##### Import
```js
import '@simplr-wc/top-app-bar';
```

##### Use
```html
<simplr-top-app-bar></simplr-top-app-bar>
```


## Properties

| Property          | Attribute         | Type      | Default | Description                                      |
|-------------------|-------------------|-----------|---------|--------------------------------------------------|
| `actionItems`     | `actionItems`     | `array`   | []      | Array of action items displayed at the right end of top app bar |
| `backgroundColor` | `backgroundColor` | `string`  | ""      | Background color of top app bar                  |
| `centerTitle`     | `centerTitle`     | `boolean` | false   | Center horizontally title of top app bar         |
| `dense`           | `dense`           | `boolean` | false   | Activate dense styling of top app bar            |
| `primary`         | `primary`         | `boolean` | false   | Use primary color theme                          |
| `secondary`       | `secondary`       | `boolean` | false   | Use secondary color theme                        |
| `showBurger`      | `showBurger`      | `boolean` | false   | Display burger menu at the left side of the top app bar |
| `textColor`       | `textColor`       | `string`  | ""      | Text color of top app bar                        |

## Events

| Event                   |
|-------------------------|
| `navigationIconPressed` |
