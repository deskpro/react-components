import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'Components/Common';

/**
 * A container for one or more drawers.
 */
export default class DrawerList extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * The aria role.
     */
    role:      PropTypes.string,
    /**
     * One or more ColumnDrawer components.
     */
    children:  PropTypes.node
  };

  static defaultProps = {
    role:      'tree',
    className: '',
    children:  ''
  };

  render() {
    const {
      role,
      children,
      className,
      ...props
    } = this.props;

    return (
      <List
        role={role}
        className={classNames('dp-column-drawer-list', className)}
        {...props}
      >
        {children}
      </List>
    );
  }
}
