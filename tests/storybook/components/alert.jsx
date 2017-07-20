import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Alert from 'Components/Alert';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('Alert', () => (
    <div style={{ width: 200 }}>
      <Alert>Default!</Alert>
      <br />
      <Alert type="success">Success!</Alert>
      <br />
      <Alert type="info">Info!</Alert>
      <br />
      <Alert type="warning">Warning!</Alert>
      <br />
      <Alert type="danger">Danger!</Alert>
    </div>
  )
)
;
