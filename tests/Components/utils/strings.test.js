import * as strings from 'Components/utils/strings';

test('toUpperFirst', () => {
  const data = {
    foo:       'Foo',
    'foo bar': 'Foo bar'
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      expect(strings.toUpperFirst(key)).toBe(data[key]);
    }
  }
});

test('htmlEscape', () => {
  const data = {
    foo:          'foo',
    '<a>foo</a>': '&lt;a&gt;foo&lt;/a&gt;'
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      expect(strings.htmlEscape(key)).toBe(data[key]);
    }
  }
});
