import * as validators from '../../../src/bindings/redux-form/validators';

test('validators.required', () => {
  expect(validators.required('test')).toBe(undefined);
  expect(validators.required('')).toBe('Required');
});

test('validators.maxLength', () => {
  expect(validators.maxLength(3)('foo')).toBe(undefined);
  expect(validators.maxLength(3)('test')).not.toBe(undefined);
});

test('validators.minLength', () => {
  expect(validators.minLength(4)('test')).toBe(undefined);
  expect(validators.minLength(4)('foo')).not.toBe(undefined);
});

test('validators.alphaNumeric', () => {
  expect(validators.alphaNumeric('test')).toBe(undefined);
  expect(validators.alphaNumeric('test!')).not.toBe(undefined);
  expect(validators.alphaNumeric('test test')).not.toBe(undefined);
});

test('validators.numeric', () => {
  expect(validators.numeric('123')).toBe(undefined);
  expect(validators.numeric('12a')).not.toBe(undefined);
  expect(validators.numeric('123-123')).not.toBe(undefined);
});

test('validators.email', () => {
  const data = [
    ['test@gmail.com', undefined],
    ['test.account@gmail.com', undefined],
    ['test@gmail', 'Invalid email address'],
    ['testing', 'Invalid email address']
  ];
  data.forEach((d) => {
    expect(validators.email(d[0])).toBe(d[1]);
  });
});
