Avatar
======
Renders an avatar image.

![Avatar example](../assets/images/avatar-1.png)

```jsx
<div>
    <Avatar src="/images/avatars/1.jpg" size="small" />
    <Avatar src="/images/avatars/2.jpg" size="medium" />
    <Avatar src="/images/avatars/3.jpg" size="large" />
    <Avatar src="/images/avatars/4.jpg" size="xlarge" />
</div>
```

### Props

**src={string}**  
URI for the avatar image.

**size={string}**  
Controls the size of the avatar. One of "small", "medium", "large", or "xlarge".


### CSS
Adds `dp-avatar` to the root element.

Adds `dp-avatar--${size}` where `${size}` is the value of the `size` prop.


### Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import Avatar from 'Components/Avatar';

const App = () => (
    <div>
        <Avatar src="/images/avatars/1.jpg" />
    </div>
);

render(<App />, document.getElementById('mount'));
```
