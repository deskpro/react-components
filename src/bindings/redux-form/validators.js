/* eslint-disable arrow-body-style */

/**
 * Validate the given value is not empty
 */
export const required = value => (value ? undefined : 'Required');

/**
 * Validates the input value contains fewer than max characters
 *
 * @param {number} max Max number of characters
 */
export const maxLength = max => (value) => {
  return (value && value.length > max)
    ? `Must be ${max} characters or less`
    : undefined;
};

/**
 * Validates the input value contains more than min characters
 *
 * @param {number} min Min number of characters
 */
export const minLength = min => (value) => {
  return (value && value.length < min)
    ? `Must be ${min} characters or more`
    : undefined;
};

/**
 * Validates the input value only contains alpha-numeric characters
 */
export const alphaNumeric = (value) => {
  return (value && /[^a-zA-Z0-9]/i.test(value))
    ? 'Only alphanumeric characters'
    : undefined;
};

/**
 * Validates the input value only contains alpha characters
 */
export const alpha = (value) => {
  return (value && /[^a-zA-Z]/i.test(value))
    ? 'Only alpha characters'
    : undefined;
};

/**
 * Validates the input value only contains numeric characters
 */
export const numeric = (value) => {
  return (value && /[^0-9]/i.test(value))
    ? 'Only numeric characters'
    : undefined;
};

/**
 * Validates the input value is a valid email address
 */
export const email = (value) => {
  return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    ? 'Invalid email address'
    : undefined;
};

/**
 * Validates that the input value matches against the given regular expression
 *
 * @param {RegExp} rx A regular expression
 */
export const regexp = rx => (value) => {
  return (value && !(rx.test(value)))
    ? 'Invalid value'
    : undefined;
};
