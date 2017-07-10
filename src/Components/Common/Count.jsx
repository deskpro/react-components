import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { numberFormat, THOUSANDTHS_SEPARATOR } from 'Components/utils/numbers';

/**
 * Renders a number as an inline element with thousandths formatting.
 */
const Count = ({ separator, children, className, ...props}) => (
  <span className={classNames('dp-count', className)} {...props}>
    {numberFormat(children, separator)}
  </span>
);

Count.propTypes = {
  /**
   * Character to use as the thousandths separator.
   */
  separator: PropTypes.string
};

Count.defaultProps = {
  separator: THOUSANDTHS_SEPARATOR
};

export default Count;
