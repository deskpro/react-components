import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icon';

/* eslint-disable react/prop-types*/

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addWithPropsCombinations(
  'with icon',
  Button,
  {
    className: ['dp-button--s', 'dp-button--m', 'dp-button--l'],
    children:  ['Button', 'Long text button', <b>Bold content</b>]
  },
  {
    CombinationRenderer({ Component, props }) {
      const { className, children, ...elementProps } = props;
      return (
        <div>
          <Component
            className={classNames('dp-button--primary', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          >
            <Icon name="bug" />
            {children}
          </Component>&nbsp;&nbsp;
          <Component
            className={classNames('dp-button--secondary', className)}
            disabled={boolean('Disabled', false)}
            {...elementProps}
          >
            <Icon name="bug" />
            {children}
          </Component>&nbsp;&nbsp;
          <Component
            className={classNames('dp-button--cta', className)}
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
;
