import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders an icon.
 *
 * Example:
 * ```jsx
 *  import React from 'react';
 *  import { render } from 'react-dom';
 *  import Icon from 'Components/Icon';
 *
 *  render(
 *    <div>
 *      <Icon name="bug" size="m" aria-hidden={true} />
 *      <Icon name="cog" spin={true} />
 *      <Icon name="caret-down" rotate={90} />
 *    </div>
 *    , document.getElementById('mount')
 *  );
 * ```
 */
const Icon = ({ className, name, size, rotate, spin, ...elementProps }) => (
  <i
    className={classNames(
      `fa fa-${name}`,
      `dp-icon dp-icon--${size}`,
      {
        'fa-spin':               spin,
        [`fa-rotate-${rotate}`]: (rotate !== '0')
      },
      className
    )}
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
  name:      PropTypes.string.isRequired,
  /**
   * Displays the icon at the given size
   */
  size:      PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  /**
   * Rotates the icon.
   */
  rotate:    PropTypes.oneOf(['0', '90', '180', '270']),
  /**
   * Spins the icon using CSS animation.
   */
  spin:      PropTypes.bool
};

Icon.defaultProps = {
  size:   's',
  rotate: '0',
  spin:   false
};
