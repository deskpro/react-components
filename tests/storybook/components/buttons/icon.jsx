import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icon';
/* eslint-disable react/prop-types */

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'with icon',
    withPropsCombinations(
      Button,
      {
        size:     ['small', 'medium', 'large'],
        children: ['Button', 'Long text button', <b>Bold content</b>]
      },
      {
        CombinationRenderer({ Component, props }) {
          const { size, children, ...elementProps } = props;
          return (
            <div>
              <Component
                type="primary"
                size={size}
                disabled={boolean('Disabled', false)}
                {...elementProps}
              >
                <Icon name="bug" />
                {children}
              </Component>&nbsp;&nbsp;
              <Component
                type="secondary"
                size={size}
                disabled={boolean('Disabled', false)}
                {...elementProps}
              >
                <Icon name="bug" />
                {children}
              </Component>&nbsp;&nbsp;
              <Component
                type="cta"
                size={size}
                disabled={boolean('Disabled', false)}
                {...elementProps}
              >
                <Icon name="bug" />
                {children}
              </Component><br /><br />
            </div>
          );
        }
      }
    )
  );

