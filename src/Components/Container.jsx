import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders a container.
 */
const Container = ({ className, children, ...props }) => (
  <div className={classNames('up-container', className)} {...props}>
    {children}
  </div>
);

Container.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Container.defaultProps = {
  className: '',
  children:  []
};

export default Container;
