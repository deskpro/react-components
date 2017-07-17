import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/Button';
import Icon from 'Components/Icon';

storiesOf('Buttons', module)
  .add('square', () => (
    <div>
      <Button className="dp-button--square">
        <Icon name="plus" />
      </Button>&nbsp;
      <Button className="dp-button--square">
        <Icon name="search" />
      </Button>
    </div>
  )
)
;
