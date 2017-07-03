Columns/DrawerItem
==================
Standard drawer item which may contain an icon and number.

```jsx
<div>
  <DrawerItem>
    Item one
  </DrawerItem>
  <DrawerItem count={66}>
    Item two
  </DrawerItem>
  <DrawerItem icon="star">
    Item three
  </DrawerItem>
  <DrawerItem icon={<Icon name="star" />} count={44}>
    Item four
  </DrawerItem>
</div>
```

### Props

*count={number}*  
Number value to display inside the item.

*icon={string|element}*  
An icon to display, either the name of an icon, or an `Icon` component.

*selected={bool}*  
Indicates whether the item is selected.

*onClick={func}*  
Called when the item is clicked.

### Examples

Column with drawers and drawer items.

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Column, Drawer, DrawerItem } from 'Components/Columns';

const App = () => (
  <Column heading="Column Heading" icon="envelope-o">
    <Drawer heading="Drawer Heading 1">
      <DrawerItem>
        Item one
      </DrawerItem>
      <DrawerItem count={66}>
        Item two
      </DrawerItem>
      <DrawerItem icon={<Icon name="star" style={{color: "#54c66a"}} />}>
        Item three
      </DrawerItem>
      <DrawerItem icon="star" count={44}>
        Item four
      </DrawerItem>
    </Drawer>
  </Column>
);

render(<App />, document.getElementById('mount');
```
