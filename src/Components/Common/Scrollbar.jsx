import React from 'react';
import ReactDOM from 'react-dom';
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
    renderTrackVertical={props => <div {...props} className="dp-scrollbar__track-vertical" />}
    renderThumbVertical={props => <div {...props} className="dp-scrollbar__thumb-vertical" />}
    renderTrackHorizontal={props => <div {...props} className="dp-scrollbar__track-horizontal" />}
    renderThumbHorizontal={props => <div {...props} className="dp-scrollbar__thumb-horizontal" />}
  >
    {children}
  </Scrollbars>
);

export default Scrollbar;
