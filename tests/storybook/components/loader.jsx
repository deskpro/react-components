/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Loader from '../../../src/Components/Loader';

storiesOf('Loader', module)
  .add(
    'Loader',
    withPropsCombinations(
      Loader,
      {
        size: ['xsmall', 'small', 'medium', 'large', 'xlarge']
      },
      {
        CombinationRenderer({ Component, props }) {
          return (
            <div style={{ margin: 12 }}>
              <p>{props.size}</p>
              <Component {...props} />
            </div>
          );
        }
      }
    )
  );

