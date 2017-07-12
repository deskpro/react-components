import { regexpEscape } from 'Components/utils/regexp';

test('regexpEscape', () => {
  const data = {
    foo:        'foo',
    '(foo)':    '\\\(foo\\\)',
    '[foo]':    '\\\[foo\\\]',
    'foo.bar':  'foo\\\.bar',
    'foo$bar^': 'foo\\\$bar\\\^'
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      expect(regexpEscape(key)).toBe(data[key]);
    }
  }
});
