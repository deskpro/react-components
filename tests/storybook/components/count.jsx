import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Count from '../../../src/Components/Common/Count';

storiesOf('Common', module)
  .add('Count', () => (
    <div>
      <Count value={3} />
      <Count value={3333} />
      <Count value={3333} separator="." />
    </div>
  )
)
;
