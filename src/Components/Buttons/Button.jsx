import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';

/**
 * Standard button.
 */
export default class Button extends React.Component {
  static propTypes = {
    /**
     * Displays the button at the given size
     */
    size:                    PropTypes.oneOf(['s', 'm', 'l', 'small', 'medium', 'large']),
    /**
     * The type of button to display.
     */
    type:                    PropTypes.oneOf(['primary', 'secondary', 'cta']),
    /**
     * The shape of the button.
     */
    shape:                   PropTypes.oneOf(['default', 'square', 'round']),
    /**
     * Children to render.
     */
    children:                PropTypes.node.isRequired,
    /**
     * CSS classes to apply to the element.
     */
    className:               PropTypes.string,
    /**
     * Whether or not the button is disabled or not.
     */
    disabled:                PropTypes.bool,
    /**
     * Called when the user clicks outside of the button.
     */
    onClickOutside:          PropTypes.func,
    /**
     * Disables outside click listening by explicitly removing the event listening bindings.
     */
    disableOnClickOutside:   PropTypes.func,
    /**
     * Enables outside click listening by setting up the event listening bindings.
     */
    enableOnClickOutside:    PropTypes.func,
    /**
     * Whether the event should be propagated
     */
    stopPropagation:         PropTypes.bool,
    /**
     * Whether the event should prevent default behaviour
     */
    preventDefault:          PropTypes.bool,
    /**
     * Property passed by OnClickOutside HOC
     */
    eventTypes:              PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    /**
     * Property passed by OnClickOutside HOC
     */
    outsideClickIgnoreClass: PropTypes.string,
  };

  static defaultProps = {
    size:                    'large',
    className:               '',
    type:                    'primary',
    shape:                   'default',
    disabled:                false,
    onClickOutside:          noop,
    disableOnClickOutside:   noop,
    enableOnClickOutside:    noop,
    stopPropagation:         false,
    preventDefault:          false,
    eventTypes:              ['mousedown', 'touchstart'],
    outsideClickIgnoreClass: '',
  };

  handleClickOutside = (event) => {
    this.props.onClickOutside(event);
  };

  render() {
    const { size, type, shape, disabled, className, children, ...props } = this.props;

    return (
      <button
        disabled={disabled}
        className={classNames(
          'dp-button',
          `dp-button--${size[0]}`,
          `dp-button--${type}`,
          `dp-button--shape-${shape}`,
          className
        )}
        {...objectKeyFilter(props, Button.propTypes)}
      >
        {children}
      </button>
    );
  }
}
