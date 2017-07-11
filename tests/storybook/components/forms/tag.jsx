import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tag, TagInput } from 'Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Tag',
    'A tag to qualify an element.',
    () => (
      <div>
        <h3>Tags</h3>
        <Tag>Custom work</Tag>
        <Tag>Report back on bug fix</Tag>
        <Tag>VIP</Tag>
        <br />
        <br />
        <h3>Tag input</h3>
        <TagInput tags={['Tag 1', 'Tag 2', 'Tag 3']} />
        <br />
      </div>
    )
  )
;
