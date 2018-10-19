import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from '../../../src/Components/index';

describe('>>> Container --- Snapshot', () => {
  it('+++capturing Snapshot of Container', () => {
    const renderedValue = renderer.create(<Container className="test-class">Test content</Container>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
