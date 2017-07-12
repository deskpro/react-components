/**
 * Upper cases the first letter in a string
 *
 * @param {string} string The string to transform
 * @returns {string}
 */
export function toUpperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts HTML special characters into entities
 *
 * @param {string} str
 * @returns {string}
 */
export function htmlEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
