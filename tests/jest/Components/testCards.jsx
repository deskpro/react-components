import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../../../src/Components/Cards/index';

describe('>>> Buttons --- Cards', () => {
  it('+++capturing Snapshot of Card', () => {
    const renderedValue = renderer.create(<Card>
      <h1>Test content</h1>
    </Card>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
