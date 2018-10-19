import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from '../../utils/objects';
import List from './List';

/**
 * A unordered list which can be filtered by query values.
 */
export default class QueryableList extends React.Component {
  static propTypes = {
    /**
     * Filter list elements by name. When set to "@all" the entire list is displayed.
     */
    whereName: PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node,
  };

  static defaultProps = {
    whereName: '',
    className: '',
    children:  ''
  };

  /**
   * Filters the children by the whereName prop value
   *
   * @param {Array} children
   * @returns {Array}
   */
  filter = (children) => {
    const { whereName } = this.props;
    if (!whereName || whereName === '@all') {
      return children;
    } else if (whereName === '@none') {
      return [];
    }

    return children.filter(child => child.props !== undefined && child.props.name === whereName);
  };

  render() {
    const { className, children, ...props } = this.props;
    const childrenArray = React.Children.toArray(children);

    return (
      <List
        className={classNames('dp-queryable-list', className)}
        {...objectKeyFilter(props, QueryableList.propTypes)}
      >
        {this.filter(childrenArray)}
      </List>
    );
  }
}
