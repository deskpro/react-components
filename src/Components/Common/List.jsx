import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class List extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children:  PropTypes.node,
  };

  static defaultProps = {
    className: '',
    children:  ''
  };

  render() {
    const {
      children, className, innerRef, ...elementProps
    } = this.props;
    return (
      <ul
        className={classNames('dp-list', className)}
        ref={innerRef}
        {...elementProps}
      >
        {children}
      </ul>
    );
  }
}
export default React.forwardRef((props, ref) => <List innerRef={ref} {...props} />);
