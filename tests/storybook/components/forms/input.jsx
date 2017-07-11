import React from 'react';
import classNames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Input, Label } from 'Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Input',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <h3>Sizes</h3>
        <Label>Small</Label>
        <Input
          className="dp-input--small"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Medium</Label>
        <Input
          className="dp-input--medium"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Large</Label>
        <Input
          className="dp-input--large"
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
          className="dp-input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <Label>Error display</Label>
        <Input
          required
          className="dp-input--error"
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
        <h3>Icons</h3>
        <Label>With icon</Label>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          icon="search"
        /><br />
        <h3>Prefix / Suffix</h3>
        <Label>Prefix</Label>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          prefix="prefix"
        /><br />
        <Label>Suffix</Label>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          suffix="%"
        /><br />
        <Label>Both</Label>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          prefix="%"
          suffix="%"
        /><br />
      </div>
    )
  )
;
