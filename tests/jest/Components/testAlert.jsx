import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from 'Components/index';

describe('>>> Alert --- Snapshot', () => {
  it('+++capturing Snapshot of Alert', () => {
    const renderedValue = renderer.create(<Alert type="success" className="test-class">Success!</Alert>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
