import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from 'Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders a checkbox element using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const CheckboxField = ({ input: { value, ...rest }, ...props }) => (
  <FieldGroup {...props}>
    <Forms.Checkbox checked={!!value} {...rest} />
  </FieldGroup>
);

CheckboxField.propTypes = {
  /**
   * Passed to the field by redux-form.
   */
  input: PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const Checkbox = props => (
  <Field {...props} component={CheckboxField} />
);

export default Checkbox;
