import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from 'Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders a tag set using deskpro-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const TagSetField = ({ options, input, ...props }) => (
  <FieldGroup {...props}>
    <Forms.TagSet {...input} options={options} tags={props.tags} />
  </FieldGroup>
);

TagSetField.propTypes = {
  /**
   * List of dropdown values.
   */
  options: Forms.Select.propTypes.options, // eslint-disable-line
  /**
   * Current value
   */
  tags:    Forms.TagSet.propTypes.tags,    // eslint-disable-line
  /**
   * Passed to the field by redux-form.
   */
  input:   PropTypes.shape(fieldPropTypes.input).isRequired
};

/**
 * Connects the field to the Redux store.
 */
const TagSet = ({ parse, ...props }) => (
  <Field
    {...props}
    component={TagSetField}
    onChange={(value) => {
      props.onChange(
        Object.values(value).filter(v => typeof v !== 'function'),
        props.name
      );
    }}
  />
);

TagSet.propTypes = {
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

TagSet.defaultProps = {
  parse:    undefined,
  onChange: () => {}
};

export default TagSet;
