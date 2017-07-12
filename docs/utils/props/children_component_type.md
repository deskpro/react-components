props/childrenComponentType
===========================
Returns a function used in propTypes to validate that children are of a specific component type.

```js
function childrenComponentType(component: React.Component): function
```

### Args

**component:React.Component**  
The expected component

### Returns
A function which React will use to validate the component children.

### Examples

```jsx
class MyComponent extends React.Component {
  static propTypes = {
    children: childrenComponentType(MyOtherComponent)
  }
}
```
