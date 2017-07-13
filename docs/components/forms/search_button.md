Forms/SearchButton
==================
Renders a button which opens a search form.

![Search button example](../../assets/images/search-button-1.png)

```jsx
<SearchButton
    placeholder="Search..."
    emptyPlaceholder="Type to search."
    value={this.state.value}
    onSelect={this.handleSelect}
    results={this.state.results}
>
    <p>No results found</p>
</SearchButton>
```

### Props

**results={array}**  
List of search results.

**emptyPlaceholder={string}**  
Displayed in the drop down before a value is entered.

**closeOnClickOutside={bool}**  
Close the search box when the user clicks outside of it.

**onSelect={function}**  
Called when a search result is clicked. Receives the result value and index as arguments.

See also `Forms/Input` for more props.

### CSS
Adds `dp-search-button` to the root element.
