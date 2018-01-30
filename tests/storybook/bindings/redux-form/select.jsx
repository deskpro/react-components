import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from 'bindings/redux-form';
import StoryForm from './form';

storiesOf('Redux Form', module)
  .add('Select', () => (
    <StoryForm>
      <Select
        id="country"
        name="country"
        label="Country"
        options={[
          { label: 'United Kingdom', value: 'uk' },
          { label: 'United States', value: 'us' }
        ]}
      />
    </StoryForm>
  ));

