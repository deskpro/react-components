import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const convertSize = (size) => {
  switch (size) {
    case 'xsmall':
      return 'xs';
    case 's':
    case 'small':
      return 'sm';
    case 'l':
    case 'large':
      return 'lg';
    case 'xlarge':
      return '2x';
    case 'm':
    case 'medium':
      return '1x';
    default:
      return size;
  }
};
/**
 * Renders an icon.
 *
 * Example:
 * ```jsx
 *  import React from 'react';
 *  import { render } from 'react-dom';
 *  import Icon from 'Components/Icon';
 *  import { faBug, faCog, faCaretDown } from '@fortawesome/free-solid-svg-icons';
 *
 *  render(
 *    <div>
 *      <Icon name={faBug} size="m" aria-hidden={true} />
 *      <Icon name={faCog} spin={true} />
 *      <Icon name="{faCaretDown} rotate={90} />
 *    </div>
 *    , document.getElementById('mount')
 *  );
 * ```
 */
const Icon = ({
  className, name, size, rotate, spin, fixedWidth, ...elementProps
}) => (
  <FontAwesomeIcon
    icon={name}
    className={classNames('dp-icon', className)}
    size={convertSize(size)}
    rotation={rotate > 0 ? rotate : null}
    spin={spin}
    fixedWidth={fixedWidth}
    {...elementProps}
  />
);
export default Icon;

Icon.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Name of the icon to use.
   */
  name:      PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Displays the icon at the given size
   */
  size:      PropTypes.oneOf([
    'sm', 'lg', '1x', '2x', '3x',
    'xs', 's', 'm', 'l', 'xl',
    'xsmall', 'small', 'medium', 'large', 'xlarge'
  ]),
  /**
   * Rotates the icon.
   */
  rotate:     PropTypes.oneOf(['0', 0, 90, 180, 270]),
  /**
   * Spins the icon using CSS animation.
   */
  spin:       PropTypes.bool,
  /**
   * Set icons at a fixed width. Great to use when different icon widths throw off alignment. Especially useful in things like nav lists & list groups.
   */
  fixedWidth: PropTypes.bool
};

Icon.defaultProps = {
  size:       's',
  rotate:     '0',
  spin:       false,
  fixedWidth: false,
  className:  ''
};
