import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from '../../../src/Components/index';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('>>> Alert --- Snapshot', () => {
  it('+++capturing Snapshot of Alert', () => {
    const renderedValue = renderer.create(<Alert type="success" className="test-class">Success!</Alert>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
