Common/ListToggleable
=====================
A higher order component which changes prop values on its children by responding to events triggered by the children.

The following example creates a standard accordion, which contains one or more drawers which may be opened or closed, and only one drawer may be open at any one time.

```jsx
import React from 'react';
import { render } from 'react-dom';
import { ListToggleable, ListElement } from 'Components/Common';

/**
 * A drawer can be opened or closed. The drawer opens when its heading
 * is clicked. The ListToggleable component passes an onClick handler
 * which is attached to the heading. Clicking on the heading triggers
 * the other drawers to close.
 */
const Drawer = ({onClick, heading, opened, children}) => (
    <ListElement>
      <h3 onClick={onClick}>
        {heading}
      </h3>
      <div style={{display: opened ? "block" : "none"}}>
        {children}
      </div>
    </ListElement>
);

/**
 * A list of drawers where only one drawer may be open at once.
 * Uses a ListToggleable to listen for the "click" event on its
 * children. When triggered, the "opened" property on each child is
 * passed boolean false, except for the child that triggered the
 * event.
 */
const Accordion = () => (
    <ListToggleable on="click" toggle="opened">
        <Drawer heading="Drawer 1">One</Drawer>
        <Drawer heading="Drawer 2">Two</Drawer>
        <Drawer heading="Drawer 3">Three</Drawer>
    </ListToggleable>
);

render(<Accordion />, document.getElementById('mount'));
```

#### Properties

`on` - The event to listen for. Supports the [standard React events](https://facebook.github.io/react/docs/events.html#supported-events).

`toggle` - Name of the property on the children which will receive a true or false value.
