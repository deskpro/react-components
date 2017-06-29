import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InputLabel, Select } from 'Components/Forms';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Select',
    'This is the select and its variation.',
    () => (
      <div>
        <h3>Selects</h3>
        <InputLabel>Basic</InputLabel>
        <Select
          onChange={action('Select change')}
          options={
          [
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' }
          ]
          }
        /><br />
        <InputLabel>Multi</InputLabel>
        <Select
          multiple
          includeSelectAllOption
          selectAllText="Europe"
          allSelectedText="All Europe"
          nSelectedText="countries"
          maxHeight={300}
          onChange={action('Select change')}
          options={
          [
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
          ]
          }
        /><br />
      </div>
    ),
  )
;
