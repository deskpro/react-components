Common/Count
============
Renders a number with thousandths formatting.

```jsx
<div>
    <Count value={3} />
    <Count value={3333} />
    <Count value={3333} separator="." />
</div>
```

### Props

**value={number}**  
The number to format.

**separator={string}**  
Character to use as the thousandths separator. Uses a comma by default.
