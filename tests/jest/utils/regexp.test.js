/* eslint-disable no-useless-escape */

import { regexpEscape } from '../../../src/utils/regexp';
import { objectForEach } from '../../../src/utils/objects';

test('regexpEscape', () => {
  const data = {
    foo:        'foo',
    '(foo)':    '\\\(foo\\\)',
    '[foo]':    '\\\[foo\\\]',
    'foo.bar':  'foo\\\.bar',
    'foo$bar^': 'foo\\\$bar\\\^'
  };
  objectForEach(data, (val, key) => {
    expect(regexpEscape(key)).toBe(val);
  });
});
