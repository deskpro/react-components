Tabs/Tabs
=========
Renders a group of links as tabs.

![Tabs example](../../assets/images/tabs-1.png)

```jsx
<Tabs active="one">
    <TabLink name="one">
        Tab One
    </TabLink>
    <TabLink name="two">
        Tab One
    </TabLink>
    <TabLink name="three">
        Tab One
    </TabLink>
</Tabs>
```

### Props

**active={string}**  
The name of the active tab.

**onChange={func}**  
Called when the active tab changes.

**allowUnselect={bool}**  
Don't filter clicks on the same tab to allow unselecting tabs

### CSS
Adds `dp-tabs` to the root element.

### Examples

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Section from 'Components/Section';
import { Tabs, TabLink } from 'Components/Tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePane: 'one'
    };
  }

  render() {
    const { activePane } = this.state;

    return (
      <div>
        <Tabs active="one" onChange={(a) => { this.setState({ activePane: a }); }}>
          <TabLink name="one">
            Tab One
          </TabLink>
          <TabLink name="two">
            Tab One
          </TabLink>
          <TabLink name="three">
            Tab One
          </TabLink>
        </Tabs>
        <Section hidden={activePane !== 'one'}>
          Tab one!
        </Section>
        <Section hidden={activePane !== 'two'}>
          Tab two!
        </Section>
        <Section hidden={activePane !== 'three'}>
          Tab three!
        </Section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
```