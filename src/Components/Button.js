import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    children:       PropTypes.node,
    className:      PropTypes.string,
    disabled:       PropTypes.bool,
    onClickOutside: PropTypes.func,
  };
  static defaultProps = {
    disabled: false,
    onClickOutside() {}
  };

  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    this.props.onClickOutside(event);
  }

  render() {
    const { className, children, ...elementProps } = this.props;
    // Remove props used by ConfirmButton
    const props = Object.assign({}, elementProps);
    delete props.onClickOutside;
    delete props.disableOnClickOutside;
    delete props.enableOnClickOutside;
    return (
      <button className={classNames('dp-button', className)} {...props}>
        {children}
      </button>
    );
  }
}
export default Button;
