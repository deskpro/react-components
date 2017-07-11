import PropTypes from 'prop-types';
import { objectKeyFilter } from 'Components/utils/objects';

test('objectKeyFilter', () => {
  const propTypes = {
    className: PropTypes.string
  };
  const props = {
    className: 'dp-item',
    title:     'foo'
  };
  const result = objectKeyFilter(props, propTypes);
  expect(result.className).toBe(undefined);
  expect(result.title).not.toBe(undefined);
});
