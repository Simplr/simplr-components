```js script
import { html } from 'lit-html';
import "../lib/data-table/data-table.js"


export default {
  title: 'Data table',
};
```

### Default data table

```js preview-story
const tableOptions = { 
    isRowSelectable: true,
    tableClass: "my-data-table"
};

const tableColumns = ["First name", "Last name", "Gender"];

const tableData = [
    {id: 1, data: ["Bob", "The Builder", "Male"]},
    {id: 2, data: ["Joe", "Exotic", "Tiger King"]}
];

export const defaultDataTable = () => html`
    <simplr-data-table
        @rowClick=${e => console.log(e)}
        tableLabel="My data table"
        .tableOptions=${tableOptions}
        .tableColumns=${tableColumns}
        .tableData=${tableData}
    ></simplr-data-table>
`
```
