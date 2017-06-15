import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Label extends React.Component {
  static propTypes = {
    editable: PropTypes.bool,
    children: PropTypes.node,
    onClose:  PropTypes.func
  };

  render() {
    const { children, editable, onClose, ...elementProps } = this.props;
    return (
      <span
        className={classNames('dp-label', { editable })}
        {...elementProps}
      >
        {children}
        { editable ? <span onClick={onClose}><i className="dp-label__close fa fa-close" /></span> : null }
      </span>
    );
  }
}
export default Label;
