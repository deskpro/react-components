/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Icon from '../../../src/Components/Icon';

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add(
    'Icon',
    withPropsCombinations(
      Icon,
      {
        size: ['xsmall', 'small', 'medium', 'large', 'xlarge']
      },
      {
        CombinationRenderer({ Component, props }) {
          return (
            <div>
              <h3>Size {props.size}</h3>
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
  );

