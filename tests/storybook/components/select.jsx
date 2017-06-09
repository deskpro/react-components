import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Label from 'Components/InputLabel';
import Select from 'Components/Select';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Select',
    'This is the select and its variation.',
    () => (
      <div>
        <h3>Selects</h3>
        <Label>Basic</Label>
        <Select
          options={
          [
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
          ]
          }
        /><br />
        <Label>Multi</Label>
        <Select
          multi
          options={
          [
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
          ]
          }
        /><br />
      </div>
    ),
  )
;
