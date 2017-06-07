import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Input from 'Components/Input';
import Label from 'Components/Label';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Input',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <h3>Sizes</h3>
        <Label>Small</Label>
        <Input
          className="input--small"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Medium</Label>
        <Input
          className="input--medium"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Large</Label>
        <Input
          className="input--large"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        />
        <h3>Fonts</h3>
        <Label>Email Address</Label>
        <Input
          value="hello@test.com"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Placeholder</Label>
        <Input
          placeholder="e.g. hello@test.com"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Error display</Label>
        <Input
          className="input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Error display</Label>
        <Input
          required
          className="input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <h3>Validation</h3>
        <Label>Validating</Label>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          validating
        /><br />
        <Label>Validated</Label>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          validated
        /><br />
      </div>
    ),
  )
;
