noop
====
Provides an empty function to use as a default callback.

```js
function noop()
```

### Examples

```jsx
import React from 'react';
import noop from 'utils/noop';

class App extends React.Component {
    static defaultProps = {
        onClick:  noop,
        onChange: noop
    }
}
```
