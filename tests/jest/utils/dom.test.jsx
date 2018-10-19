import React from 'react';
import * as dom from 'utils/dom';

class Foo extends React.Component {
  render() {
    return <div {...this.props} />;
  }
}

const Bar = props => (
  <div {...props} />
);

const bar = <Bar />;
const header = <h1>Title</h1>;

test('domIsReactComponent', () => {
  expect(dom.domIsReactComponent(Foo)).toBe(true);
  expect(dom.domIsReactComponent(Bar)).toBe(false);

  expect(dom.domIsReactComponent(<Foo />)).toBe(false);
  expect(dom.domIsReactComponent(<Bar />)).toBe(false);
  expect(dom.domIsReactComponent(header)).toBe(false);
  expect(dom.domIsReactComponent(bar)).toBe(false);
  expect(dom.domIsReactComponent('bar')).toBe(false);
});

test('domIsReactClassComponent', () => {
  expect(dom.domIsReactClassComponent(Foo)).toBe(true);

  expect(dom.domIsReactClassComponent(Bar)).toBe(false);
  expect(dom.domIsReactClassComponent(bar)).toBe(false);
  expect(dom.domIsReactClassComponent(header)).toBe(false);
  expect(dom.domIsReactClassComponent('bar')).toBe(false);
});

test('domIsReactFunctionComponent', () => {
  expect(dom.domIsReactFunctionComponent(Bar)).toBe(false);

  expect(dom.domIsReactFunctionComponent(Foo)).toBe(false);
  expect(dom.domIsReactFunctionComponent(bar)).toBe(false);
  expect(dom.domIsReactFunctionComponent(header)).toBe(false);
  expect(dom.domIsReactFunctionComponent('bar')).toBe(false);
});

test('domIsElement', () => {
  expect(dom.domIsElement(<Foo />)).toBe(true);
  expect(dom.domIsElement(<Bar />)).toBe(true);
  expect(dom.domIsElement(header)).toBe(true);
  expect(dom.domIsElement(bar)).toBe(true);

  expect(dom.domIsElement(Foo)).toBe(false);
  expect(dom.domIsElement(Bar)).toBe(false);
  expect(dom.domIsElement('bar')).toBe(false);
});

