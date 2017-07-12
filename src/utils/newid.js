let lastId = 0;

/**
 * Generates a unique id value
 *
 * @param {string} prefix Prefix the return value with this string
 * @returns {string}
 */
export default function newid(prefix = 'id') {
  lastId += 1;
  return `${prefix}${lastId}`;
}
