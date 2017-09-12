import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs, TabLink } from 'Components/Tabs';
import Section from 'Components/Section';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'one'
    };
  }

  handleChange = (active) => {
    action('handleChange');
    this.setState({ active });
  };

  render() {
    const { active } = this.state;

    return (
      <div style={{ width: 400 }}>
        <Tabs active={active} onChange={this.handleChange}>
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
        <Section hidden={active !== 'one'}>
          Tab one!
        </Section>
        <Section hidden={active !== 'two'}>
          Tab two!
        </Section>
        <Section hidden={active !== 'three'}>
          Tab three!
        </Section>
      </div>
    );
  }
}

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('Tabs', () => <Story />
)
;
