import React from 'react';
import renderer from 'react-test-renderer';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'Components/index';

describe('>>> Icon --- Snapshot', () => {
  it('+++capturing Snapshot of Icon', () => {
    const renderedValue = renderer.create(<Icon name={faBug} className="test-class" size="small" rotate={90} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
