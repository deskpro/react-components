import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Label, LabelInput, LabelSet } from 'Components/Forms';

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
        <br />
        <h3>Label input</h3>
        <LabelInput labels={['Label 1', 'Label 2', 'Label 3']} />
        <br />
        <h3>Label set</h3>
        <LabelSet labels={['Label 1', 'Label 2', 'Label 3']} />
        <br />
      </div>
    ),
  )
;
