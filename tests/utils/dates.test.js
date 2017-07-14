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
