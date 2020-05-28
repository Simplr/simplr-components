# Simplr Date Input

### Usage

##### Import

```js
import '@simplr-wc/date-input';
```

##### Use

```html
<simplr-date-input label="Label" icon="cancel"></simplr-date-input>
```

# simplr-date-input

## Properties

| Property                | Attribute               | Type      | Default         |
| ----------------------- | ----------------------- | --------- | --------------- |
| `allowInput`            | `allowInput`            | `boolean` | false           |
| `altFormat`             | `altFormat`             | `string`  | "F j, Y"        |
| `altInput`              | `altInput`              | `boolean` | false           |
| `ariaDateFormat`        | `ariaDateFormat`        | `string`  | "F j, Y"        |
| `clickOpens`            | `clickOpens`            | `boolean` | true            |
| `dateFormat`            | `dateFormat`            | `string`  | "d.m.Y"         |
| `defaultHour`           | `defaultHour`           | `number`  | 12              |
| `defaultMinute`         | `defaultMinute`         | `number`  | 0               |
| `disable`               | `disable`               | `array`   | []              |
| `disableMobile`         | `disableMobile`         | `boolean` | false           |
| `enable`                | `enable`                | `array`   | []              |
| `enableSeconds`         | `enableSeconds`         | `boolean` | false           |
| `enableTime`            | `enableTime`            | `boolean` | false           |
| `flatPickrInstance`     | `flatPickrInstance`     | `object`  | null            |
| `formatDateFn`          | `formatDateFn`          |           |                 |
| `hourIncrement`         |                         | `number`  | 1               |
| `hoursIncrement`        | `hoursIncrement`        | `number`  |                 |
| `inline`                | `inline`                | `boolean` | false           |
| `maxDate`               | `maxDate`               | `string`  |                 |
| `minDate`               | `minDate`               | `string`  |                 |
| `minuteIncrement`       | `minuteIncrement`       | `number`  | 5               |
| `mode`                  | `mode`                  | `string`  | "single"        |
| `nextArrow`             | `nextArrow`             | `string`  | ">"             |
| `noCalendar`            | `noCalendar`            | `boolean` | false           |
| `onChange`              | `onChange`              |           |                 |
| `onClose`               | `onClose`               |           |                 |
| `onMonthChange`         | `onMonthChange`         |           |                 |
| `onOpen`                | `onOpen`                |           |                 |
| `onReady`               | `onReady`               |           |                 |
| `onValueUpdate`         | `onValueUpdate`         |           |                 |
| `onYearChange`          | `onYearChange`          |           |                 |
| `parseDateFn`           | `parseDateFn`           |           |                 |
| `position`              | `position`              | `string`  | "auto"          |
| `prevArrow`             | `prevArrow`             | `string`  | "<"             |
| `shorthandCurrentMonth` | `shorthandCurrentMonth` | `boolean` | false           |
| `showMonths`            | `showMonths`            | `number`  | 1               |
| `static`                | `static`                | `boolean` | false           |
| `theme`                 | `theme`                 | `string`  | "material_blue" |
| `time_24hr`             | `time_24hr`             | `boolean` | true            |
| `value`                 |                         | `string`  | ""              |
| `weekNumbers`           | `weekNumbers`           | `boolean` | false           |
| `wrap`                  | `wrap`                  | `boolean` | false           |

## Methods

| Method                 | Type                                                     |
| ---------------------- | -------------------------------------------------------- |
| `changeMonth`          | `(monthNum: any, isOffset: any): void`                   |
| `clear`                | `(): void`                                               |
| `close`                | `(): void`                                               |
| `destroy`              | `(): void`                                               |
| `formatDate`           | `(dateObj: any, formatStr: any): any`                    |
| `getCurrentMonth`      | `(): any`                                                |
| `getCurrentYear`       | `(): any`                                                |
| `getFlatpickrInstance` | `(): any`                                                |
| `getSelectedDates`     | `(): any`                                                |
| `getValue`             | `(): any`                                                |
| `jumpToDate`           | `(date: any, triggerChange: any): void`                  |
| `open`                 | `(): void`                                               |
| `parseDate`            | `(dateStr: any, dateFormat: any): any`                   |
| `redraw`               | `(): void`                                               |
| `set`                  | `(option: any, value: any): void`                        |
| `setDate`              | `(date: any, triggerChange: any, dateFormat: any): void` |
| `setValue`             | `(value: any): void`                                     |
| `toggle`               | `(): void`                                               |
