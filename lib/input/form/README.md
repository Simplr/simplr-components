# Simplr Form

### Usage

```js
import '@simplr-wc/form';

document.querySelector('#my-form').getValue();
// {name: "Foo Bar", age: 23, sex: "Other"}
```

```html
<simplr-form id="my-form" @submit=${(e) => console.log("submit", e.detail.formData)}>
    <simplr-text-input label="Name" value="Foo Bar" outlined name="name"></simplr-text-input>
    <simplr-number-input label="Name" value="23" outlined name="age"></simplr-number-input>
    <simplr-select
        label="Sex"
        name="sex"
        .options=${[
            {value: "Male", label: "Male"},
            {value: "Woman", label: "Woman"},
            {value: "Other", label: "Other"}
        ]}
        selectedValue="Other"
        outlined
    ></simplr-select>
    <simplr-button @click=${() => document.querySelector("#my-form").submit()} primary raised label="Submit" icon="save" type="submit"></simplr-button>
</simplr-form>
```

### Events

| Name     | Content                                                        |
| -------- | -------------------------------------------------------------- |
| `submit` | Form Data inside the event Detail object (`e.detail.formData`) |
