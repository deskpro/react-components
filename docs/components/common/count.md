Common/Count
============
Renders a number with thousandths formatting.

```jsx
<div>
    <Count count={3} />
    <Count count={3333} />
    <Count count={3333} separator="." />
</div>
```

### Props

**count={number}**  
The number to format.

**separator={string}**  
Character to use as the thousandths separator. Uses a comma by default.
