const babylon = require("babylon");
const fs      = require('fs');

/**
 * Parses the given file using babylon and returns the tokens
 *
 * @param {string} file The file to parse
 * @returns {array}
 */
const tokenizeSync = function(file) {
  const code   = fs.readFileSync(file).toString();
  const parsed = babylon.parse(code, {
    sourceType: "module",
    plugins: [
      "jsx"
    ]
  });

  return parsed.tokens;
};

/**
 * Returns the import and export statements found in the given manifest file
 *
 * Given a manifest file with the following code:
 *
 * ```js
 * import Checkbox from './Checkbox';
 * import Input from './Input';
 *
 * export { Checkbox, Input };
 * ```
 *
 * Returns an object with the given values.
 *
 * ```js
 * {
 *  imports: [
 *    "import Checkbox from './Checkbox';",
 *    "import Input from './Input';"
 *  ],
 *  exports: [
 *    "Checkbox",
 *    "Input"
 *  ]
 * }
 * ```
 *
 * Returns the object { imports: [], exports: [] } when the manifest file does not
 * exist.
 *
 * @param {string} manifest Path to the manifest file
 * @returns {{imports: Array, exports: Array}}
 */
const parseManifestSync = function(manifest) {
  let imports = [];
  let exports = [];
  let buffer  = [];
  let opened  = false;

  if (!fs.existsSync(manifest)) {
    return {imports, exports};
  }

  let tokens = tokenizeSync(manifest);
  for(let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type.label === 'export') {
      break;
    }

    if (token.type.label === 'import') {
      opened = true;
    } else if (token.type.label === ';') {
      opened = false;
      imports.push(buffer.join(' ') + ";");
      buffer = [];
    }
    if (opened) {
      let value = token.value;
      if (token.type.label === 'string') {
        value = "'" + value + "'";
      }
      buffer.push(value);
    }
  }

  opened = false;
  for(let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (opened && token.type.label === '}') {
      break;
    }

    if (token.type.label === 'export') {
      opened = true;
    }
    if (opened && token.type.label === 'name') {
      exports.push("  " + token.value + ',');
    }
  }

  return {imports, exports};
};

module.exports = {
  tokenizeSync,
  parseManifestSync
};
