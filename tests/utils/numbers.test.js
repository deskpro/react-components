import * as numbers from 'utils/numbers';

test('numberFormat', () => {
  expect(numbers.numberFormat(3)).toBe('3');
  expect(numbers.numberFormat(3333)).toBe('3,333');
  expect(numbers.numberFormat(3333, '.')).toBe('3.333');
});

test('numberRandom', () => {
  const values = [
    [1, 6],
    [10, 11],
    [100, 1000]
  ];

  values.forEach((val) => {
    const r = numbers.numberRandom(val[0], val[1]);
    expect(r).toBeGreaterThanOrEqual(val[0]);
    expect(r).toBeLessThanOrEqual(val[1]);
  });
});
