import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';

/**
 * Renders any text as a badge.
 */
const TextBadge = ({ type, children, className, ...props }) => (
  <div
    className={classNames('dp-badge', `dp-badge--${type}`, `dp-bg--${type}`, className)}
    {...objectKeyFilter(props, TextBadge.propTypes)}
  >
    {children}
  </div>
);

TextBadge.propTypes = {
  /**
   * The type of alert to display.
   */
  type:      PropTypes.oneOf(['default', 'success', 'info', 'warning', 'danger']),
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

TextBadge.defaultProps = {
  type:      'default',
  className: '',
  children:  []
};

export default TextBadge;
