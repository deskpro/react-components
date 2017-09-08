Loader
======
Renders an animated loader image.

![Avatar example](../assets/images/loader-1.png)

```jsx
<div>
    <Loader size="xsmall" />
    <Loader size="small" />
    <Loader size="medium" />
    <Loader size="large" />
    <Loader size="xlarge" />
</div>
```

### Props

**size={string}**  
Controls the size of the loader. One of "xsmall", "small", "medium", "large", or "xlarge".


### CSS
Adds `dp-loader` to the root element.

Adds `dp-loader--${size}` where `${size}` is the abbreviated value of the `size` prop.


### Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import Loader from 'Components/Loader';

const App = () => (
    <div>
        <Loader size="large" />
    </div>
);

render(<App />, document.getElementById('mount'));
```
