import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'Components/utils/newid';
import noop from 'Components/utils/noop';
import { objectKeyFilter } from 'Components/utils/objects';
import { Heading, ListElement, ListToggleable } from 'Components/Common';
import Icon from 'Components/Icon';

/**
 * Component of the Drawer component.
 */
const DrawerInner = ({id, opened, children}) => (
  <div
    id={id}
    aria-hidden={!opened}
    className={classNames(
      'dp-column-drawer__body',
      {
        'dp-column-drawer__body--opened': opened
      }
    )}
    >
    {children}
  </div>
);

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
    this.isChanging = true;
    this.setState({
      opened: false
    });
  };

  /**
   * Opens the drawer
   */
  open = () => {
    this.isChanging = true;
    this.setState({
      opened: true
    });
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
    const { opened } = this.state;
    const { className, role, ...props } = this.props;

    return (
      <ListElement
        role={role}
        aria-expanded={opened}
        id={`dp-column-drawer-${this.id}`}
        className={classNames('dp-column-drawer', className)}
        {...objectKeyFilter(props, Drawer.propTypes)}
        >
        {this.renderHeading()}
        <DrawerInner id={`dp-column-drawer-body-${this.id}`} opened={opened}>
          {this.renderChildren()}
        </DrawerInner>
      </ListElement>
    )
  }

  renderHeading() {
    const { opened } = this.state;
    const props = {
      'onClick': this.toggle,
      'aria-label': `Click to ${opened ? "close" : "open"}.`,
      'aria-controls': `dp-column-drawer-body-${this.id}`
    };
    const icon = (
      <Icon
        key="icon"
        aria-hidden={true}
        className="dp-column-drawer__arrow"
        name={ opened ? "caret-up" : "caret-down" }
        title={ opened ? "Close" : "Open" }
        />
    );

    let heading = null;
    React.Children.forEach(this.props.children, (child) => {
      if (child.type === Heading) {
        let hChildren = React.Children.toArray(child.props.children);
        hChildren.push(icon);
        heading = React.cloneElement(child, props, hChildren);
      }
    });
    if (!heading) {
      heading = (
        <Heading {...props}>
          &nbsp;
          {icon}
        </Heading>
      )
    }

    return heading;
  }

  renderChildren() {
    return React.Children.map(
      this.props.children,
      child => (child.type !== Heading) ? child : null
    );
  }
}
