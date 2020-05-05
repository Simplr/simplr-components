# Simplr Data Table

### Usage

##### Import
```js
import '@simplr-wc/data-table';
```

##### Use
```html
<simplr-data-table></simplr-data-table>
```

## Properties

| Property           | Attribute          | Type      | Default                                          | Description                              |
|--------------------|--------------------|-----------|--------------------------------------------------|------------------------------------------|
| `loading`          | `loading`          | `boolean` | false                                            | Is the data-table still loading          |
| `noResultsMessage` | `noResultsMessage` | `string`  | ""                                               | Message shown when no results were found |
| `pageCount`        | `pageCount`        | `number`  | 1                                                | Count of pages in table                  |
| `resultsPerPage`   | `resultsPerPage`   | `number`  | 20                                               | Number of results to display per page    |
| `tableColumns`     | `tableColumns`     | `array`   | []                                               | Column names of data table               |
| `tableData`        | `tableData`        | `array`   | []                                               | Data of data table                       |
| `tableLabel`       | `tableLabel`       | `string`  | ""                                               | Label of the data table                  |
| `tableOptions`     | `tableOptions`     | `object`  | {"isRowSelectable":false,"tableClass":"simplr-table","highlightFirstRowOnMobile":true} | Options of data table                    |
| `tablePage`        | `tablePage`        | `number`  | 1                                                | Current page of data table               |

## Events

| Event      |
|------------|
| `rowClick` |
