import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from 'Components/Forms/Label';

/**
 * Groups a label and form children together.
 */
const Group = ({ label, htmlFor, className, children, ...props }) => (
  <div className={classNames('dp-form-group', className)} {...props}>
    {label && <Label htmlFor={htmlFor}>
      {label}
    </Label>}
    {children}
  </div>
);

Group.propTypes = {
  /**
   * Value for the group label.
   */
  label:     PropTypes.string,
  /**
   * ID of the child the label belongs to.
   */
  htmlFor:   PropTypes.string,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Group.defaultProps = {
  label:     '',
  htmlFor:   '',
  className: '',
  children:  ''
};

export default Group;
