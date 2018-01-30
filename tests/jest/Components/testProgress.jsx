import React from 'react';
import renderer from 'react-test-renderer';
import { Progress, ProgressBar } from 'Components/index';

describe('>>> Progress --- Snapshot', () => {
  it('+++capturing Snapshot of Progress', () => {
    const renderedValue = renderer.create(<Progress size="medium" type="primary" style={{ margin: 10, border: '1px solid #ccc' }}>
      <ProgressBar percent={70}>70%</ProgressBar>
    </Progress>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
