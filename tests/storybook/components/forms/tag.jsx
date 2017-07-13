import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tag, TagSet } from 'Components/Forms';

const availableTags = [
  'Agents',
  'DeskPRO Cloud',
  'Docs',
  'Features',
  'Feedback',
  'General'
];

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Agents', 'Docs', 'Feedback'],
    };
  }

  handleChange = (tags) => {
    this.setState({ tags });
  };

  render() {
    const { tags } = this.state;

    return (
      <div>
        <div>
          <h3>Tags</h3>
          <Tag>Custom work</Tag>
          <Tag>Report back on bug fix</Tag>
          <Tag>VIP</Tag>
        </div>
        <div>
          <TagSet tags={tags} onChange={this.handleChange} options={availableTags} />
        </div>
      </div>
    );
  }
}

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Tag',
    'A tag to qualify an element.',
    () => <Story />
  )
;
