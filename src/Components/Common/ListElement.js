import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ListElement extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children:  PropTypes.node,
  };

  render() {
    const { children, className, ...elementProps } = this.props;
    return (
      <li
        className={classNames('dp-list__element', className)}
        {...elementProps}
      >
        {children}
      </li>
    );
  }
}
export default ListElement;
