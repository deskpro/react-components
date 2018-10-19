import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import noop from '../../utils/noop';
import { objectKeyFilter } from '../../utils/objects';
import { cssMatchComputedWidth } from '../../utils/css';
import Button from './Button';
import ButtonPopper from './ButtonPopper';
import { Popper } from '../Common';
import Icon from '../Icon';

/**
 * Renders a button with a drop down icon and popper.
 */
export default class DropdownButton extends React.Component {
  static propTypes = {
    /**
     * The size of the button
     */
    size:      PropTypes.string,
    /**
     * The type of the button
     */
    type:      PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * The component styles.
     */
    style:     PropTypes.object,
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
    size:      'large',
    type:      'primary',
    onClick:   noop,
    className: '',
    children:  [],
    style:     {}
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
    cssMatchComputedWidth(this.rootRef, this.popperRef);
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
        <Icon name={faCaretDown} />
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
