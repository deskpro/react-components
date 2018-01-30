import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import CircleBadge from 'Components/Badges/CircleBadge';
import Icon from 'Components/Icon';

/**
 * Icon which displays a CircleBadge on top of it.
 */
const IconBadge = ({
  icon, iconSize, type, max, children, className, ...props
}) => (
  <div
    className={classNames('dp-icon-badge', className)}
    {...objectKeyFilter(props, IconBadge.propTypes)}
  >
    {typeof icon === 'string'
      ? <Icon name={icon} size={iconSize} />
      : icon
    }
    <CircleBadge type={type} max={max}>
      {children}
    </CircleBadge>
  </div>
);

IconBadge.propTypes = {
  /**
   * Name of the icon to display or an icon component.
   */
  icon:      PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * Displays the icon at the given size
   */
  iconSize:  Icon.propTypes.size, // eslint-disable-line
  /**
   * Truncate numbers higher than this value.
   */
  max:       PropTypes.number,
  /**
   * The type of alert to display.
   */
  type:      PropTypes.oneOf(['default', 'success', 'info', 'warning', 'danger']),
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

IconBadge.defaultProps = {
  iconSize:  'large',
  type:      'default',
  max:       99,
  className: '',
  children:  ''
};

export default IconBadge;
