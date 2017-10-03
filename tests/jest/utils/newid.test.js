import newid from 'utils/newid';

test('newid', () => {
  expect(newid()).toBe('id1');
  expect(newid()).toBe('id2');
  expect(newid('prefix-')).toBe('prefix-3');
});
