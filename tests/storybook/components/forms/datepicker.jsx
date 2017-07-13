import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, Label, Datepicker } from 'Components/Forms';

storiesOf('Forms', module)
  .add(
  'Datepicker',
  () => (
    <form>
      <Datepicker
        onSelect={(date) => {
          console.info(date.toString());
          action(date.toString());
        }}
      />
    </form>
  )
)
;
