'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { objectKeyFilter } from 'Components/utils/objects';

test('objectKeyFilter', () => {
  let propTypes = {
    className: PropTypes.string
  };
  let props = {
    className: 'dp-item',
    title: 'foo'
  };
  let result = objectKeyFilter(props, propTypes);
  expect(result.className).toBe(undefined);
  expect(result.title).not.toBe(undefined);
});
