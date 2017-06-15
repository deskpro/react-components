import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'Components/utils/newid';
import noop from 'Components/utils/noop';
import { ListToggleable } from 'Components/Common';
import Icon from 'Components/Icon';

/**
 * An expandable drawer within a navigation column.
 */
export default class Drawer extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * The aria role.
     */
    role: PropTypes.string,
    /**
     * ID to assign to the element.
     */
    id: PropTypes.string,
    /**
     * The heading text.
     */
    heading: PropTypes.string.isRequired,
    /**
     * The subheading text.
     */
    subheading: PropTypes.string,
    /**
     * Number value to display inside the item.
     */
    count: PropTypes.number,
    /**
     * When true the drawer will render opened.
     */
    opened: PropTypes.bool,
    /**
     * Called when the drawer is opened or closed.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    role:     "treeitem",
    opened:   true,
    onChange: noop
  };

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened
    };

    this.isChanging = false;
    this.id = (props.id) ? props.id : newId('');
  }

  componentDidUpdate() {
    if (this.isChanging) {
      this.props.onChange(this);
      this.isChanging = false;
    }
  }

  /**
   * Closes the drawer
   */
  close = () => {
    if (React.Children.count(this.props.children) > 0) {
      this.isChanging = true;
      this.setState({
        opened: false
      });
    }
  };

  /**
   * Opens the drawer
   */
  open = () => {
    if (React.Children.count(this.props.children) > 0) {
      this.isChanging = true;
      this.setState({
        opened: true
      });
    }
  };

  /**
   * Toggles the drawer open or closed
   */
  toggle = () => {
    this.state.opened ? this.close() : this.open();
  };

  /**
   * Returns true when the drawer is open, false otherwise
   *
   * @returns {boolean}
   */
  isOpen = () => {
    return this.state.opened;
  };

  render() {
    const {
      children,
      className,
      heading,
      subheading,
      count,
      ...elementProps
    } = this.props;
    let props = Object.assign({}, elementProps);
    delete props.opened;
    delete props.onChange;

    const { opened } = this.state;
    const isOpenable = React.Children.count(children) > 0;

    return (
      <li
        {...props}
        aria-expanded={opened}
        id={`dp-drawer-${this.id}`}
        className={classNames('dp-drawer', className)}
        >
        <ul className="dp-drawer__inner">
          {/* Head */}
          <li
            onClick={this.toggle}
            aria-controls={`dp-drawer-body-${this.id}`}
            aria-label={`Click to ${opened ? "close" : "open"}.`}
            className={classNames(
              'dp-drawer__head',
              {
                'dp-drawer__head--openable': isOpenable
              }
            )}
            >
            <h4 className="dp-drawer__heading">
              {heading}
              {count === undefined ? null : (
                <span className="dp-drawer__count">({count})</span>
              )}
            </h4>
            {!isOpenable ? null : (
              <Icon
                aria-hidden={true}
                className="dp-drawer__arrow"
                name={ opened ? "caret-up" : "caret-down" }
                title={ opened ? "Close" : "Open" }
                />
            )}
          </li>
          {/* Body */}
          {!isOpenable ? null : (
            <li
              id={`dp-drawer-body-${this.id}`}
              aria-hidden={!opened}
              className={classNames(
                'dp-drawer__body',
                {
                  'dp-drawer__body--opened': opened
                }
              )}
              >
              {subheading === undefined ? null : (
                <h5 className="dp-drawer__subheading">
                  {subheading}
                </h5>
              )}
              {/* Items */}
              <ListToggleable on="click" toggle="selected" className="dp-drawer__children" role="group">
                {children}
              </ListToggleable>
            </li>
          )}
        </ul>
      </li>
    );
  }
}
