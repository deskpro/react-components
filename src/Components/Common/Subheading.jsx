import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Represents a sub heading element.
 */
const Subheading = ({ size, children, className, ...props }) => {
  props.className = classNames('dp-subheading', className);
  return React.createElement(`h${size}`, props, children);
};

Subheading.propTypes = {
  /**
   * A value from 1 to 6 indicating the type of header to use, e.g. h1, h2, h3, etc.
   */
  size:      PropTypes.number,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node,
};

Subheading.defaultProps = {
  size:      2,
  className: '',
  children:  ''
};

export default Subheading;
