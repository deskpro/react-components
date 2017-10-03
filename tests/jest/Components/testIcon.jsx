import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from 'Components/index';

describe('>>> Icon --- Snapshot', () => {
  it('+++capturing Snapshot of Icon', () => {
    const renderedValue = renderer.create(<Icon name="bug" className="test-class" size="small" rotate="90" />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
