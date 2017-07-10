/**
 * Upper cases the first letter in a string
 *
 * @param {string} string The string to transform
 * @returns {string}
 */
export function toUpperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
