Forms/SearchSubmit
==================
Renders a search input with submit button, where search results are displayed in a popper below the input.

![Search submit example](../../assets/images/search-submit-1.png)

```jsx
<div>
    <Label>SEARCH EXAMPLE</Label>
    <SearchSubmit
        placeholder="Search..."
        value={this.state.value}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        results={this.state.results}
    />
</div>
```

_Note: The results must be an array, and each value in the results **is allowed** to contain HTML._

### Props

**results={array}**  
List of search results.

**onSubmit={function}**  
Called when the search form is submitted.

See also `Forms/Input` for more props.

### CSS
Adds `dp-search-submit` to the root container.
