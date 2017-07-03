Columns/Drawer
==============
An expandable drawer within a navigation column.

```jsx
  <Drawer heading="Drawer Heading 1" subheading="Subheading 1">
    <List>
      <ListElement>
        Agents
      </ListElement>
    </List>
  </Drawer>
  <Drawer heading="Drawer Heading 2" opened={false}>
    <List>
      <ListElement>
        <img src="/images/logo.png" />
      </ListElement>
    </List>
  </Drawer>
```

### Props

**heading={string}**  
The heading text.

**subheading={string}**  
The subheading text.

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
import { Column, Drawer } from 'Components/Columns';

const App = () => (
  <Column heading="Column Heading" icon="envelope-o">
    <Drawer heading="Drawer Heading 1">
      <List>
        <ListElement>
          Agents
        </ListElement>
      </List>
    </Drawer>
    <Drawer heading="Drawer Heading 2" opened={false}>
      <List>
        <ListElement>
          <img src="/images/logo.png" />
        </ListElement>
      </List>
    </Drawer>
  </Column>
);

render(<App />, document.getElementById('mount');
```
