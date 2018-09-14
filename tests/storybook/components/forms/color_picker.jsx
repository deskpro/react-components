import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from "@storybook/addon-knobs";
import { Colorpicker } from 'Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'Colorpicker',
    () => (
      <Colorpicker
        onChange={action('onChange')}
        format={select('Format', { Hexadecimal: 'hex', RGB: 'rgb', HSL: 'hsl'}, 'hex')}
      />
    )
  );