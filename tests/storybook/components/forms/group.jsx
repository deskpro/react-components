import React from 'react';
import { storiesOf } from '@storybook/react';
import { Group, Input } from 'Components/Forms';

storiesOf('Forms', module)
  .add('Group', () => (
    <div style={{ margin: 10 }}>
      <Group label="Username" htmlFor="test-username">
        <Input id="test-username" />
      </Group>
    </div>
  )
)
;

