import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenComponentType } from 'Components/utils/props';
import Drawer from 'Components/Columns/Drawer';
import Icon from 'Components/Icon';

/**
 * A navigation column containing expandable drawers.
 */
export default class Column extends React.Component {
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
     * The heading text.
     */
    heading: PropTypes.string.isRequired,
    /**
     * Icon element to display in the header.
     */
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /**
     * When true only one drawer may be open at one time. Other drawers will close
     * when one is opened.
     */
    accordion: PropTypes.bool,
    /**
     * One or more ColumnDrawer components.
     */
    children: childrenComponentType(Drawer)
  };

  static defaultProps = {
    role:      "tree",
    accordion: false
  };

  componentDidMount() {
    if (this.props.accordion) {
      this.closeDrawers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.accordion && !this.props.accordion) {
      this.closeDrawers();
    }
  }

  handleDrawerChange = (drawer) => {
    if (this.props.accordion && drawer.isOpen()) {
      for (var ref in this.refs) {
        if (this.refs.hasOwnProperty(ref)) {
          this.refs[ref].close();
        }
      }
      drawer.open();
    }
  };

  /**
   * Closes all but the first opened drawer
   */
  closeDrawers() {
    let firstOpened = null;
    for (var ref in this.refs) {
      if (this.refs.hasOwnProperty(ref)) {
        if (this.refs[ref].isOpen() && firstOpened === null) {
          firstOpened = this.refs[ref];
        }
        this.refs[ref].close();
      }
    }
    if (firstOpened !== null) {
      firstOpened.open();
    }
  }

  render() {
    const {
      children,
      className,
      role,
      heading,
      icon,
      accordion,
      ...props
    } = this.props;
    
    return (
      <ul className={classNames('dp-column', className)} role={role} {...props}>
        <li className="dp-column__head">
          {typeof icon === 'string' ? <Icon name={icon} /> : icon}
          <h3 className="dp-column__heading">
            {heading}
          </h3>
        </li>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            ref: `drawer_${i}`,
            onChange: this.handleDrawerChange
          });
        })}
      </ul>
    );
  }
}

