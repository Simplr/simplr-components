# Simplr Accordion

### Usage

```js
import '@simplr-wc/accordion';
```

```html
<simplr-accordion label="Accordion 1" icon="code">
  <simplr-container>
    <h2>This is the Accordion content pane</h2>
    <p>This pane can contain anything from text to images to whatever you can imagine</p>
    <p>Lorem ipsum and so on</p>
  </simplr-container>
</simplr-accordion>
<simplr-accordion label="Accordion 2 (No Icon)">
  <simplr-container>
    <h2>This is the Accordion content pane</h2>
    <p>This pane can contain anything from text to images to whatever you can imagine</p>
    <p>Lorem ipsum and so on</p>
  </simplr-container>
</simplr-accordion>
<simplr-accordion label="Accordion 3 (Background color when open)" openBackgroundColor="red">
  <simplr-container>
    <h2>This is the Accordion content pane</h2>
    <p>This pane can contain anything from text to images to whatever you can imagine</p>
    <p>Lorem ipsum and so on</p>
  </simplr-container>
</simplr-accordion>
```

## Properties

| Property              | Attribute             | Type      | Default           | Description                                              |
| --------------------- | --------------------- | --------- | ----------------- | -------------------------------------------------------- |
| `backgroundColor`     | `backgroundColor`     | `string`  | "#FFFFFF"         | Background color of the accordion header                 |
| `hasAccordionAbove`   | `hasAccordionAbove`   | `boolean` | false             |                                                          |
| `hasAccordionBelow`   | `hasAccordionBelow`   | `boolean` | false             |                                                          |
| `icon`                | `icon`                | `string`  | ""                | Icon shown in the header of accordion                    |
| `label`               | `label`               | `string`  | ""                | Label of the accordion                                   |
| `open`                | `open`                | `boolean` | false             | Is the accordion open?                                   |
| `openBackgroundColor` | `openBackgroundColor` | `string`  | "backgroundColor" | Backgroundcolor of the header when the accordion is open |

## Methods

| Method   | Type       |
| -------- | ---------- |
| `toggle` | `(): void` |
