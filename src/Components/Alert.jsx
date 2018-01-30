import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import Icon from 'Components/Icon';

/**
 * Renders an notification message.
 */
export default class Alert extends React.Component {
  static propTypes = {
    /**
     * The type of alert to display.
     */
    type:       PropTypes.oneOf(['default', 'success', 'info', 'warning', 'danger']),
    /**
     * Name of the icon to display.
     */
    icon:       PropTypes.string,
    /**
     * Whether the alert may be closed.
     */
    closeable:  PropTypes.bool,
    /**
     * Text to display when hovering over the close button.
     */
    closeTitle: PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className:  PropTypes.string,
    /**
     * Children to render.
     */
    children:   PropTypes.node,
    /**
     * Called when the alert is closed.
     */
    onClose:    PropTypes.func
  };

  static defaultProps = {
    type:       'default',
    icon:       'exclamation-triangle',
    closeTitle: 'Close',
    closeable:  true,
    className:  '',
    children:   [],
    onClose:    noop
  };

  constructor(props) {
    super(props);
    this.state = {
      closed: false
    };
  }

  handleCloseClick = (e) => {
    this.setState({ closed: true }, () => {
      this.props.onClose(e);
    });
  };

  render() {
    const {
      type, icon, closeable, closeTitle, className, children, ...props
    } = this.props;
    const { closed } = this.state;
    if (closed) {
      return null;
    }

    return (
      <div
        className={classNames('dp-alert', `dp-alert--${type}`, `dp-bg--${type}`, className)}
        {...objectKeyFilter(props, Alert.propTypes)}
      >
        {icon
          ? <Icon name={icon} className="dp-alert__icon" />
          : null
        }
        <div className="dp-alert__content">
          {children}
        </div>
        {closeable
          ? <Icon name="close" className="dp-alert__close" title={closeTitle} onClick={this.handleCloseClick} />
          : null
        }
      </div>
    );
  }
}
