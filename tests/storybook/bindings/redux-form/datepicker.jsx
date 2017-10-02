import React from 'react';
import { storiesOf } from '@storybook/react';
import { Datepicker } from 'bindings/redux-form';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('Datepicker', () => (
    <StoryForm>
      <Datepicker
        id="birthday"
        name="birthday"
        label="Birthday"
      />
    </StoryForm>
  )
)
;
