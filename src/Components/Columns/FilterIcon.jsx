import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'Components/Icon';

/**
 * Blue filter icon.
 */
export default class FilterIcon extends React.Component {
  render() {
    const { popper, className, ...props } = this.props;

    return (
      <Icon
        name="filter"
        onClick={(e) => {
          popper.toggle(this);
          e.stopPropagation();
        }}
        className={classNames('dp-icon__filter', className)}
        {...props}
      />
    );
  }
}

