/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from 'Components/Loader';

storiesOf('Loader', module)
  .addWithPropsCombinations(
  'Loader',
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
;
