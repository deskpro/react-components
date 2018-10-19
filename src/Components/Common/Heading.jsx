import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

/**
 * A header element which can be displayed with an icon and count number.
 */
const Heading = ({
  size, icon, controls, count, underline, children, className, ...props
}) => {
  const childArray = React.Children.toArray(children);

  if (icon !== undefined) {
    childArray.unshift((React.isValidElement(icon))
      ? React.cloneElement(
        icon,
        { key: 'icon' }
      )
      : <Icon key="icon" name={icon} />);
  }
  if (controls !== undefined) {
    childArray.push(<span key="controls" className="dp-heading__controls">{controls}</span>);
  }
  if (count !== undefined) {
    childArray.push(<span key="count" className="dp-heading__count">{count}</span>);
  }

  props.className = classNames('dp-heading', {
    'dp-heading--underlined': underline
  }, className);

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
  icon:      PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.object]),
  /**
   * Number value to display to the right of the text.
   */
  count:     PropTypes.number,
  /**
   * Elements added to the right of the text.
   */
  controls:  PropTypes.node,
  /**
   * Whether to underline the heading text.
   */
  underline: PropTypes.bool,
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
  size:      1,
  icon:      undefined,
  count:     undefined,
  controls:  undefined,
  underline: false,
  className: '',
  children:  []
};

export default Heading;
