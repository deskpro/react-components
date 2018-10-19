import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

/**
 * Icon which controls the visibility of a popper.
 */
export default class PopperIcon extends React.Component {
  static propTypes = {
    /**
     * Name of the icon.
     */
    name:      PropTypes.string.isRequired,
    /**
     * Reference to the popper to bind the icon to.
     */
    popper:    PropTypes.object,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string
  };

  static defaultProps = {
    className: '',
    popper:    null
  };

  render() {
    const {
      name, popper, className, ...props
    } = this.props;

    return (
      <Icon
        name={name}
        className={classNames('dp-popper-icon', className)}
        {...props}
        onClick={(e) => {
          popper.toggle(this);
          e.stopPropagation();
        }}
      />
    );
  }
}
