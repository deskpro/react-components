import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders an avatar.
 */
const Avatar = ({src, className, ...props}) => (
  <img
    src={src}
    aria-hidden={true}
    className={classNames('dp-avatar', className)}
    {...props}
    />
);
export default Avatar;

Avatar.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * The URI of the avatar image.
   */
  src: PropTypes.string.isRequired
};
