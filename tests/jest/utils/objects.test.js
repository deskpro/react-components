import PropTypes from 'prop-types';
import * as objects from 'utils/objects';

test('objectKeyFilter', () => {
  const propTypes = {
    className: PropTypes.string
  };
  const props = {
    className: 'dp-item',
    title:     'foo'
  };
  const result = objects.objectKeyFilter(props, propTypes);
  expect(result.className).toBe(undefined);
  expect(result.title).not.toBe(undefined);
});

test('objectForEach', () => {
  const values = {
    name:  'item',
    title: 'foo'
  };
  const actual = {};

  objects.objectForEach(values, (val, key) => {
    actual[key] = val;
  });
  expect(actual.name).toBe('item');
  expect(actual.title).toBe('foo');
});

test('objectMap', () => {
  const values = {
    name:  'item',
    title: 'foo',
    alt:   'bar'
  };

  /* eslint-disable consistent-return */
  const results = objects.objectMap(values, (val, key) => {
    if (key !== 'alt') {
      return val.toUpperCase();
    }
  });
  expect(results.length).toBe(2);
  expect(results[0]).toBe('ITEM');
  expect(results[1]).toBe('FOO');
});
