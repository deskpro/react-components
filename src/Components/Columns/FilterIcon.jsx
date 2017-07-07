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
        onClick={() => popper.toggle(this)}
        className={classNames('dp-icon__filter', className)}
        {...props}
        />
    )
  }
}

