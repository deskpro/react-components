import * as dates from 'utils/dates';

test('datesNumberOfDaysInMonth', () => {
  expect(dates.datesNumberOfDaysInMonth(new Date(2017, 7))).toBe(31);
  expect(dates.datesNumberOfDaysInMonth(new Date(2017, 4))).toBe(30);
});

test('datesCalendarDays', () => {
  const days = dates.datesCalendarDays(new Date(2017, 7, 1));
  expect(days.length).toBe(35);
  expect(days[0]).toBe(-1);
  expect(days[34]).toBe(33);
});
