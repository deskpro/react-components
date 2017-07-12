import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Label, Radio } from 'Components/Forms';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Radio',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <Label>Radios</Label>
        <Radio
          name="test-radio"
          checked
          onChange={action('Radio change')}
          disabled={boolean('Disabled', false)}
        >
          Checked
        </Radio>
        <Radio
          name="test-radio"
          checked={false}
          onChange={action('Radio change')}
          disabled={boolean('Disabled', false)}
        >
          Unchecked
        </Radio>


        <Label>Inline radios</Label>
        <Radio
          name="inline-radio"
          onChange={action('Radio change')}
          style={{ display: 'inline-block' }}
          disabled={boolean('Disabled', false)}
        >
          Checked
        </Radio>
        <Radio
          name="inline-radio"
          onChange={action('Radio change')}
          style={{ display: 'inline-block' }}
          disabled={boolean('Disabled', false)}
        >
          Unchecked
        </Radio>
      </div>
    )
  )
;
