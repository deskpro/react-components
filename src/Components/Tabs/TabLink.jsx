import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';

/**
 * Renders a link in a tab group.
 */
const TabLink = ({ name, active, onClick, children, className, ...props }) => {
  const classes = classNames(
    'dp-tabs__tab',
    className,
    {
      'dp-tabs__tab--active': active
    }
  );

  return (
    <li className={classes} {...props} onClick={() => { onClick(name); }}>
      {children}
    </li>
  );
};

TabLink.propTypes = {
  /**
   * The name of the tab.
   */
  name:      PropTypes.string.isRequired,
  /**
   * Whether or not the tab is active.
   */
  active:    PropTypes.bool,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node,
  /**
   * Called when the link is clicked. Receives the name of the tab.
   */
  onClick:   PropTypes.func
};

TabLink.defaultProps = {
  active:  false,
  onClick: noop
};

export default TabLink;
