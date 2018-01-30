import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from 'bindings/redux-form';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('Checkbox', () => (
    <StoryForm>
      <Checkbox
        id="agree"
        name="agree"
        label="Agree"
      />
    </StoryForm>
  ));

