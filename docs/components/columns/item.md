Columns/Item
==================
Standard drawer item which may contain an icon and number.

```jsx
<div>
  <Item>
    Item one
  </Item>
  <Item count={66}>
    Item two
  </Item>
  <Item icon="star">
    Item three
  </Item>
  <Item icon={<Icon name="star" />} count={44}>
    Item four
  </Item>
</div>
```

### Props

**count={number}**  
Number value to display inside the item.

**icon={string|element}**  
An icon to display, either the name of an icon, or an `Icon` component.

**selected={bool}**  
Indicates whether the item is selected.

**onClick={func}**  
Called when the item is clicked.

### Examples

Column with drawers and drawer items.

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Column, Drawer, Item } from 'Components/Columns';

const App = () => (
  <Column heading="Column Heading" icon="envelope-o">
    <Drawer heading="Drawer Heading 1">
      <Item>
        Item one
      </Item>
      <Item count={66}>
        Item two
      </Item>
      <Item icon={<Icon name="star" style={{color: "#54c66a"}} />}>
        Item three
      </Item>
      <Item icon="star" count={44}>
        Item four
      </Item>
    </Drawer>
  </Column>
);

render(<App />, document.getElementById('mount');
```
