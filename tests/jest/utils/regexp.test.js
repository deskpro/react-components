/* eslint-disable no-useless-escape */

import { regexpEscape } from 'utils/regexp';
import { objectForEach } from 'utils/objects';

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
