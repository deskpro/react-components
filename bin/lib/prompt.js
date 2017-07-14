'use strict';

const readline = require('readline');

/**
 * Prompts the user for a yes or no answer
 *
 * Examples:
 * Prompt the user and make 'yes' the default.
 *
 * ```
 * promptYN('Do the thing?', 'yes', (answer) => {
 *  if (answer === 'no') {
 *    return;
 *  }
 *  doTheThing();
 * });
 * ```
 *
 * Prompt the user and make 'no' the default.
 *
 * ```
 * promptYN('Do the thing?', 'no', (answer) => {
 *  if (answer === 'no') {
 *    return;
 *  }
 *  doTheThing();
 * });
 * ```
 *
 * Prompt the user and make 'yes' the default.
 *
 * ```
 * promptYN('Do the thing?', (answer) => {
 *  if (answer === 'no') {
 *    return;
 *  }
 *  doTheThing();
 * });
 * ```
 *
 * @param {string} message      Prompt message
 * @param {string|function} def Default value, either 'yes' or 'no', defaults to 'yes'
 * @param {function} [cb]       Function which receives the answer, either 'yes' or 'no'
 */
function promptYN(message, def, cb) {
  if (typeof def === 'function') {
    cb  = def;
    def = 'yes';
  }
  let options = '[Y/n]';
  if (def === 'no') {
    options = '[y/N]';
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(`${message} ${options} `, (answer) => {
    rl.close();
    answer = answer.toLowerCase();
    if (['y', 'n', 'yes', 'no', ''].indexOf(answer) === -1) {
      console.error('Answer must be "y" or "n" or empty.');
      return promptYN(message, cb);
    }
    if (answer === 'y') {
      answer = 'yes';
    } else if (answer === 'n') {
      answer = 'no';
    } else if (!answer) {
      answer = def;
    }

    cb(answer);
  });
}

module.exports = {
  promptYN
};
