import React from 'react';
import renderer from 'react-test-renderer';
import { Button, ButtonPopper, ProgressButton, TranslateButton, DropdownButton } from 'Components/Buttons/index';

// https://github.com/facebook/react/issues/7740#issuecomment-247335106
const createNodeMock = () => ({
  addEventListener: () => {}
});

describe('>>> Buttons --- Snapshot', () => {
  it('+++capturing Snapshot of Button', () => {
    const renderedValue = renderer.create(
      <Button
        size="small"
        type="primary"
      >
        Button
      </Button>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ButtonPopper', () => {
    const renderedValue = renderer.create(
      <ButtonPopper
        size="small"
        type="primary"
      >
        Button
      </ButtonPopper>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ProgressButton', () => {
    const renderedValue = renderer.create(
      <ProgressButton percent={75} size="large">
        75
      </ProgressButton>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of TranslateButton', () => {
    const renderedValue = renderer.create(
      <TranslateButton percent={65} size="l">
        65
      </TranslateButton>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of DropdownButton', () => {
    const renderedValue = renderer.create(
      <DropdownButton size="l" type="primary">
        Test
      </DropdownButton>,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
