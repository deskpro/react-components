import { numberFormat } from 'Components/utils/numbers';

test('numberFormat', () => {
  expect(numberFormat(3)).toBe('3');
  expect(numberFormat(3333)).toBe('3,333');
  expect(numberFormat(3333, '.')).toBe('3.333');
});
