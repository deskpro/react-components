Forms/SearchButton
==================
Renders a button which opens a search form.

![Search button example](../../assets/images/search-button-1.png)

```jsx
<SearchButton
    placeholder="Search..."
    value={this.state.value}
    onSelect={this.handleSelect}
    results={this.state.results}
/>
```

### Props

**results={array}**  
List of search results.

**closeOnClickOutside={bool}**  
Close the search box when the user clicks outside of it.

**onSelect={function}**  
Called when a search result is clicked. Receives the result value and index as arguments.

See also `Forms/Input` for more props.

### CSS
Adds `dp-search-button` to the root element.
