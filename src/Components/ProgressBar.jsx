import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders the bar inside of a progress bar
 */
const ProgressBar = ({
  percent, className, children, ...props
}) => (
  <div
    style={{ width: `${percent}%` }}
    className={classNames('dp-progress__bar', className)}
    {...props}
  >
    {children}
  </div>
);

ProgressBar.propTypes = {
  /**
   * The type of progress bar to render.
   */
  type:      PropTypes.string,
  /**
   * The percentage complete.
   */
  percent:   PropTypes.number,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

ProgressBar.defaultProps = {
  percent:   0,
  type:      'primary',
  className: '',
  children:  ''
};

export default ProgressBar;
