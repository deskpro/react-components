import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Datepicker } from 'Components/Forms';

storiesOf('Forms', module)
  .add(
  'Datepicker',
  () => (
    <div>
      <Datepicker onChange={action('onChange')} onSelect={action('onSelect')} />
      <Datepicker onChange={action('onChange')} onSelect={action('onSelect')} value="01/01/2018" />
    </div>
  )
)
;
