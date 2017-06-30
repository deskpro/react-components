Common/Portal
=============
Mounts its children in the document body.

Example:
```jsx
import React from 'react';
import { render } from 'react-dom';
import Portal from 'Components/Common/Portal';

render(
    <Portal>
        <p>I am attached to document.body!</p>
    </Portal>
    , document.getElementById('mount')
)
```
