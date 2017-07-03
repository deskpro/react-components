import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'Components/Icon';

class Label extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    editable:  PropTypes.bool,
    children:  PropTypes.node,
    onClose:   PropTypes.func
  };

  render() {
    const { children, editable, onClose, className, ...elementProps } = this.props;
    return (
      <span
        className={classNames('dp-label', className, { editable })}
        {...elementProps}
      >
        {children}
        { editable ? <span onClick={onClose}><Icon name="close" className="dp-label__close" /></span> : null }
      </span>
    );
  }
}
export default Label;
