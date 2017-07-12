import { regexpEscape } from 'utils/regexp';

/**
 * Upper cases the first letter in a string
 *
 * @param {string} str The string to transform
 * @returns {string}
 */
export function toUpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts HTML special characters into entities
 *
 * @param {string} str String to escape
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

/**
 * Wraps the given word in HTML tags where found in the given string
 *
 * @param {string} str  String to search through for the given word
 * @param {string} word Word to highlight
 * @param {string} tag  Wrap the word in this HTML tag, e.g. 'i', 'strong', 'span', etc
 * @returns {string}
 */
export function highlightWord(str, word, tag = 'i') {
  const regexp = new RegExp(`(${regexpEscape(word)})`, 'ig');
  return htmlEscape(str).replace(regexp, `<${tag}>$1</${tag}>`);
}
