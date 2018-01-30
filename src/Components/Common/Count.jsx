import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { numberFormat, THOUSANDTHS_SEPARATOR } from 'utils/numbers';

/**
 * Renders a number as an inline element with thousandths formatting.
 */
const Count = ({
  separator, children, className, ...props
}) => (
  <span className={classNames('dp-count', className)} {...props}>
    {numberFormat(children, separator)}
  </span>
);

Count.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Character to use as the thousandths separator.
   */
  separator: PropTypes.string,
  /**
   * One or more components.
   */
  children:  PropTypes.node,
};

Count.defaultProps = {
  separator: THOUSANDTHS_SEPARATOR,
  className: '',
  children:  ''
};

export default Count;
