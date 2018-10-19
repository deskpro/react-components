import React from 'react';
import * as props from '../../../src/utils/props';
import Drawer from '../../../src/Components/Columns/Drawer';
import List from '../../../src/Components/Common/List';

test('childrenComponentType', () => {
  let testProps = {
    children: [
      <Drawer heading="Column Drawer 1" />,
      <Drawer heading="Column Drawer 2" />
    ]
  };

  let func = props.childrenComponentType(Drawer);
  let err  = func(testProps, 'children', 'Column');
  expect(err).toBeNull();

  testProps = {
    children: [
      <Drawer heading="Column Drawer 1" />,
      <List />
    ]
  };

  func = props.childrenComponentType(Drawer);
  err  = func(testProps, 'children', 'Column');
  expect(err).not.toBeNull();
});

test('childrenRecursiveMap', () => {
  let children = 'foo bar';
  let mapped = props.childrenRecursiveMap(children, child => child.toUpperCase());
  expect(mapped).toContain('FOO BAR');

  children = (
    <i>
      <p>foo bar</p>
    </i>
  );
  mapped = props.childrenRecursiveMap(children, (child) => {
    if (typeof child === 'string') {
      return child.toUpperCase();
    }
    return child;
  });
  expect(mapped[0].props.children[0].props.children).toContain('FOO BAR');
});

test('propsHasChildType', () => {
  const children = [
    <Drawer heading="Column Drawer 1" />,
    <Drawer heading="Column Drawer 2" />
  ];

  expect(props.propsHasChildType(children, Drawer)).toBe(true);
  expect(props.propsHasChildType(children, List)).toBe(false);
});
