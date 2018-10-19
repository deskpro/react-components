/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { faBug, faStar, faEnvelopeOpen, faCaretDown, faCog } from '@fortawesome/free-solid-svg-icons';
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
                name={faBug}
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

