import React from 'react';
import renderer from 'react-test-renderer';
import { Loader } from 'Components/index';

describe('>>> Loader --- Snapshot', () => {
  it('+++capturing Snapshot of Loader', () => {
    const renderedValue = renderer.create(
      <Loader name="bug" className="test-class" size="small" />
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
