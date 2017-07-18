import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import Button from 'Components/Buttons/Button';
import ButtonPopper from 'Components/Buttons/ButtonPopper';
import { Popper } from 'Components/Common';
import Icon from 'Components/Icon';

/**
 * Renders a button with a drop down icon and popper.
 */
export default class DropdownButton extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node,
    /**
     * Called when the button is clicked.
     */
    onClick:   PropTypes.func
  };

  static defaultProps = {
    size:    'large',
    type:    'primary',
    onClick: noop
  };

  constructor(props) {
    super(props);
    this.rootRef   = null;
    this.rootDOM   = null;
    this.popperRef = null;
    this.popperDOM = null;
  }

  componentDidMount() {
    this.rootDOM   = ReactDOM.findDOMNode(this.rootRef);
    this.popperDOM = ReactDOM.findDOMNode(this.popperRef);
  }

  /**
   * Sets the width of the popper to match the button width
   */
  updatePopperWidth = () => {
    this.popperDOM.style.width = window.getComputedStyle(this.rootDOM, null).width;
  };

  handleClick = (e) => {
    this.popperRef.toggle();
    this.props.onClick(e);
  };

  handleOpen = () => {
    this.updatePopperWidth();
  };

  render() {
    const { className, children, ...props } = this.props;

    const buttonChildren = [];
    let popperChild    = <ButtonPopper />;
    React.Children.toArray(children).forEach((child) => {
      if (child.type === ButtonPopper) {
        popperChild = child;
      } else {
        buttonChildren.push(child);
      }
    });

    return (
      <Button
        ref={ref => (this.rootRef = ref)}
        onClick={this.handleClick}
        className={classNames('dp-dropdown-button', className)}
        {...objectKeyFilter(props, DropdownButton.propTypes)}
      >
        {buttonChildren}
        <Icon name="caret-down" />
        <Popper
          placement="bottom-end"
          ref={ref => (this.popperRef = ref)}
          target={this.rootRef}
          arrow={false}
          onOpen={this.handleOpen}
          {...popperChild.props}
        >
          {popperChild}
        </Popper>
      </Button>
    );
  }
}
