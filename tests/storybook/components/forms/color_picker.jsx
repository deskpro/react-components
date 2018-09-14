import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from "@storybook/addon-knobs";
import { ColorPicker } from 'Components/Forms';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add(
    'ColorPicker',
    () => (
      <ColorPicker
        onChange={action('onChange')}
        format={select('Format', { Hexadecimal: 'hex', RGB: 'rgb', HSL: 'hsl'}, 'hex')}
      />
    )
  );