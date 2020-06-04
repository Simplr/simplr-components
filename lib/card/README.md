# Simplr Card

### Usage

##### Import

```js
import '@simplr-wc/card';
```

##### Use

```html
<simplr-card
  title="Card title"
  subtitle="Card subtitle"
  content="Card content, which should be descriptive. The content might span to multiple lines"
  image="https://i.picsum.photos/id/217/300/200.jpg"
></simplr-card>
```

| Property       | Attribute      | Type      | Default | Description                                                                                                 |
| -------------- | -------------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `content`      | `content`      | `string`  | ""      | Content of the card element                                                                                 |
| `dimOnHover`   | `dimOnHover`   | `boolean` | false   | Should the card dim on hover.<br />This should be turned on if the card is clickable                        |
| `elevated`     | `elevated`     | `boolean` | false   | Should the card be elevated                                                                                 |
| `fontSize`     | `fontSize`     | `string`  | "1rem"  | Font size to scale the card contents by                                                                     |
| `image`        | `image`        | `string`  | ""      | Image url of the card element                                                                               |
| `imagePadding` | `imagePadding` | `string`  | ""      | Padding of the image on the card element                                                                    |
| `imageWidth`   | `imageWidth`   | `string`  |         | Width of the image on card. 100% if not set.                                                                |
| `subtitle`     | `subtitle`     | `string`  | ""      | Subtitle of the card element                                                                                |
| `title`        | `title`        | `string`  | ""      | Title of the card element                                                                                   |
| `width`        | `width`        | `string`  |         | Width of the card element. Automatically sized to reference<br />size between 250px and 350px if left unset |
