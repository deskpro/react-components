import React from 'react';
import { storiesOf } from '@storybook/react';
import Count from 'Components/Common/Count';

storiesOf('Common', module)
  .add('Count', () => (
    <div>
      <Count>3</Count><br />
      <Count>3333</Count><br />
      <Count separator=".">3333</Count>
    </div>
  )
)
;
