import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/Button';
import Icon from 'Components/Icon';

storiesOf('Buttons', module)
  .add('with icon', () => (
    <div>
      <Button className="dp-button--icon">
        <Icon name="plus" />
      </Button>&nbsp;
      <Button className="dp-button--icon">
        <Icon name="search" />
      </Button>
    </div>
  )
)
;
