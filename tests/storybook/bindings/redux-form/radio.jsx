import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from 'bindings/redux-form';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('Radio', () => (
    <StoryForm>
      <Radio
        id="agree1"
        name="agree"
        label="Agree"
        checked
      />
    </StoryForm>
  ));

