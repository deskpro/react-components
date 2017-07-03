'use strict';

import React from 'react';
import { childrenComponentType } from 'Components/utils/props';
import ColumnDrawer from 'Components/ColumnDrawer';
import List from 'Components/List';

test('childrenComponentType', () => {
  let props = {
    children: [
      <ColumnDrawer heading="Column Drawer 1" />,
      <ColumnDrawer heading="Column Drawer 2" />
    ]
  };

  let func = childrenComponentType(ColumnDrawer);
  let err  = func(props, 'children', 'Column');
  expect(err).toBeNull();

  props = {
    children: [
      <ColumnDrawer heading="Column Drawer 1" />,
      <List />
    ]
  };

  func = childrenComponentType(ColumnDrawer);
  err  = func(props, 'children', 'Column');
  expect(err).not.toBeNull();
});
