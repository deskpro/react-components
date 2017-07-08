Common/Portal
=============
Mounts its children in the document body.

```jsx
<Portal>
    <p>I am attached to document.body!</p>
</Portal>
```

### Props

**onUpdate={func}**  
Called when the child elements are mounted. Receives a reference to the portal as the first argument.
