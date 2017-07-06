Common/QueryableList
====================
A unordered list which can be filtered and reduced by query values.

```jsx
<QueryableList whereName="agent">
    <ListElement name="agent">
        Agent one
    </ListElement>
    <ListElement name="agent">
        Agent two
    </ListElement>
    <ListElement name="department">
        Department one
    </ListElement>
    <ListElement name="department">
        Department two
    </ListElement>
</QueryableList>
```

### Props

**whereName={string}**  
Filter list elements by name. When set to "@all" the entire list is displayed, and when the entire list is hidden when set to "@none".