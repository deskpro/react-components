import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Heading from 'Components/Common/Heading';
import Icon from 'Components/Icon';
/* eslint-disable react/prop-types */

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .addWithPropsCombinations(
    'Heading',
    Heading,
    {
      size:      [1, 2, 3, 4, 5, 6],
      icon:      ['bug'],
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
  );

