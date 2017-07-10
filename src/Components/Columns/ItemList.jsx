import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Drawer, Item } from 'Components/Columns';
import { ToggleableList } from 'Components/Common';

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

export default ItemList;
