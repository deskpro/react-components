import React from 'react';
import renderer from 'react-test-renderer';
import { Stars } from '../../../src/Components/index';

describe('>>> Stars --- Snapshot', () => {
  it('+++capturing Snapshot of Stars', () => {
    const renderedValue = renderer.create(<div>
      <Stars value={0.5} />
      <br />
      <Stars value={1} />
      <br />
      <Stars value={5} />
    </div>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
