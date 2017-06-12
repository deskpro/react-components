import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Label extends React.Component {
  static propTypes = {
    editable: PropTypes.bool,
    children: PropTypes.node,
  };

  handleClose = () => {

  };

  render() {
    const { children, editable, ...elementProps } = this.props;
    return (
      <span
        className={classNames('dp-label', { editable })}
        {...elementProps}
      >
        {children}
        { editable ? <span onClick={this.handleClose}><i className="dp-label__close fa fa-close" /></span> : null }
      </span>
    );
  }
}
export default Label;
