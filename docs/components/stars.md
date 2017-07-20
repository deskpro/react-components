Stars
=====
Renders a group of star icons which represent a vote between 1 and 5.

![Stars example](../assets/images/stars-1.png)

```jsx
<Stars value={3} onClick={(vote) => { console.log(vote); }} />
```

### Props

**value={number}**  
A number between 1 and 5. Fractions may be used in 0.5 increments, e.g. 1, 1.5, 2, 2.5, etc.

**onClick={func}**  
Called when a star is clicked and receives a star value between 1 and 5.

### CSS
Adds `dp-stars` to the root element.

