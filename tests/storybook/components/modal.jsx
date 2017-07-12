import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from 'Components/Modal';
import Button from 'Components/Button';

storiesOf('Modal', module)
  .addWithInfo(
    'Modal',
    'This is the basic usage of a modal dialogue.',
    () => (
      <Modal
        title="Modal Heading"
        style={{ width: 520 }}
        buttons={<div>
          <Button className="dp-button--l">
              Button one
          </Button>
          <Button className="dp-button--secondary dp-button--l">
            Button two
          </Button>
          <Button className="dp-button--secondary dp-button--l right">
            Another button
          </Button>
        </div>}
      >
        Test
      </Modal>
    )
  )
;
