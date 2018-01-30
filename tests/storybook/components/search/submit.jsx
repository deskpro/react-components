import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Label, SearchSubmit } from 'Components/Forms';

import avatarImage1 from '../../static/avatar-1.jpg';
import avatarImage2 from '../../static/avatar-2.jpg';
import avatarImage3 from '../../static/avatar-3.jpg';
import avatarImage4 from '../../static/avatar-4.jpg';

const results = [
  `
    <strong style="display:block">SSO Cross Browser test</strong>
    <small style="display:block;color:grey;">in <strong>Backlog</strong> on <strong>Browser Issues</strong></small>
    <div style="padding-top:4px;">
      <img class="dp-avatar" src="${avatarImage1}" style="width:14px" />
      <img class="dp-avatar" src="${avatarImage2}" style="width:14px" />
      <img class="dp-avatar" src="${avatarImage3}" style="width:14px" />
    </div>
  `,
  `
    <strong style="display:block">Bug in Chrome</strong>
    <small style="display:block;color:grey;">in <strong>Unresolved</strong> on <strong>Security</strong></small>
    <div style="padding-top:4px;">
      <img class="dp-avatar" src="${avatarImage4}" style="width:14px" />
    </div>
  `,
  `
    <strong style="display:block">SSO Issue</strong>
    <small style="display:block;color:grey;">in <strong>Backlog</strong> on <strong>Browser Issues</strong></small>
    <div style="padding-top:4px;">
      <img class="dp-avatar" src="${avatarImage2}" style="width:14px" />
    </div>
  `,
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
    this.setState({ value });
    if (value === '') {
      this.setState({ results: [] });
    }
  };

  handleSubmit = (value) => {
    this.setState({ results: value ? results : [] });
  };

  render() {
    return (
      <div>
        <Label>SEARCH EXAMPLE</Label>
        <SearchSubmit
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          placeholder="Search..."
          results={this.state.results}
        />
      </div>
    );
  }
}

storiesOf('Search', module)
  .addWithInfo(
    'Submit',
    'SearchSubmit component usage.',
    () => (
      <div>
        <Story />
        <div style={{ marginTop: 10 }}>
          <Label>FOO</Label>
          <Input />
        </div>
      </div>
    )
  );

