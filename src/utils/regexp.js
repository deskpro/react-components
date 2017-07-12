/**
 * Escapes the given string of any special regexp characters
 *
 * @param {string} str The string to escape
 * @returns {string}
 */
export function regexpEscape(str) {
  return str.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}
