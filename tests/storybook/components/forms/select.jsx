import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Label, Select } from '../../../../src/Components/Forms';

const basicOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

const advancesOptions = [
  { value: 'agent', label: 'Agent', isDisabled: true },
  { value: 'agent.display_name', label: 'Name' },
  { value: 'agent.first_name', label: 'First Name' },
  { value: 'agent.last_name', label: 'Last Name' },
  { value: 'agent.primary_email.email', label: 'Email address' },
];

storiesOf('Forms', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Select',
    () => (
      <div>
        <h3>Selects</h3>
        <Label>Basic</Label>
        <Select
          name="select-1"
          onChange={action('Select change')}
          options={basicOptions}
          menuIsOpen={boolean('Open', null)}
          disabled={boolean('Disabled', false)}
        /><br />
        <Label>Basic with Icon</Label>
        <Select
          icon={faSearch}
          name="select-2"
          onChange={action('Select change')}
          options={basicOptions}
          disabled={boolean('Disabled', false)}
        /><br />
        <Label>With disabled options</Label>
        <Select
          icon={faSearch}
          name="select-2"
          onChange={action('Select change')}
          options={advancesOptions}
          disabled={boolean('Disabled', false)}
        />
      </div>
    ),
    {
      info: 'This is the select and its variation.'
    }
  );

