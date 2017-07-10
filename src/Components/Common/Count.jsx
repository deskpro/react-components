import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { numberFormat, THOUSANDTHS_SEPARATOR } from 'Components/utils/numbers';

/**
 * Renders a number with thousandths formatting.
 */
const Count = ({value, separator, className, ...props}) => (
  <div className={classNames('dp-count', className)} {...props}>
    {numberFormat(value, separator)}
  </div>
);

Count.propTypes = {
  /**
   * Number to format and display.
   */
  value: PropTypes.number.isRequired,
  /**
   * Character to use as the thousandths separator.
   */
  separator: PropTypes.string
};

Count.defaultProps = {
  separator: THOUSANDTHS_SEPARATOR
};

export default Count;
