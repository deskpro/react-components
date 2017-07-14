'use strict';

/**
 * Transforms a string from PascalCase to underscore_case
 *
 * @param {string} str The string to transform
 * @returns {string}
 */
const pascalToUnderscore = function(str) {
  return str.replace(/\.?([A-Z])/g, (x,y) => {
    return "_" + y.toLowerCase()
  }).replace(/^_/, "");
};

module.exports = {
  pascalToUnderscore
};
