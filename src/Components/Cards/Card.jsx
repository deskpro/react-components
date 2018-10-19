import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from '../../utils/objects';

/**
 * Renders a standard card.
 */
const Card = ({ className, children, ...props }) => (
  <div
    className={classNames('dp-card', className)}
    {...objectKeyFilter(props, Card.propTypes)}
  >
    {children}
  </div>
);

Card.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Card.defaultProps = {
  className: '',
  children:  ''
};

export default Card;
