import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Count from '../../../src/Components/Common/Count';

storiesOf('Common', module)
  .add('Count', () => (
    <div>
      <Count count={3} />
      <Count count={3333} />
      <Count count={3333} separator="." />
    </div>
  )
)
;
