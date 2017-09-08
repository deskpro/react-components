import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders a generic page section which may be displayed or hidden.
 */
const Pane = ({ hidden, className, children, ...props }) => {
  const classes = classNames(
    'dp-pane',
    className,
    {
      'dp-pane--hidden': hidden
    }
  );

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

Pane.propTypes = {
  /**
   * Whether the pane is hidden.
   */
  hidden:    PropTypes.bool,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Pane.defaultProps = {
  hidden:    false,
  className: '',
  children:  ''
};

export default Pane;
