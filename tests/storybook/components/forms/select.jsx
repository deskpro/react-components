import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Label, Select } from 'Components/Forms';

const basicOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'Select',
    withInfo('This is the select and its variation.')(
      () => (
        <div>
          <h3>Selects</h3>
          <Label>Basic</Label>
          <Select
            name="select-1"
            onChange={action('Select change')}
            options={basicOptions}
            disabled={boolean('Disabled', false)}
          /><br />
          <Label>Basic with Icon</Label>
          <Select
            icon="search"
            name="select-2"
            onChange={action('Select change')}
            options={basicOptions}
            disabled={boolean('Disabled', false)}
          />
        </div>
      )
    )
  );

