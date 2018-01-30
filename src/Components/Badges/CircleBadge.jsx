import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import TextBadge from 'Components/Badges/TextBadge';

/**
 * Circle shaped badge designed to display small numbers.
 */
const CircleBadge = ({
  max, children, className, ...props
}) => {
  const childArray = React.Children.toArray(children);
  if (childArray.length !== 1) {
    throw new Error('CircleBadge may only contain a single child.');
  }
  let childNumber = childArray[0];
  if (childNumber > max) {
    childNumber = `${max}+`;
  }

  return (
    <TextBadge
      className={classNames('dp-circle-badge', className)}
      {...objectKeyFilter(props, CircleBadge.propTypes)}
    >
      {childNumber}
    </TextBadge>
  );
};

CircleBadge.propTypes = {
  /**
   * Truncate numbers higher than this value.
   */
  max:       PropTypes.number,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

CircleBadge.defaultProps = {
  max:       99,
  className: '',
  children:  ''
};

export default CircleBadge;
