import React from 'react';
import { storiesOf, action } from '@storybook/react';
import classNames from 'classnames';
import Button from 'Components/Button';
import ConfirmButton from 'Components/ConfirmButton';
import { withKnobs, boolean } from '@storybook/addon-knobs';
/* eslint-disable react/prop-types*/

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addWithPropsCombinations(
    'Button',
    Button,
  {
    className: ['dp-button--s', 'dp-button--m', 'dp-button--l'],
    children:  ['Button', 'Long text button', <b>Bold content</b>]
  },
  {
    CombinationRenderer({ Component, props }) {
      const { className, ...elementProps } = props;
      return (
        <div>
          <Component
            className={classNames('dp-button--primary', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          />
          <Component
            className={classNames('dp-button--secondary', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          />
          <Component
            className={classNames('dp-button--cta', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          /><br /><br />
        </div>
      );
    }
  }
  )
  .addWithInfo(
    'Button with confirm',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <ConfirmButton onClick={action('Delete action')}>Delete</ConfirmButton>
      </div>
    )
  )
;
