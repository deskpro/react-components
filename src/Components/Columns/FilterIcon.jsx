import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'Components/Icon';

/**
 * Blue filter icon.
 */
const FilterIcon = ({className, ...props}) => (
  <Icon
    name="filter"
    className={classNames('dp-icon__filter', className)}
    {...props}
    />
);

export default FilterIcon;
