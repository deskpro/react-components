import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Textarea } from 'Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => (
    <div style={{ margin: 10 }}>
      <Textarea name="input" value="This is a textarea" />
    </div>
  ));

