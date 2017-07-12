export const THOUSANDTHS_SEPARATOR = ',';

/**
 * Formats a number to include commas (or any separator) in the thousandths place
 *
 * @param {number} num Number to format
 * @param {string} separator Separator character
 * @returns {string}
 */
export function numberFormat(num, separator = THOUSANDTHS_SEPARATOR) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
