import { regexpEscape } from 'utils/regexp';
import { objectForEach } from 'utils/objects';

/**
 * Upper cases the first letter in a string
 *
 * @param {string} str The string to transform
 * @returns {string}
 */
export function stringUpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts HTML special characters into entities
 *
 * @param {string} str String to escape
 * @returns {string}
 */
export function stringEscapeHTML(str) {
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
export function stringHighlight(str, word, tag = 'i') {
  const regexp = new RegExp(`(${regexpEscape(word)})`, 'ig');
  return stringEscapeHTML(str).replace(regexp, `<${tag} class="dp-highlighted">$1</${tag}>`);
}

/**
 * Interpolate placeholder values found in the given string
 *
 * The given string may contain placeholder values in the form of $placeholder$ which
 * are replaced by the values found in the given object.
 *
 * @param {string} str
 * @param {object} values
 * @returns {string}
 */
export function stringInterpolate(str, values) {
  objectForEach(values, (val, key) => {
    const regexp = new RegExp(`(\\\$${regexpEscape(key)}\\\$)`, 'ig'); // eslint-disable-line no-useless-escape
    str = str.replace(regexp, val); // eslint-disable-line no-param-reassign
  });
  return str;
}
