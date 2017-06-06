import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Button', () => <div>
      Button--s <br />
      <Button
        className="button--s"
        disabled={boolean('Disabled', false)}
      >
            Small
      </Button><br /><br />
      Button--m (default)<br />
      <Button
        disabled={boolean('Disabled', false)}
      >
            Medium
      </Button><br /><br />
      Button--l <br />
      <Button
        className="button--l"
        disabled={boolean('Disabled', false)}
      >
            Large
      </Button><br /><br />
      Cta<br />
      <Button
        className="button--cta"
        disabled={boolean('Disabled', false)}
      >
            Call to action
      </Button><br /><br />
      Primary (default)<br />
      <Button
        disabled={boolean('Disabled', false)}
      >
            Primary
      </Button><br /><br />
      Secondary<br />
      <Button
        className="button--secondary"
        disabled={boolean('Disabled', false)}
      >
        Secondary
      </Button><br /><br />
    </div>
);
