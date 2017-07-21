import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders an avatar.
 */
const Avatar = ({ src, size, alt, className, ...props }) => (
  <img
    src={src}
    alt={alt}
    aria-hidden
    className={classNames(
      'dp-avatar',
      `dp-avatar--${size[0] === 'x' ? size.substring(0, 2) : size[0]}`,
      className
    )}
    {...props}
  />
);

Avatar.propTypes = {
  /**
   * The URI of the avatar image.
   */
  src:       PropTypes.string.isRequired,
  /**
   * The size of the avatar.
   */
  size:      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  /**
   * Alternative text for the image.
   */
  alt:       PropTypes.string,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size:      'large',
  alt:       'avatar',
  className: ''
};

export default Avatar;
