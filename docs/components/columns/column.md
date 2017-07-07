Columns/Column
==============
A navigation column containing expandable drawers. Semantically the column is an unordered list `<ul>` containing one or more list items `<li>`. Where each list item represents a "drawer" which may be opened or closed.

![Column example](../../assets/images/column-1.png)

```jsx
<Column>
  <Heading>
    <Icon name="envelope"/>
    Tickets
  </Heading>
  <DrawerList>
    <Drawer>
      <Heading>
        My Stars
      </Heading>
      <ItemList>
        <Item count={1}>
          Bug
        </Item>
        <Item count={0}>
          Green
        </Item>
        <Item count={3}>
          Yellow
        </Item>
      </ItemList>
    </Drawer>
  </DrawerList>
</Column>
```

### Props

**role={bool}**  
The aria role.

### CSS
Adds `dp-column` class to the column container.

### Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import {
  Column,
  Heading,
  DrawerList,
  Drawer,
  ItemList,
  Item
} from 'Components/Columns';

const App = () => (
  <Column>
    <Heading>
      <Icon name="envelope"/>
      Tickets
    </Heading>
    <DrawerList>
      <Drawer>
        <Heading>
          My Stars
        </Heading>
        <ItemList>
          <Item count={1}>
            <Icon name="star" style={styles.iconBlue} />
            Bug
          </Item>
          <Item count={0}>
            <Icon name="star" style={styles.iconGreen} />
            Green
          </Item>
          <Item count={3}>
            <Icon name="star" style={styles.iconYellow} />
            Yellow
          </Item>
        </ItemList>
      </Drawer>
    </DrawerList>
  </Column>
);

render(<App />, document.getElementById('mount'));
```
