Common/SelectableList
=====================
An unordered list that can be scrolled through using arrow keys.

```jsx
<SelectableList onSelect={this.handleSelect}>
    <ListElement>Android feedback</ListElement>
    <ListElement>Customer service feedback</ListElement>
    <ListElement>E-commerce feedback</ListElement>
    <ListElement>Feedback (Sales)</ListElement>
    <ListElement>Feedback (Support)</ListElement>
</SelectableList>
```

### Props

**onSelect={function}**  
Called when an item in the list is selected. Receives the index of the selected item.


### CSS
Adds `dp-selectable-list` to the root element.
