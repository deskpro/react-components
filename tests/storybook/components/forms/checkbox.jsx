import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Checkbox } from 'Components/Forms';

storiesOf('Forms', module)
  .addWithInfo(
    'Checkbox',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <h3>Checkbox</h3>
        <Checkbox checked onChange={action('Checkbox change')}>Checked</Checkbox>
        <Checkbox checked={false} onChange={action('Checkbox change')}>Unchecked</Checkbox>
      </div>
    )
  )
;
