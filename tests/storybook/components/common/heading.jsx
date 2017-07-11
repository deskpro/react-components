import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Heading from 'Components/Common/Heading';
/* eslint-disable react/prop-types*/

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .addWithPropsCombinations(
  'Heading',
  Heading,
  {
    size: [1, 2, 3, 4, 5, 6]
  },
  {
    CombinationRenderer({ Component, props }) {
      return (
        <div>
          <Component size={props.size} icon="bug" count={22}>
            Size {props.size}
          </Component>
        </div>
      );
    }
  }
)
;
