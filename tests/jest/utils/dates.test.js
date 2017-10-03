import * as dates from 'utils/dates';

test('dateNumberOfDaysInMonth', () => {
  expect(dates.dateNumberOfDaysInMonth(new Date(2017, 7))).toBe(31);
  expect(dates.dateNumberOfDaysInMonth(new Date(2017, 4))).toBe(30);
});

test('dateCalendarDays', () => {
  const days = dates.dateCalendarDays(new Date(2017, 7, 1));
  expect(days.length).toBe(35);
  expect(days[0]).toBe(-1);
  expect(days[34]).toBe(33);
});

test('dateCalendarDays', () => {
  const days = dates.dateCalendarDays(new Date(2017, 8, 2));
  expect(days.length).toBe(35);
  expect(days[0]).toBe(-4);
  expect(days[34]).toBe(30);
});

test('dateToMonth', () => {
  const date = new Date(2017, 6, 4);
  expect(dates.dateToMonth(date)).toBe('July');
  expect(dates.dateToMonth(date, true)).toBe('Jul');
});
