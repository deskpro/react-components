import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { Button, ConfirmButton } from '../../../../src/Components/Buttons';
/* eslint-disable react/prop-types */

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withPropsCombinations(
      Button,
      {
        size:     ['small', 'medium', 'large'],
        children: ['Button', 'Long text button', <b>Bold content</b>]
      },
      {
        CombinationRenderer({ Component, props }) {
          const { size, ...elementProps } = props;
          return (
            <div>
              <Component
                size={size}
                type="primary"
                disabled={boolean('Disabled', false)}
                {...elementProps}
              />&nbsp;&nbsp;
              <Component
                size={size}
                type="secondary"
                disabled={boolean('Disabled', false)}
                {...elementProps}
              />&nbsp;&nbsp;
              <Component
                size={size}
                type="cta"
                disabled={boolean('Disabled', false)}
                {...elementProps}
              /><br /><br />
            </div>
          );
        }
      }
    )
  )
  .add(
    'with confirm',
    withInfo('This is the basic usage of a input with the label passed as a property.')(
      () => (
        <div>
          <ConfirmButton onClick={action('Delete action')}>Delete</ConfirmButton>
        </div>
      )
    )
  );

