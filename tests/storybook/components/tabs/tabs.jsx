import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs, TabLink } from 'Components/Tabs';
import Pane from 'Components/Pane';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'one'
    };
  }

  render() {
    const { active } = this.state;

    return (
      <div style={{ width: 400 }}>
        <Tabs active="one" onChange={(a) => { this.setState({ active: a }); }}>
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
        <Pane hidden={active !== 'one'}>
          Tab one!
        </Pane>
        <Pane hidden={active !== 'two'}>
          Tab two!
        </Pane>
        <Pane hidden={active !== 'three'}>
          Tab three!
        </Pane>
      </div>
    );
  }
}

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('Tabs', () => <Story />
)
;
