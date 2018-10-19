import * as dates from '../../../src/utils/dates';

test('dateNumberOfDaysInMonth', () => {
  // Months are 0 based
  expect(dates.dateNumberOfDaysInMonth(new Date(2017, 6, 31))).toBe(31);
  expect(dates.dateNumberOfDaysInMonth(new Date(2017, 7, 1))).toBe(31);
  expect(dates.dateNumberOfDaysInMonth(new Date(2017, 3, 5))).toBe(30);
  expect(dates.dateNumberOfDaysInMonth(new Date(2018, 1, 14))).toBe(28);
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

test('dateCalendarDays', () => {
  const days = dates.dateCalendarDays(new Date(2018, 1, 20));
  expect(days.length).toBe(35);
  expect(days[0]).toBe(-3);
  expect(days[34]).toBe(31);
});

test('dateToMonth', () => {
  const date = new Date(2017, 6, 4);
  expect(dates.dateToMonth(date)).toBe('July');
  expect(dates.dateToMonth(date, true)).toBe('Jul');
});

test('getShortDateFormat', () => {
  expect(dates.getShortDateFormat('en-us')).toBe('M/D/YYYY');
  expect(dates.getShortDateFormat('en-gb')).toBe('DD/MM/YYYY');
  expect(dates.getShortDateFormat('fr-fr')).toBe('DD/MM/YYYY');
  expect(dates.getShortDateFormat('fr_FR')).toBe('DD/MM/YYYY');
  expect(dates.getShortDateFormat('en_T1')).toBe('M/D/YYYY');
});
