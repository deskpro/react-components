import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from 'Components/index';
import {
  Count,
  Heading,
  Highlighter,
  QueryableList,
  List,
  ListElement,
  SelectableList,
  ToggleableList,
  Popper,
  Portal,
  Scrollbar
} from 'Components/Common/index';

// https://github.com/facebook/react/issues/7740#issuecomment-247335106
const createNodeMock = () => ({
  addEventListener: () => {}
});

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
  it('+++capturing Snapshot of List', () => {
    const renderedValue = renderer.create(
      <List className="test-class">
        <ListElement name="item1">
          Item1
        </ListElement>
        <ListElement name="item2">
          Item2
        </ListElement>
      </List>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of QueryableList', () => {
    const renderedValue = renderer.create(
      <QueryableList className="test-class" whereName="@all">
        <ListElement name="item1">
          Item1
        </ListElement>
        <ListElement name="item2">
          Item2
        </ListElement>
      </QueryableList>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of SelectableList', () => {
    const renderedValue = renderer.create(
      <SelectableList className="test-class">
        <ListElement name="item1">
          Item1
        </ListElement>
        <ListElement name="item2">
          Item2
        </ListElement>
      </SelectableList>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of ToggleableList', () => {
    const renderedValue = renderer.create(
      <ToggleableList className="test-class" on="click" toggle="selected">
        <ListElement name="item1">
          Item1
        </ListElement>
        <ListElement name="item2">
          Item2
        </ListElement>
      </ToggleableList>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Popper', () => {
    const renderedValue = renderer.create(
      <Popper target="target" placement="bottom" opened>
        <p>Test</p>
      </Popper>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Scrollbar', () => {
    const renderedValue = renderer.create(
      <Scrollbar>
        <p>Test</p>
      </Scrollbar>,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of Portal', () => {
    const renderedValue = renderer.create(
      <Portal>
        <p>Test</p>
      </Portal>,
      { createNodeMock }
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
