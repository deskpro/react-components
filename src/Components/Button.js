import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    children:  PropTypes.node,
    className: PropTypes.string,
    disabled:  PropTypes.bool
  };
  static defaultProps = {
    disabled: false
  };

  render() {
    const { className, children, ...elementProps } = this.props;
    return (
      <button className={classNames('dp-button', className)} {...elementProps}>
        {children}
      </button>
    );
  }
}
export default Button;
