import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from 'Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders an input element using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const InputField = ({ input, ...props }) => (
  <FieldGroup {...props}>
    <Forms.Input {...input} />
  </FieldGroup>
);

InputField.propTypes = {
  /**
   * Passed to the field by redux-form.
   */
  input: PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const Input = props => (
  <Field
    {...props}
    component={InputField}
    onChange={(value) => {
      props.onChange(
        Object.values(value).filter(v => typeof v !== 'function').join(''),
        props.name
      );
    }}
  />
);

Input.propTypes = {
  /**
   * The name of the form field.
   */
  name:     PropTypes.string.isRequired,
  /**
   * Called when the select value changes.
   */
  onChange: PropTypes.func
};

Input.defaultProps = {
  onChange: () => {}
};

export default Input;
