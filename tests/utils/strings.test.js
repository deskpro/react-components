import * as strings from 'utils/strings';
import { objectForEach } from 'utils/objects';

test('stringUpperFirst', () => {
  const data = {
    foo:       'Foo',
    'foo bar': 'Foo bar'
  };

  objectForEach(data, (val, key) => {
    expect(strings.stringUpperFirst(key)).toBe(val);
  });
});

test('stringEscapeHTML', () => {
  const data = {
    foo:          'foo',
    '<a>foo</a>': '&lt;a&gt;foo&lt;/a&gt;'
  };
  objectForEach(data, (val, key) => {
    expect(strings.stringEscapeHTML(key)).toBe(val);
  });
});

test('stringHighlight', () => {
  const word = 'foo';
  const data = {
    foo:       '<i>foo</i>',
    Foo:       '<i>Foo</i>',
    'foo bar': '<i>foo</i> bar',
    'Foo bar': '<i>Foo</i> bar'
  };
  objectForEach(data, (val, key) => {
    expect(strings.stringHighlight(key, word)).toBe(val);
  });
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
