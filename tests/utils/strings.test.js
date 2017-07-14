import * as strings from 'utils/strings';

test('stringUpperFirst', () => {
  const data = {
    foo:       'Foo',
    'foo bar': 'Foo bar'
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      expect(strings.stringUpperFirst(key)).toBe(data[key]);
    }
  }
});

test('stringEscapeHTML', () => {
  const data = {
    foo:          'foo',
    '<a>foo</a>': '&lt;a&gt;foo&lt;/a&gt;'
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      expect(strings.stringEscapeHTML(key)).toBe(data[key]);
    }
  }
});

test('stringHighlight', () => {
  const word = 'foo';
  const data = {
    foo:       '<i>foo</i>',
    Foo:       '<i>Foo</i>',
    'foo bar': '<i>foo</i> bar',
    'Foo bar': '<i>Foo</i> bar'
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      expect(strings.stringHighlight(key, word)).toBe(data[key]);
    }
  }

  expect(strings.stringHighlight('foo', 'foo', 'strong')).toBe('<strong>foo</strong>');
});

test('stringInterpolate', () => {
  const str = 'Press $key$ and $key$ now for $foo$';
  const values = {
    key: 'ENTER',
    foo: 'FOO'
  };
  expect(strings.stringInterpolate(str, values)).toBe('Press ENTER and ENTER now for FOO');
});
