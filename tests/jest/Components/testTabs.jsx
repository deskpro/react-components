import React from 'react';
import renderer from 'react-test-renderer';
import { Tabs, TabLink } from '../../../src/Components/Tabs/index';

describe('>>> Tabs --- Snapshot', () => {
  it('+++capturing Snapshot of TabLink', () => {
    const renderedValue = renderer.create(<TabLink name="one">
        Tab One
    </TabLink>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Tabs', () => {
    const renderedValue = renderer.create(<Tabs active="one">
      <TabLink name="one">
          Tab One
      </TabLink>
      <TabLink name="two">
          Tab Two
      </TabLink>
    </Tabs>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
