import React from 'react';
import PropTypes from 'prop-types';
import Group from 'Components/Forms/Group';
import { fieldPropTypes } from 'redux-form';

/**
 * Renders a form group using @deskpro/react-components and redux-form.
 */
const FieldGroup = ({
  label, meta, children, ...props
}) => (
  <Group label={label} error={meta.touched ? meta.error : ''} {...props}>
    {children}
  </Group>
);

FieldGroup.propTypes = {
  /**
   * Passed to the input element by redux-form.
   */
  meta:     PropTypes.shape(fieldPropTypes.meta).isRequired,
  /**
   * Value used for the form label.
   */
  label:    PropTypes.string,
  /**
   * Children to render.
   */
  children: PropTypes.node
};

FieldGroup.defaultProps = {
  label:    '',
  children: ''
};

export default FieldGroup;
