'use strict';

import React from 'react';
import { childrenComponentType } from 'Components/utils/props';
import Drawer from 'Components/Columns/Drawer';
import List from 'Components/Common/List';

test('childrenComponentType', () => {
  let props = {
    children: [
      <Drawer heading="Column Drawer 1" />,
      <Drawer heading="Column Drawer 2" />
    ]
  };

  let func = childrenComponentType(Drawer);
  let err  = func(props, 'children', 'Column');
  expect(err).toBeNull();

  props = {
    children: [
      <Drawer heading="Column Drawer 1" />,
      <List />
    ]
  };

  func = childrenComponentType(Drawer);
  err  = func(props, 'children', 'Column');
  expect(err).not.toBeNull();
});
