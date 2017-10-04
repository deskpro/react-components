import React from 'react';
import renderer from 'react-test-renderer';
import { Count, Heading, Highlighter } from 'Components/Common/index';
import { Icon } from 'Components/index';

describe('>>> Buttons --- Common', () => {
  it('+++capturing Snapshot of Count', () => {
    const renderedValue = renderer.create(
      <div>
        <Count>3</Count><br />
        <Count>3333</Count><br />
        <Count separator=".">3333</Count>
      </div>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Heading', () => {
    const renderedValue = renderer.create(
      <Heading size={3} icon="globe" underline controls={<div><Icon name="gear" /><Icon name="refresh" /></div>}>
        Size 3
      </Heading>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Highlighter', () => {
    const renderedValue = renderer.create(
      <Highlighter highlight="feedback">
        Android feedback (Support)
      </Highlighter>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
