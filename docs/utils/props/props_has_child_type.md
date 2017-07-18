props/propsHasChildType
=======================
Returns a boolean indicating whether the given children contains a child of the given component type.

```js
function propsHasChildType(children: array, childType: React.Component): boolean
```

### Args

**children:array**  
The children to test. Typically comes from `this.props.children`.

**childType:React.Component**  
The child type to check for.

### Returns
True when the children contains a component of the specified type, false otherwise.

### Examples

```js
import React from 'react';
import { propsHasChildType } from 'utils/props';
import { Button } from 'Components/Buttons';

const App = ({ children }) => {
    if (propsHasChildType(children, Button)) {
        return (
            <div>
                Has Button!
                {children}
            </div>
        )
    } else {
        return (
            <div>
                {children}
            </div>
        )
    }
};
```