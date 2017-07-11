import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import Button from 'Components/Button';

const ClickOutsideButton = onClickOutside(Button);
class ConfirmButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    message:  PropTypes.string,
    disabled: PropTypes.bool,
    onClick:  PropTypes.func,
  };
  static defaultProps = {
    disabled: false,
    message:  'Are you sure?',
    onClick() {}
  };

  constructor(props) {
    super(props);
    this.state = {
      confirm: false
    };
    this.clickOutside = this.clickOutside.bind(this);
    this.getLabel = this.getLabel.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getLabel() {
    if (this.state.confirm) {
      return this.props.message;
    }
    return this.props.children;
  }

  handleClick(e) {
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
  }

  clickOutside() {
    this.setState({
      confirm: false
    });
  }

  render() {
    const props = Object.assign({}, this.props);
    delete props.message;
    delete props.onClick;
    return (
      <ClickOutsideButton
        onClick={this.handleClick}
        onClickOutside={this.clickOutside}
        disableOnClickOutside={!this.state.confirm}
        {...props}
      >
        {this.getLabel()}
      </ClickOutsideButton>
    );
  }
}
export default ConfirmButton;
