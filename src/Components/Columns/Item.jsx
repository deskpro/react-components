import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'Components/utils/noop';
import { ListElement, Count } from 'Components/Common';
import ItemSettings from 'Components/Columns/ItemSettings';
import ItemFilter from 'Components/Columns/ItemFilter';
import Icon from 'Components/Icon';

const classPrefix = 'dp-drawer-item';

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
     * Number value to display inside the item.
     */
    count:     PropTypes.number,
    /**
     * Indicates whether the item is selected.
     */
    selected:  PropTypes.bool,
    /**
     * Called when the item is clicked.
     */
    onClick:   PropTypes.func,
    /**
     * Called when the item is selected.
     */
    onSelect:  PropTypes.func
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
    const { count, selected, className, children, ...props } = this.props;
    const classes = classNames(
      classPrefix,
      className,
      {
        [`${classPrefix}--selected`]: selected
      }
    );

    return (
      <ListElement className={classes} {...props}>
        <span className={`${classPrefix}__pos-left`}>
          {React.Children.map(children, (child) => {
            return child.type === Icon ? child : null;
          })}
        </span>
        <span className={`${classPrefix}__pos-middle`}>
          {React.Children.map(children, (child) => {
            return (typeof child === 'string' || child.type === ItemFilter) ? child : null;
          })}
        </span>
        <span className={`${classPrefix}__pos-right`}>
          {React.Children.map(children, (child) => {
            return (child.type === ItemSettings || child.type === Count) ? child : null;
          })}
          {count === undefined ? null : <Count value={count} />}
        </span>
      </ListElement>
    );
  }
}
