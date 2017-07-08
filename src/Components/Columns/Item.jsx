import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'Components/utils/noop';
import { ListElement } from 'Components/Common';

/**
 * Standard drawer item which may display and number.
 */
export default class Item extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Text to display inside of the item.
     */
    label: PropTypes.string,
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
    onClick: PropTypes.func,
    /**
     * Called when the item is selected.
     */
    onSelect: PropTypes.func
  };

  static defaultProps = {
    selected: false,
    onClick:  noop,
    onSelect: noop
  };

  componentDidUpdate(prevProps) {
    const selected = this.props.selected;
    if (prevProps.selected !== selected) {
      this.props.onSelect(selected, this);
    }
  }

  render() {
    const { label, count, selected, className, children, ...props } = this.props;
    const classes = classNames(
      'dp-column-item',
      className,
      {
        'dp-drawer-item--selected': selected
      }
    );

    return (
      <ListElement className={classes} {...props}>
        {count === undefined ? null : (
          <div className="dp-drawer-item__count">
            {count}
          </div>
        )}
        <div className="dp-drawer-item__body">
          {label}
          {children}
        </div>
      </ListElement>
    );
  }
}
