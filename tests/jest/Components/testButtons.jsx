import React from 'react';
import renderer from 'react-test-renderer';
import { Button, ButtonPopper, ProgressButton, TranslateButton } from 'Components/Buttons/index';

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
});
