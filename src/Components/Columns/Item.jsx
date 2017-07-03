import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'Components/utils/noop';
import { ListElement } from 'Components/Common';
import Icon from 'Components/Icon';

/**
 * Standard drawer item which may contain an icon and number.
 */
export default class Item extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Icon element to display in the item.
     */
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /**
     * Number value to display inside the item.
     */
    count: PropTypes.number,
    /**
     * Indicates whether the item is selected.
     */
    selected: PropTypes.bool,
    /**
     * Called when the item is clicked.
     */
    onClick: PropTypes.func
  };

  static defaultProps = {
    selected: false,
    onClick:  noop
  };

  render() {
    const { icon, count, selected, className, children, ...props } = this.props;
    const classes = classNames(
      'dp-drawer-item',
      className,
      {
        'dp-drawer-item--selected': selected
      }
    );

    return (
      <li className={classes} {...props}>
        {icon === undefined ? null : (
          <div className="dp-drawer-item__icon">
            {typeof icon === 'string' ? <Icon name={icon} /> : icon}
          </div>
        )}
        {count === undefined ? null : (
          <div className="dp-drawer-item__count">
            {count}
          </div>
        )}
        <div className="dp-drawer-item__body">
          {children}
        </div>
      </li>
    );
  }
}
