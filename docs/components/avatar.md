Avatar
====
Renders an avatar image.

```jsx
<Avatar src="/images/avatars/1.jpg" />
```

### Props

**src={string}**  
URI for the avatar image.

### Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import Avatar from 'Components/Avatar';

const App = ({spin}) => (
    <div>
        <Avatar src="/images/avatars/1.jpg" />
    </div>
);

render(<App />, document.getElementById('mount'));
```
