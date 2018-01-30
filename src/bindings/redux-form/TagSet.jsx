import React from 'react';
import PropTypes from 'prop-types';
import { Field, fieldPropTypes } from 'redux-form';
import * as Forms from 'Components/Forms';
import FieldGroup from './FieldGroup';

/**
 * Renders a tag set using @deskpro/react-components and redux-form.
 *
 * @see https://redux-form.com/7.0.4/docs/api/field.md/#2-a-stateless-function
 */
export const TagSetField = ({
  options, tags, input, ...props
}) => (
  <FieldGroup {...props}>
    <Forms.TagSet {...input} options={options} tags={tags} />
  </FieldGroup>
);

TagSetField.propTypes = {
  /**
   * List of dropdown values.
   */
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * Current value
   */
  tags:    PropTypes.array.isRequired,
  /**
   * Passed to the field by redux-form.
   */
  input:   PropTypes.shape(fieldPropTypes.input).isRequired
};

TagSetField.defaultProps = {
  options: []
};

/**
 * Connects the field to the Redux store.
 */
const TagSet = props => (
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
   * The name of the form field.
   */
  name:     PropTypes.string.isRequired,
  /**
   * Called when the select value changes.
   */
  onChange: PropTypes.func
};

TagSet.defaultProps = {
  onChange: () => {}
};

export default TagSet;
