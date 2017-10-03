import React from 'react';
import renderer from 'react-test-renderer';
import { Section } from 'Components/index';

describe('>>> Section --- Snapshot', () => {
  it('+++capturing Snapshot of Section', () => {
    const renderedValue = renderer.create(
      <div>
        <Section>
          Section without a title
        </Section>
        <Section title="Section title">
          Section with a title
        </Section>
      </div>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
