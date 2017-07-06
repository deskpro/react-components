import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'Components/utils/newid';
import noop from 'Components/utils/noop';
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
    const { className, role, ...elementProps } = this.props;
    let props = Object.assign({}, elementProps);
    delete props.opened;
    delete props.isSubDrawer;
    delete props.onChange;
    delete props.onClick;

    return (
      <ListElement
        {...props}
        role={role}
        aria-expanded={opened}
        id={`dp-column-drawer-${this.id}`}
        className={classNames('dp-column-drawer', className)}
        >
        {this.renderHeading()}
        <DrawerInner id={`dp-column-drawer-body-${this.id}`} opened={opened}>
          {this.renderChildren()}
        </DrawerInner>
      </ListElement>
    )
  }

  renderHeading() {
    let heading = null;
    const { opened } = this.state;
    const { children, isSubDrawer } = this.props;

    React.Children.forEach(children, (child) => {
      if (child.type === Heading) {
        heading = (
          <Heading
            onClick={this.toggle}
            aria-controls={`dp-column-drawer-body-${this.id}`}
            aria-label={`Click to ${opened ? "close" : "open"}.`}
          >
            {child.props.children}
            {isSubDrawer ? null : (
              <Icon
                aria-hidden={true}
                className="dp-column-drawer__arrow"
                name={ opened ? "caret-up" : "caret-down" }
                title={ opened ? "Close" : "Open" }
                />
            )}
          </Heading>
        );
      }
    });

    return heading;
  }

  renderChildren() {
    return React.Children.map(
      this.props.children,
      child => (child.type !== Heading) ? child : null
    );
  }
}
