import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Label, Select } from 'Components/Forms';

const basicOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];
const multiOptions = [
  { label: 'Austria', value: 'AT' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'Greece', value: 'GR' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Italy', value: 'IT' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Malta', value: 'MT' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Romania', value: 'RO' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Slovenia', value: 'SI' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sweden', value: 'SE' },
  { label: 'United Kingdom', value: 'GB' }
];

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Select',
    'This is the select and its variation.',
    () => (
      <div>
        <h3>Selects</h3>
        <Label>Basic</Label>
        <Select
          onChange={action('Select change')}
          options={basicOptions}
        /><br />
        <Label>Basic with Icon</Label>
        <Select
          icon="search"
          onChange={action('Select change')}
          options={basicOptions}
        /><br />
        <Label>Multi</Label>
        <Select
          multiple
          includeSelectAllOption
          selectAllText="Europe"
          allSelectedText="All Europe"
          nSelectedText="countries"
          maxHeight={300}
          onChange={action('Select change')}
          options={multiOptions}
        /><br />
        <Label>Multi with Icon</Label>
        <Select
          multiple
          includeSelectAllOption
          selectAllText="Europe"
          allSelectedText="All Europe"
          nSelectedText="countries"
          icon="search"
          maxHeight={300}
          onChange={action('Select change')}
          options={multiOptions}
        />
      </div>
    )
  )
;
