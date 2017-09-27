Forms/Group
===========
Groups a label and form children together.

![Group example](../../assets/images/form-group-1.png)

```jsx
<Group label="Username" htmlFor="username">
    <Input id="username" />
</Group>
```

### Props

**label={string}}**  
Value for the group label.

**htmlFor={string}**  
ID of the child the label belongs to. When omitted the component will try to discover the ID of the child input element.

**error={string}**  
Error message to display above the input element.

### CSS
Adds `dp-form-group` to the root element.

Adds `dp-form-group--has-error` to the root element when the error is set.

Adds `dp-form-group__error` to the error message container.
