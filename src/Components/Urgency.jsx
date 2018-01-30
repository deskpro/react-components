import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';

/**
 * Displays a message in a box which is colored to match an urgency level between 1 and 10
 */
const Urgency = ({
  level, className, children, ...props
}) => (
  <div
    className={classNames('dp-urgency', `dp-urgency__level-${level}`, className)}
    {...objectKeyFilter(props, Urgency.propTypes)}
  >
    {children}
  </div>
);

Urgency.propTypes = {
  /**
   * A number between 1 and 10 representing the urgency level.
   */
  level:     PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).isRequired,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Urgency.defaultProps = {
  className: '',
  children:  ''
};

export default Urgency;
