import React from 'react';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Heading from '../../../../src/Components/Common/Heading';
import Icon from '../../../../src/Components/Icon';
/* eslint-disable react/prop-types */

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .add(
    'Heading',
    withPropsCombinations(
      Heading,
      {
        size:      [1, 2, 3, 4, 5, 6],
        icon:      [faBug],
        underline: [true, false],
        controls:  [<div><Icon name="gear" /><Icon name="refresh" /></div>]
      },
      {
        CombinationRenderer({ Component, props }) {
          return (
            <div style={{ margin: 12, width: 200 }}>
              <Component size={props.size} icon={props.icon} underline={props.underline} controls={props.controls}>
              Size {props.size}
              </Component>
            </div>
          );
        }
      }
    )
  );

