import React from 'react';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { Button } from '../../../../src/Components/Buttons';
import Icon from '../../../../src/Components/Icon';
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
                <Icon name={faBug} />
                {children}
              </Component>&nbsp;&nbsp;
              <Component
                type="secondary"
                size={size}
                disabled={boolean('Disabled', false)}
                {...elementProps}
              >
                <Icon name={faBug} />
                {children}
              </Component>&nbsp;&nbsp;
              <Component
                type="cta"
                size={size}
                disabled={boolean('Disabled', false)}
                {...elementProps}
              >
                <Icon name={faBug} />
                {children}
              </Component><br /><br />
            </div>
          );
        }
      }
    )
  );

