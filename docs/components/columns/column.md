Columns/Column
==============
A navigation column containing expandable drawers. Semantically the column is an unordered list `<ul>` containing one or more list items `<li>`. Where each list item represents a "drawer" which may be opened or closed.

Columns contain a heading (title) with icon, and may operate in accordion mode where only one drawer may be open at once, or normal mode where multiple drawers may be open at once.

```jsx
<div>
  <Column
      heading="Column Heading"
      icon="bug"
    />
  <Column
      heading="Column Heading"
      icon={<Icon name="bug" />}
    />
  <Column
      heading="Column Heading"
      accordion={true}
      icon="bug"
    />
</div>
```

### Props

*heading={string}*  
The heading text.

*icon={string|element}*  
Icon element to display in the header. Either the name of an icon, or an `Icon` component.

*accordion={bool}*  
When true only one drawer may be open at one time. Other drawers will close when one is opened.

*role={bool}*  
The aria role.

### Examples

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
      <DrawerItem icon="star" count={44}>
        Item three
      </DrawerItem>
    </Drawer>
  </Column>
);

render(<App />, document.getElementById('mount'));
```
