import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Checkbox } from '../../../../src/Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'Checkbox',
    () => (
      <div>
        <h3>Checkboxes</h3>
        <Checkbox
          checked
          onChange={action('Checkbox change')}
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Read only', false)}
        >
          Checked
        </Checkbox>
        <Checkbox
          checked={false}
          onChange={action('Checkbox change')}
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Read only', false)}
        >
          Unchecked
        </Checkbox>

        <h3>Inline checkboxes</h3>
        <Checkbox
          onChange={action('Checkbox change')}
          style={{ display: 'inline-block' }}
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Read only', false)}
        >
          Checked
        </Checkbox>
        <Checkbox
          onChange={action('Checkbox change')}
          style={{ display: 'inline-block' }}
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Read only', false)}
        >
          Unchecked
        </Checkbox>
        <Checkbox
          existing
          onChange={action('Checkbox change')}
          style={{ display: 'inline-block' }}
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Read only', false)}
        >
          Existing
        </Checkbox>
      </div>
    ),
    {
      info: 'This is the basic usage of a input with the label passed as a property.'
    }
  );

