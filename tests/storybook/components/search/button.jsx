import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { SearchButton } from 'Components/Forms';

const results = [
  'Android feedback',
  'Customer service feedback',
  'E-commerce feedback',
  'Feedback (Sales)',
  'Feedback (Support)'
];

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:   '',
      results: []
    };
  }

  handleChange = (value) => {
    if (value.length > 0) {
      this.setState({ value, results });
    } else {
      this.setState({ value, results: [] });
    }
  };

  render() {
    return (
      <SearchButton
        placeholder="Search..."
        value={this.state.value}
        onChange={this.handleChange}
        results={this.state.results}
        onSelect={action('onSelect')}
      />
    );
  }
}

storiesOf('Search', module)
  .addWithInfo(
  'Button',
  'SearchButton component usage.',
  () => <Story />
)
;
