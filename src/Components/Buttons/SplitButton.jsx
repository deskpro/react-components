import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import Button from 'Components/Buttons/Button';
import SplitPopper from 'Components/Buttons/SplitPopper';
import Icon from 'Components/Icon';
import { Popper } from 'Components/Common';

/**
 * Renders a button with a left side and right side, where clicking the right side opens
 * a popper.
 */
export default class SplitButton extends React.Component {
  static propTypes = {
    /**
     * Displays the button at the given size
     */
    size:      PropTypes.oneOf(['s', 'm', 'l', 'small', 'medium', 'large']),
    /**
     * The type of button to display.
     */
    type:      PropTypes.oneOf(['primary', 'secondary', 'cta']),
    /**
     * Whether or not the button is disabled or not.
     */
    disabled:  PropTypes.bool,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node,
    /**
     * Called when the left side of the button is clicked.
     */
    onClick:   PropTypes.func
  };

  static defaultProps = {
    size:     'large',
    type:     'primary',
    disabled: false,
    onClick:  noop
  };

  constructor(props) {
    super(props);
    this.rootRef   = null;
    this.rootDOM   = null;
    this.popperRef = null;
    this.popperDOM = null;
  }

  componentDidMount() {
    this.rootDOM   = this.rootRef;
    this.popperDOM = ReactDOM.findDOMNode(this.popperRef);
    this.updatePopperWidth();
    window.addEventListener('resize', this.updatePopperWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePopperWidth);
  }

  /**
   * Sets the width of the popper to match the button width
   */
  updatePopperWidth = () => {
    this.popperDOM.style.width = window.getComputedStyle(this.rootDOM, null).width;
  };

  handleRightClick = () => {
    this.popperRef.toggle();
  };

  render() {
    const { size, type, disabled, onClick, className, children, ...props } = this.props;

    const leftChildren = [];
    let popperChild    = <SplitPopper />;
    React.Children.toArray(children).forEach((child) => {
      if (child.type === SplitPopper) {
        popperChild = child;
      } else {
        leftChildren.push(child);
      }
    });

    return (
      <div
        ref={ref => (this.rootRef = ref)}
        className={classNames('dp-split-button', className)}
        {...objectKeyFilter(props, SplitButton.propTypes)}
      >
        <Button
          className="dp-split-button__left"
          size={size}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {leftChildren}
        </Button>
        <Button
          className="dp-split-button__right"
          size={size}
          type={type}
          disabled={disabled}
          onClick={this.handleRightClick}
        >
          <Icon name="caret-down" />
        </Button>
        <Popper
          placement="bottom-end"
          ref={ref => (this.popperRef = ref)}
          target={this.rootRef}
          arrow={false}
          {...popperChild.props}
        >
          {popperChild}
        </Popper>
      </div>
    );
  }
}
