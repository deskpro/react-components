import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Input, Label, HiddenFields } from '../../../../src/Components/Forms';

storiesOf('Forms', module)
  .add(
    'with hidden fields',
    withInfo('Basic usage of the HiddenFields component.')(
      () => (
        <form>
          <div>
            <Label htmlFor="dp-input-board">BOARD</Label>
            <Input id="dp-input-board" />
          </div>
          <div>
            <Label htmlFor="dp-input-list">LIST</Label>
            <Input id="dp-input-list" />
          </div>
          <HiddenFields
            labelShow="Show optional fields"
            labelHide="Hide optional fields"
            onChange={action('opened')}
            opened={false}
          >
            <div>
              <Label htmlFor="dp-input-description">DESCRIPTION</Label>
              <Input id="dp-input-description" />
            </div>
            <div>
              <Label htmlFor="dp-input-due-date">DUE DATE</Label>
              <Input id="dp-input-due-date" />
            </div>
          </HiddenFields>
        </form>
      )
    )
  );

