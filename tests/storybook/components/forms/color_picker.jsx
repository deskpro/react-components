import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { Colorpicker, Label } from '../../../../src/Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'Colorpicker',
    () => (
      <div>
        <Label>Color</Label>
        <Colorpicker
          onChange={action('onChange')}
          format={select('Format', { Hexadecimal: 'hex', RGB: 'rgb', HSL: 'hsl'}, 'rgb')}
        />
      </div>
    )
  );
