import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icon';

storiesOf('Buttons', module)
  .add('round', () => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button type="round" size="small">
          <Icon name="plus" />
        </Button>&nbsp;
        <Button type="round" size="medium">
          <Icon name="plus" />
        </Button>&nbsp;
        <Button type="round" size="large">
          <Icon name="plus" />
        </Button>
      </div>
      <div>
        <Button type="round" size="small">
          <Icon name="search" />
        </Button>&nbsp;
        <Button type="round" size="medium">
          <Icon name="search" />
        </Button>&nbsp;
        <Button type="round" size="large">
          <Icon name="search" />
        </Button>
      </div>
    </div>
  )
)
;
