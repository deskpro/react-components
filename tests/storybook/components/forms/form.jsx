import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from '../../../../src/Components/Forms/Form';
import { Input, Label } from '../../../../src/Components/Forms';
import { Button } from '../../../../src/Components/Buttons';

storiesOf('Forms', module)
  .add('Form', () => (
    <Form onSubmit={action('onSubmit')}>
      <div>
        <Label>Email</Label>
        <Input name="email" label="Email" />
      </div>
      <div>
        <Label>Subject</Label>
        <Input name="subject" />
      </div>
      <div style={{ margin: '10px 0 0' }}>
        <Button name="submit">
          Submit
        </Button>
      </div>
    </Form>
  ));

