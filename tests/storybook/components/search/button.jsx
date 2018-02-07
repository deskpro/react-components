import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
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
  .add(
    'Button',
    withInfo('SearchButton component usage.')(
      () => (
        <Story />
      )
    )
  );

