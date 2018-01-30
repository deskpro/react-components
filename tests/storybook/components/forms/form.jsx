import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Form from 'Components/Forms/Form';
import { Input, Label } from 'Components/Forms';
import { Button } from 'Components/Buttons';

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

