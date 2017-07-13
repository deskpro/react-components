props/childrenRecursiveMap
==========================
Calls React.Children.map() recursively on the given children.

```js
function childrenRecursiveMap(children: array, cb: function): array
```

### Args

**children:array**  
The child objects to recurse over.

**cb:function**  
Called for each child.

### Returns
The children with the callback applied to each one.

### Examples

```jsx
import ReactDOMServer from 'react-dom/server'
import { childrenRecursiveMap } from 'utils/props';

const children = (
    <i>
        <p>foo bar</p>
    </i>
);
const mapped = props.childrenRecursiveMap(children, (child) => {
    if (typeof child === 'string') {
        return child.toUpperCase();
    }
    return child;
});

// Outputs:
// <div><i><p>FOO BAR</p></i></div>
console.log(ReactDOMServer.renderToStaticMarkup(
    <div>{mapped}</div>
));
```