import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Icon from '../../../src/Components/Icon';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addWithPropsCombinations(
    'Icon',
    Icon,
    {
      size: ['xs', 's', 'm', 'l', 'xl']
    },
    {
      CombinationRenderer({ Component, props }) {
        return (
          <div>
            <h3>Size "{props.size}"</h3>
            <Component
              name={select('Name', ['bug', 'star-o', 'envelope-o', 'caret-down', 'cog'], 'bug')}
              rotate={select('Rotate', ['0', '90', '180', '270'], '0')}
              spin={boolean('Spin', false)}
              {...props}
            />
          </div>
        );
      }
    }
  )
;
