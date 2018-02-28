import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from 'Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders a select element using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const SelectField = ({ options, input, ...props }) => (
  <FieldGroup {...props}>
    <Forms.Select
      {...input}
      options={options}
      onBlur={() => {}}
    />
  </FieldGroup>
);

SelectField.propTypes = {
  /**
   * List of dropdown values.
   */
  options: Forms.Select.propTypes.options, // eslint-disable-line
  /**
   * Passed to the field by redux-form.
   */
  input:   PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const Select = ({ parse, ...props }) => {
  // Redux Form expects values to be strings, but the value of Forms.Select
  // is an object with { label: string, value: string }. Parse the value to
  // return the value part of the object unless the parse prop has already
  // been provided.
  const valueParse = parse || (value => value.value);

  return (
    <Field
      {...props}
      parse={valueParse}
      component={SelectField}
      onChange={(value) => {
        props.onChange(value.value, props.name);
      }}
    />
  );
};

Select.propTypes = {
  /**
   * Parses the value given from the field input component to the type that
   * you want stored in the Redux store.
   */
  parse:    PropTypes.func,
  /**
   * The name of the form field.
   */
  name:     PropTypes.string.isRequired,
  /**
   * Called when the select value changes.
   */
  onChange: PropTypes.func
};

Select.defaultProps = {
  parse:    undefined,
  onChange: () => {}
};

export default Select;
