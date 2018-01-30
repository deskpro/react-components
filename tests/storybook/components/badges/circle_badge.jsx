import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import CircleBadge from 'Components/Badges/CircleBadge';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('as circle', () => (
    <div>
      <CircleBadge>1</CircleBadge>
      &nbsp;
      <CircleBadge type="success">2</CircleBadge>
      &nbsp;
      <CircleBadge type="info">10</CircleBadge>
      &nbsp;
      <CircleBadge type="warning" max={10}>100</CircleBadge>
      &nbsp;
      <CircleBadge type="danger" max={99}>1000</CircleBadge>
    </div>
  ));

