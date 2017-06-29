import React from 'react';
import classNames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Input, InputLabel } from 'Components/Forms';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Input',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <h3>Sizes</h3>
        <InputLabel>Small</InputLabel>
        <Input
          className="dp-input--small"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <InputLabel>Medium</InputLabel>
        <Input
          className="dp-input--medium"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <InputLabel>Large</InputLabel>
        <Input
          className="dp-input--large"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        />
        <h3>Fonts</h3>
        <InputLabel>Email Address</InputLabel>
        <Input
          value="hello@test.com"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <InputLabel>Placeholder</InputLabel>
        <Input
          placeholder="e.g. hello@test.com"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <InputLabel>Error display</InputLabel>
        <Input
          className="dp-input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <InputLabel>Error display</InputLabel>
        <Input
          required
          className="dp-input--error"
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
        /><br />
        <h3>Validation</h3>
        <InputLabel>Validating</InputLabel>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          validating
        /><br />
        <InputLabel>Validated</InputLabel>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          validated
        /><br />
        <h3>Icons</h3>
        <InputLabel>With icon</InputLabel>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          icon="search"
        /><br />
        <h3>Prefix / Suffix</h3>
        <InputLabel>Prefix</InputLabel>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          prefix="prefix"
        /><br />
        <InputLabel>Suffix</InputLabel>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          suffix="%"
        /><br />
        <InputLabel>Both</InputLabel>
        <Input
          disabled={boolean('Disabled', false)}
          readOnly={boolean('Readonly', false)}
          className={classNames({ 'dp-input--error': boolean('Error', false) })}
          prefix="%"
          suffix="%"
        /><br />
      </div>
    ),
  )
;
