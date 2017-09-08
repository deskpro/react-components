import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Scrollbars from 'react-custom-scrollbars';

/**
 * Wraps children with styled scrollbars.
 */
const Scrollbar = ({ className, children, ...props }) => (
  <Scrollbars
    className={classNames('dp-scrollbar', className)}
    autoHeight
    {...props}
    renderTrackVertical={p => <div {...p} className="dp-scrollbar__track-vertical" />}
    renderThumbVertical={p => <div {...p} className="dp-scrollbar__thumb-vertical" />}
    renderTrackHorizontal={p => <div {...p} className="dp-scrollbar__track-horizontal" />}
    renderThumbHorizontal={p => <div {...p} className="dp-scrollbar__thumb-horizontal" />}
  >
    {children}
  </Scrollbars>
);

Scrollbar.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Scrollbar.defaultProps = {
  className: '',
  children:  ''
};

export default Scrollbar;
