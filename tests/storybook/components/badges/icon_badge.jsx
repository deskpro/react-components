import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import IconBadge from 'Components/Badges/IconBadge';
import Icon from 'Components/Icon';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('with icon', () => (
    <div>
      <IconBadge icon="envelope">
        1
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon="envelope" type="success">
        12
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon={<Icon name="envelope" size="large" />} type="info">
        12
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon="envelope" type="warning" iconSize="large">
        50
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon={<Icon name="envelope" size="large" />} type="danger">
        100
      </IconBadge>
    </div>
  ));

