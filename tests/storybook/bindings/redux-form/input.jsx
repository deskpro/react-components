import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from 'bindings/redux-form';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('Input', () => (
    <StoryForm>
      <Input
        id="username"
        name="username"
        label="Username"
      />
    </StoryForm>
  )
)
;
