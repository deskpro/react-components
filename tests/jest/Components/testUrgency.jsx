import React from 'react';
import renderer from 'react-test-renderer';
import { Urgency } from 'Components/index';

describe('>>> Urgency --- Snapshot', () => {
  it('+++capturing Snapshot of Urgency', () => {
    const renderedValue = renderer.create(<div>
      <Urgency level={1}>23</Urgency>
      <Urgency level={2}>2</Urgency>
      <Urgency level={3}>9</Urgency>
    </div>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
