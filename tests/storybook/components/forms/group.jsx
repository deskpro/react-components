import React from 'react';
import { storiesOf } from '@storybook/react';
import { Group, Input } from 'Components/Forms';

storiesOf('Forms', module)
  .add('Group', () => (
    <div style={{ margin: 10 }}>
      <Group label="Username">
        <Input id="test-username" />
      </Group>
      <Group label="Email" error="Value is required.">
        <Input id="test-email" />
      </Group>
    </div>
  )
)
;
