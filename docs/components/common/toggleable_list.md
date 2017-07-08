Common/ToggleableList
=====================
A higher order component which changes prop values on its children in response to events triggered by the children. The children _must_ be list items `<li>` since the component is constructed from an unordered list `<ul>`.

```jsx
<ToggleableList on="click" toggle="selected">
    <li>Item one</li>
    <li>Item two</li>
</ToggleableList>
```

### Props

**on={string}**  
The event to listen for. Supports the [standard React events](https://facebook.github.io/react/docs/events.html#supported-events).

**toggle={string}**  
Name of the property on the children which will receive a true or false value.

**whenType={Component}**  
Only handle child elements of this component type.

### Events
The component creates an event handler for the watched event, and passes it as a property to each child. So when `on="click"`, the props passed to each child will contain an `onClick` function. The child must bind the handler to itself or one of it's children. Which may be done a few ways.

Simply expand the props on the element.

```jsx
const Item = (props) => {
  return (
    <ListElement {...props}>
      {props.children}
    </ListElement>
  )
};

<ToggleableList on="click" toggle="selected">
    <Item />
</ToggleableList>
```

Expand the property arguments, and set the `onClick` handler manually.

```jsx
const Item = ({onClick, children}) => {
  return (
    <ListElement onClick={onClick}>
      {children}
    </ListElement>
  )
};

<ToggleableList on="click" toggle="selected">
    <Item />
</ToggleableList>
```

Bind the `onClick` handler to a child element.

```jsx
const Item = ({onClick, children}) => {
  return (
    <ListElement>
      <h3 onClick={onClick}>Heading</h3>
      {children}
    </ListElement>
  )
};

<ToggleableList on="click" toggle="selected">
    <Item />
</ToggleableList>
```

The list items must manually call the handler when the component is watching the same event.

```jsx
class Item extends React.Component {
    handleClick = (e) => {
        // Ensure the onClick handler passed to the component by
        // ToggleableList gets called.
        this.props.onClick(e);
    }

    render() {
        return (
            <ListElement onClick={this.handleClick}>
              {children}
            </ListElement>
        )
    }
}

<ToggleableList on="click" toggle="selected">
    <Item />
</ToggleableList>
```


### Examples

The following example creates a common accordion, which contains one or more drawers which may be opened or closed, and only one drawer may be open at any one time.

```jsx
import React from 'react';
import { render } from 'react-dom';
import { ToggleableList, ListElement } from 'Components/Common';

/**
 * A drawer can be opened or closed. The drawer opens when its heading
 * is clicked. The ToggleableList component passes an onClick handler
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
 * Uses a ToggleableList to listen for the "click" event on its
 * children. When triggered, the "opened" property on each child is
 * passed boolean false, except for the child that triggered the
 * event.
 */
const Accordion = () => (
    <ToggleableList on="click" toggle="opened" whenType={Drawer}>
        <Drawer heading="Drawer 1">One</Drawer>
        <Drawer heading="Drawer 2">Two</Drawer>
        <Drawer heading="Drawer 3">Three</Drawer>
    </ToggleableList>
);

render(<Accordion />, document.getElementById('mount'));
```
