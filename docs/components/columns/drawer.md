Columns/Drawer
==============
An expandable drawer within a navigation column.

```jsx
<DrawerList>
  <Drawer>
    <Heading>
      My Stars
    </Heading>
    <ItemList>
      <Item>
        Bug
      </Item>
      <Item>
        Green
      </Item>
      <Item>
        Yellow
      </Item>
    </ItemList>
  </Drawer>
</DrawerList>
```

### Props

**count={number}**  
Number value to display inside the item.

**opened={bool}**  
When true the drawer will render opened.

**role={string}**  
The aria role.

**onChange={func}**  
Called when the drawer is opened or closed.


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

const styles = {
  column: {
    backgroundColor: "#F4F5F5",
    border: "1px solid #d4d7d8"
  },
  image: {
    margin: "0 12px"
  },
  button: {
    margin: "0 12px",
    padding: "10px",
    background: "#368ddb",
    color: "rgba(255,255,255,.9)",
    borderRadius: "2px",
    border: "0"
  }
};

const App = () => (
  <Column style={styles.column}>
    <DrawerList>
      <Drawer>
        <Heading>
          Awaiting Agent
        </Heading>
        <img
          src="https://deskpro.com/assets/build/img/deskpro/logo.png"
          style={styles.image}
          />
      </Drawer>
      <Drawer>
        <Heading>
          Saved Searches
        </Heading>
        <button style={styles.button}>
          Start your free trail now
        </button>
      </Drawer>
    </DrawerList>
  </Column>
);

render(<App />, document.getElementById('mount');
```

![Column example](../../assets/images/column-4.png)
