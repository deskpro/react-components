import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from 'Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders a date picker using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const DatepickerField = ({ input, ...props }) => (
  <FieldGroup {...props}>
    <Forms.Datepicker {...input} onSelect={input.onChange} />
  </FieldGroup>
);

DatepickerField.propTypes = {
  /**
   * Passed to the field by redux-form.
   */
  input: PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const Datepicker = ({ parse, ...props }) => {
  // Redux Form expects values to be strings, but the value of Forms.Datepicker
  // is a Date object. Parse the date into a string unless the parse prop has already
  // been provided.
  const valueParse = parse || (value => String(value));

  return (
    <Field {...props} component={DatepickerField} parse={valueParse} />
  );
};

Datepicker.propTypes = {
  /**
   * Parses the value given from the field input component to the type that
   * you want stored in the Redux store.
   */
  parse: PropTypes.func
};

Datepicker.defaultProps = {
  parse: undefined
};

export default Datepicker;
