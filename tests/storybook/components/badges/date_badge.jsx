import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import DateBadge from 'Components/Badges/DateBadge';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('with date', () => (
    <div>
      <div>
        <DateBadge date={new Date()} />
        &nbsp;&nbsp;
        <DateBadge month="Mar" day="12" />
        &nbsp;&nbsp;
        <DateBadge month="Dec" day="25" />
      </div>
      <br />
      <div>
        <DateBadge date={new Date()} pill />
        &nbsp;&nbsp;
        <DateBadge month="Mar" day="12" pill />
        &nbsp;&nbsp;
        <DateBadge month="Dec" day="25" pill />
      </div>
    </div>
  )
)
;
