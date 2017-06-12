import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Label from 'Components/Label';

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Label',
    'A label to qualify an element.',
    () => (
      <div>
        <h3>Labels</h3>
        <Label>Custom work</Label>
        <Label>Report back on bug fix</Label>
        <Label>VIP</Label>
        <br />
        <h3>Labels editable</h3>
        <Label editable>Custom work</Label>
        <Label editable>Report back on bug fix</Label>
        <Label editable>VIP</Label>
        <br />
      </div>
    ),
  )
;
