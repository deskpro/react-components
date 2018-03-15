import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'utils/newid';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import { Heading, ListElement } from 'Components/Common';
import Icon from 'Components/Icon';

/**
 * Component of the Drawer component.
 */
const DrawerInner = ({ id, opened, children }) => (
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

DrawerInner.propTypes = {
  id:       PropTypes.string,
  opened:   PropTypes.bool,
  children: PropTypes.node
};

DrawerInner.defaultProps = {
  id:       '',
  opened:   false,
  children: ''
};

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
     * Children to render.
     */
    children:  PropTypes.node,
    /**
     * The aria role.
     */
    role:      PropTypes.string,
    /**
     * ID to assign to the element.
     */
    id:        PropTypes.string,
    /**
     * When true the drawer will render opened.
     */
    opened:    PropTypes.bool,
    /**
     * Called when the drawer is opened or closed.
     */
    onChange:  PropTypes.func
  };

  static defaultProps = {
    id:        '',
    role:      'treeitem',
    opened:    true,
    onChange:  noop,
    className: '',
    children:  ''
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
    if (this.state.opened) {
      this.close();
    } else {
      this.open();
    }
  };

  /**
   * Returns true when the drawer is open, false otherwise
   *
   * @returns {boolean}
   */
  isOpen = () => this.state.opened;


  renderHeading() {
    const { opened } = this.state;
    const props = {
      'aria-label':    `Click to ${opened ? 'close' : 'open'}.`,
      'aria-controls': `dp-column-drawer-body-${this.id}`,
      onClick:         this.toggle
    };
    const icon = (
      <Icon
        key="icon"
        aria-hidden
        onClick={this.toggle}
        className="dp-column-drawer__arrow"
        name={opened ? 'caret-up' : 'caret-down'}
        title={opened ? 'Close' : 'Open'}
      />
    );

    let heading = null;
    React.Children.forEach(this.props.children, (child) => {
      if (child.type === Heading) {
        const hChildren = React.Children.toArray(child.props.children);
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
      );
    }

    return heading;
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => ((child.type !== Heading) ? child : null));
  }

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
    );
  }
}
