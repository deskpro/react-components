import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs, TabLink } from 'Components/Tabs';
import Pane from 'Components/Pane';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'one'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(a) {
    action('onChange');
    this.setState({ active: a });
  }

  render() {
    const { active } = this.state;

    return (
      <div style={{ width: 400 }}>
        <Tabs active={active} onChange={this.onChange}>
          <TabLink name="one">
            Tab One
          </TabLink>
          <TabLink name="two">
            Tab Two
          </TabLink>
          <TabLink name="three">
            Tab Three
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
