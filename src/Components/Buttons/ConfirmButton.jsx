import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import Button from 'Components/Buttons/Button';

const ClickOutsideButton = onClickOutside(Button);

/**
 * Button with click confirmation.
 */
export default class ConfirmButton extends React.Component {
  static propTypes = {
    /**
     * Children to render.
     */
    children:              PropTypes.node,
    /**
     * The confirmation message.
     */
    message:               PropTypes.string,
    /**
     * Whether or not the button is disabled or not.
     */
    disabled:              PropTypes.bool,
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
    disabled: false,
    message:  'Are you sure?',
    onClick:  noop
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
    e.preventDefault();
    if (!this.props.disabled) {
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
        {...objectKeyFilter(this.props, ConfirmButton.propTypes)}
      >
        {this.getLabel()}
      </ClickOutsideButton>
    );
  }
}

