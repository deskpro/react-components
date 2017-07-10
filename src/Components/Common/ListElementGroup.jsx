import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import List from 'Components/Common/List';
import ListElement from 'Components/Common/ListElement';

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
  name: PropTypes.string.isRequired
};

export default ListElementGroup;
