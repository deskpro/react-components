import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'Components/Icon';

/**
 * A header element which can be displayed with an icon and count number.
 */
const Heading = ({ size, icon, count, children, className, ...props }) => {
  const childArray = React.Children.toArray(children);

  if (icon !== undefined) {
    childArray.unshift(
      (typeof icon === 'string')
        ? <Icon key="icon" name={icon} />
        : React.cloneElement(
          icon,
          { key: 'icon' }
        )
    );
  }
  if (count !== undefined) {
    childArray.push(
      <span key="count" className="dp-heading__count">
        {count}
      </span>
    );
  }

  props.className = classNames('dp-heading', className);
  return React.createElement(`h${size}`, props, childArray);
};

Heading.propTypes = {
  /**
   * A value from 1 to 6 indicating the type of header to use, e.g. h1, h2, h3, etc.
   */
  size:      PropTypes.number,
  /**
   * Icon to display to the left of the text.
   */
  icon:      PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Number value to display to the right of the text.
   */
  count:     PropTypes.number,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node,
};

Heading.defaultProps = {
  size: 1
};

export default Heading;
