export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

/**
 * Returns the number of days in the given date
 *
 * @param {Date} date
 * @returns {number}
 */
export function dateNumberOfDaysInMonth(date) {
  const copy = new Date(new Date(date).setDate(0));
  return copy.getDate();
}

/**
 * Returns an array of all the days in the given date
 *
 * The returned array is padded according to the firstWeekDay. The padding numbers will be negative or greater than the
 * number of days in the given month.
 *
 * @param {Date} date
 * @param firstWeekDay
 * @returns {Array}
 */
export function dateCalendarDays(date, firstWeekDay = 0) {
  const copy = new Date(new Date(date).setDate(1));
  const offset = copy.getDay() - firstWeekDay + 7;
  copy.setMonth(copy.getMonth() + 1);
  copy.setDate(0);

  const daysInMonth = copy.getDate();
  let totalSquares = ((offset + daysInMonth) / 7 | 0) * 7; // eslint-disable-line no-bitwise
  totalSquares += (offset + daysInMonth) % 7 ? 7 : 0;

  const calendarSquares = [];
  for (let i = 1; i <= totalSquares; i++) {
    calendarSquares.push(i - offset);
  }

  if (calendarSquares[0] <= -6) {
    calendarSquares.splice(0, 7);
  }

  return calendarSquares;
}

/**
 * Returns the name of the month for the given date
 *
 * @param {Date} date The date
 * @param {bool} short Return the abbreviated (3 letter) version of the name
 */
export function dateToMonth(date, short = false) {
  const month = date.getMonth();
  if (short) {
    return MONTHS_SHORT[month];
  }
  return MONTHS[month];
}

/**
 * Return the format based on the locale
 *
 * @param locale
 * @returns {string}
 */
export function getShortDateFormat(locale) {
  const d = new Date(1992, 0, 7);
  let s;
  try {
    s = d.toLocaleDateString(locale.replace('_', '-').toLowerCase());
  } catch (e) {
    s = d.toLocaleDateString(locale.slice(0, 2).toLowerCase());
  }

  function formatReplacer(str) {
    const num = parseInt(str, 10);
    switch (num % 100) {
      case 92:
        return str.replace(/.{1}/g, 'Y');
      case 1:
        return str.length === 1 ? 'M' : 'MM';
      case 7:
        return str.length === 1 ? 'D' : 'DD';
      default:
        return '';
    }
  }

  return s.replace(/\d+/g, formatReplacer);
}
