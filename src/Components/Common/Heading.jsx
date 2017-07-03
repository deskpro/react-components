import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A generic header element.
 */
const Heading = ({size, className, ...props}) => {
  props.className = classNames('dp-heading', className);
  return React.createElement(`h${size}`, props);
};

Heading.propTypes = {
  /**
   * A value from 1 to 6 indicating the type of header to use, e.g. h1, h2, h3, etc.
   */
  size: PropTypes.number,

  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string
};

Heading.defaultProps = {
  size: 1
};

export default Heading;
