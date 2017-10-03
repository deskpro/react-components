import React from 'react';
import renderer from 'react-test-renderer';
import { Modal, Button } from 'Components/index';

describe('>>> Modal --- Snapshot', () => {
  it('+++capturing Snapshot of Modal', () => {
    const renderedValue = renderer.create(
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
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
