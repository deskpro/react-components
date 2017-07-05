import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from 'Components/Common/List';

/**
 * A unordered list which can be filtered and reduced by query values.
 */
export default class QueryableList extends React.Component {
  static propTypes = {
    /**
     * Filter list elements by name. When set to "@all" the entire list is displayed.
     */
    whereName: PropTypes.string
  };

  /**
   * Filters the children by the whereName prop value
   *
   * @param {Array} children
   * @returns {Array}
   */
  filter = (children) => {
    const whereName = this.props.whereName;
    if (!whereName || whereName == '@all') {
      return children;
    }
    return children.filter((child) => {
      return child.props !== undefined && child.props.name === whereName;
    });
  };

  render() {
    let { className, children, ...props} = this.props;
    delete props.whereName;
    children = React.Children.toArray(children);
    children = this.filter(children);

    return (
      <List className={classNames('dp-queryable-list', className)} {...props}>
        {children}
      </List>
    )
  }
}
