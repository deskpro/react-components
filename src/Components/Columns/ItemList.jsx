import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';
import { ToggleableList } from '../Common';

const ItemList = ({ className, children, ...props }) => (
  <ToggleableList
    on="click"
    toggle="selected"
    whenType={Item}
    className={classNames('dp-drawer-item-list', className)}
    {...props}
  >
    {children}
  </ToggleableList>
);

ItemList.propTypes = {
  className: PropTypes.string,
  children:  PropTypes.node
};

ItemList.defaultProps = {
  className: '',
  children:  ''
};

export default ItemList;
