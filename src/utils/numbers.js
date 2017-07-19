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

/**
 * Returns a random whole number between min and max
 *
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns {number}
 */
export function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
