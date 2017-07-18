Buttons/Button
==============
Standard button.

![Button example](../../assets/images/button-1.png)

```jsx
<div>
    <Button type="primary" size="large">Button</Button>
    <Button type="secondary" size="large">Button</Button>
    <Button type="cta" size="large">Button</Button>
</div>
```

### Props

**size={string}**  
One of "large", "medium", or "small".

**type={string}**  
One of "primary", "secondary", "cta", or "square".

**disabled={bool}**  
Whether or not the button is disabled or not.

### CSS
Adds `dp-button` to the root element.

### Examples

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icon';

const App = () => (
    <div>
        <Button size="l">Button</Button>
        <Button size="m">
            <Icon name="bug" />
            Button with icon
        </Button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('mount'));
```