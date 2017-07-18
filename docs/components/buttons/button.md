Buttons/Button
==============
Standard button.

![Button example](../../assets/images/button-1.png)

```jsx
<div>
    <Button className="dp-button--primary">Button</Button>
    <Button className="dp-button--secondary">Button</Button>
    <Button className="dp-button--cta">Button</Button>
</div>
```

### Props

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
        <Button>Button</Button>
        <Button>
            <Icon name="bug" />
            Button with icon
        </Button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('mount'));
```