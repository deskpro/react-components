'use strict';

const fs = require('fs');

/**
 * Parses a template
 *
 * Reads the given template file and replaces placeholders with the given values.
 * The placeholders in the template are in format ${placeholder}.
 *
 * Examples:
 *
 * ```
 * const code = parseTemplateSync('template.jsx.tpl', {
 *  classname: 'Foo',
 *  namespace: 'Forms'
 * });
 * ```
 *
 * @param {string} file   Path to the template file
 * @param {object} values A map of placeholder names and values
 * @returns {string}
 */
function parseTemplateSync(file, values) {
  let code = fs.readFileSync(file).toString();
  for(let key in values) {
    if (values.hasOwnProperty(key)) {
      code = code.replace(
        new RegExp('(\\\${' + key + '})', 'ig'),
        values[key]
      );
    }
  }

  return code;
}

module.exports = {
  parseTemplateSync
};
