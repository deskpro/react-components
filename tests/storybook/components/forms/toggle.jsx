import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Toggle } from '../../../../src/Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'Toggle',
    withInfo('This is the basic usage of a input with the label passed as a property.') (
      () => (
        <div>
          <h3>Toggles</h3>
          <Toggle
            checked
            onChange={action('Toggle change')}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Read only', false)}
          >
            Checked
          </Toggle>
          <Toggle
            checked={false}
            onChange={action('Toggle change')}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Read only', false)}
          >
            Unchecked
          </Toggle>

          <h3>Inline Toggles</h3>
          <Toggle
            checked
            onChange={action('Toggle change')}
            style={{ display: 'inline-block' }}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Read only', false)}
          >
            Checked
          </Toggle>
          <Toggle
            onChange={action('Toggle change')}
            style={{ display: 'inline-block' }}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Read only', false)}
          >
            Unchecked
          </Toggle>
          <Toggle
            existing
            onChange={action('Toggle change')}
            style={{ display: 'inline-block' }}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Read only', false)}
          >
            Existing
          </Toggle>
        </div>
      )
    )
  );

