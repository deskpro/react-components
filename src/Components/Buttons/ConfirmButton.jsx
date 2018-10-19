import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import noop from '../../utils/noop';
import { objectKeyFilter } from '../../utils/objects';
import Button from './Button';

const ClickOutsideButton = onClickOutside(Button);

/**
 * Button with click confirmation.
 */
export default class ConfirmButton extends React.Component {
  static propTypes = {
    /**
     * Whether the component is disabled.
     */
    disabled:              PropTypes.bool,
    /**
     * The confirmation message.
     */
    message:               PropTypes.string,
    /**
     * Children to render.
     */
    children:              PropTypes.node.isRequired,
    /**
     * Disables outside click listening by explicitly removing the event listening bindings.
     */
    disableOnClickOutside: PropTypes.func,
    /**
     * Enables outside click listening by setting up the event listening bindings.
     */
    enableOnClickOutside:  PropTypes.func,
    /**
     * Called when the button is clicked.
     */
    onClick:               PropTypes.func
  };

  static defaultProps = {
    disabled:              false,
    message:               'Are you sure?',
    onClick:               noop,
    disableOnClickOutside: noop,
    enableOnClickOutside:  noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      confirm: false
    };
  }

  getLabel = () => {
    if (this.state.confirm) {
      return this.props.message;
    }
    return this.props.children;
  };

  handleClick = (e) => {
    const { disabled } = this.props;
    e.preventDefault();
    if (!disabled) {
      if (this.state.confirm) {
        this.props.onClick(e);
        this.setState({
          confirm: false
        });
      } else {
        this.setState({
          confirm: true
        });
      }
    }
  };

  clickOutside = () => {
    this.setState({
      confirm: false
    });
  };

  render() {
    return (
      <ClickOutsideButton
        onClick={this.handleClick}
        onClickOutside={this.clickOutside}
        disableOnClickOutside={!this.state.confirm}
        disabled={this.props.disabled}
        {...objectKeyFilter(this.props, ConfirmButton.propTypes)}
      >
        {this.getLabel()}
      </ClickOutsideButton>
    );
  }
}

