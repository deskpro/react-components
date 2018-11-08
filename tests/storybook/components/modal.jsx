import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../../src/Components/Buttons';
import Modal from '../../../src/Components/Modal';

storiesOf('Modal', module)
  .add(
    'Modal',
    withInfo('This is the basic usage of a modal dialogue.')(
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
  );

