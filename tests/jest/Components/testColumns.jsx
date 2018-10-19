import React from 'react';
import renderer from 'react-test-renderer';
import { Heading, Count } from '../../../src/Components/Common/index';
import {
  Column,
  Drawer,
  DrawerList,
  Item,
  ItemFilter,
  ItemList,
  ItemPopper,
  ItemSettings
} from '../../../src/Components/Columns/index';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

// https://github.com/facebook/react/issues/7740#issuecomment-247335106
const createNodeMock = () => ({
  addEventListener: () => {}
});

describe('>>> Columns --- Snapshot', () => {
  it('+++capturing Snapshot of Column', () => {
    const renderedValue = renderer.create(<Column className="test-class">
      <Heading>Test</Heading>
    </Column>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Drawer', () => {
    const renderedValue = renderer.create(<Drawer className="test-class">
      <Heading>
          Test
      </Heading>
      <ItemList>
        <Item>
            Item 1
          <Count>1</Count>
        </Item>
        <Item>
            Item 2
          <Count>0</Count>
        </Item>
      </ItemList>
    </Drawer>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of DrawerList', () => {
    const renderedValue = renderer.create(<DrawerList className="test-class">
      <Drawer className="test-class" />
    </DrawerList>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ItemFilter', () => {
    const renderedValue = renderer.create(
      <ItemFilter className="test-class" />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ItemPopper', () => {
    const renderedValue = renderer.create(
      <ItemPopper className="test-class" opened />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ItemSettings', () => {
    const renderedValue = renderer.create(
      <ItemSettings className="test-class" opened />,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
