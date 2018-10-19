import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from '../../Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders a textarea using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const TextareaField = ({ input, autosize, ...props }) => (
  <FieldGroup {...props}>
    <Forms.Textarea {...input} autosize={autosize} />
  </FieldGroup>
);

TextareaField.propTypes = {
  /**
   * Passed to the field by redux-form.
   */
  input:    PropTypes.shape(fieldPropTypes.input).isRequired,
  /**
   * Set if you want to have autosizing textarea
   */
  autosize: PropTypes.bool
};

TextareaField.defaultProps = {
  autosize: false
};

/**
 * Connects the field to the Redux store.
 */
const Textarea = props => (
  <Field {...props} component={TextareaField} />
);

export default Textarea;
