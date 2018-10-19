import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from '../../../src/Components/index';

describe('>>> Avatar --- Snapshot', () => {
  it('+++capturing Snapshot of Avatar', () => {
    const renderedValue = renderer.create(<Avatar src="image.png" className="test-class" size="small" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
