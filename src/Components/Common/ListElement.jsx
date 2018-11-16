import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ListElement extends React.Component {
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
      <li
        className={classNames('dp-list__element', className)}
        ref={innerRef}
        {...elementProps}
      >
        {children}
      </li>
    );
  }
}
export default React.forwardRef((props, ref) => <ListElement innerRef={ref} {...props} />);
