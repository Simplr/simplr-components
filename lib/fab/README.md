# Simplr Fab

### Usage

##### Import
```js
import '@simplr-wc/fab';
```

##### Use

```js
import '@simplr-wc/fab';
```

```html
<simplr-fab icon="done"></simplr-fab>
```

## Properties

| Property        | Attribute       | Type                                             | Default       | Description                                      |
|-----------------|-----------------|--------------------------------------------------|---------------|--------------------------------------------------|
| `buttonColor`   | `buttonColor`   | `string`                                         | ""            | Color of the fab button                          |
| `color`         | `color`         | `string`                                         | ""            | Color of the fab icon and label                  |
| `extended`      | `extended`      | `boolean`                                        | false         | Create a extended version of the fab. Enabled `label` |
| `icon`          | `icon`          | `string`                                         | ""            | Icon to populate the fab with                    |
| `label`         | `label`         | `string`                                         | ""            | Label to show next to the icon in the fab (! Only on extended mode !) |
| `mini`          | `mini`          | `boolean`                                        | false         | Create a smaller version of the fab              |
| `position`      | `position`      | `"bottomright"\|"bottom"\|"bottomleft"\|"topleft"\|"top"\|"topright"` | "bottomright" | Position of the Fab                              |
| `primary`       | `primary`       | `boolean`                                        | false         | Use primary color theme                          |
| `secondary`     | `secondary`     | `boolean`                                        | false         | Use secondary color theme                        |
| `showIconAtEnd` | `showIconAtEnd` | `boolean`                                        | false         | Display icon after the label (! Only on extended mode !) |

