import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Label, SearchInline } from 'Components/Forms';

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
      <div>
        <Label>SEARCH EXAMPLE</Label>
        <SearchInline
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search..."
          results={this.state.results}
        />
      </div>
    );
  }
}

storiesOf('Search', module)
  .addWithInfo(
  'Inline',
  'SearchInline component usage.',
  () => (
    <div>
      <Story />
      <div style={{ marginTop: 10 }}>
        <Label>FOO</Label>
        <Input />
      </div>
    </div>
  )
)
;
