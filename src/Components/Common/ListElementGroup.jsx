import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from './List';
import ListElement from './ListElement';

/**
 * Groups a collection of ListElement components.
 */
const ListElementGroup = ({ className, children, ...props }) => (
  <ListElement className={classNames('dp-list__element__group', className)} {...props}>
    <List>
      {children}
    </List>
  </ListElement>
);

ListElementGroup.propTypes = {
  /**
   * Name of the group.
   */
  name:      PropTypes.string.isRequired,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node,
};

ListElementGroup.defaultProps = {
  className: '',
  children:  ''
};

export default ListElementGroup;
