import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import { objectKeyFilter } from 'utils/objects';
import noop from 'utils/noop';
import { Scrollbar } from 'Components/Common';

class CustomSelectContent extends React.Component {
  static propTypes = {
    /**
     * Children to render.
     */
    children:                PropTypes.node.isRequired,
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
    const { children, ...props } = this.props;
    return (
      <div className="dp-select__content" {...objectKeyFilter(props, CustomSelectContent.propTypes)}>{children}</div>
    );
  }
}

const ClickOutsideContent = onClickOutside(CustomSelectContent);

/**
 * CustomSelect component.
 */
export default class CustomSelect extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className:              PropTypes.string,
    /**
     * Children to render.
     */
    children:               PropTypes.node.isRequired,
    /**
     * Component to render the content of the input
     */
    inputRenderer:          PropTypes.func.isRequired,
    /**
     * Display the input when the menu is opened
     */
    displayInputWhenOpened: PropTypes.bool,
    /**
     * Whether or not the select is disabled or not.
     */
    disabled:               PropTypes.bool,
  };

  static defaultProps = {
    className:              '',
    displayInputWhenOpened: true,
    disabled:               false,
  };

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  clickOutside = () => {
    this.setState({
      opened: false
    });
  };

  toggleOpened = () => {
    const { opened } = this.state;
    if (!this.props.disabled) {
      this.setState({
        opened: !opened
      });
    }
  };

  open() {
    this.setState({
      opened: true
    });
  }

  close() {
    this.setState({
      opened: false
    });
  }

  render() {
    const { className, children, displayInputWhenOpened, disabled, ...props } = this.props;
    const { opened } = this.state;

    return (
      <div
        className={classNames('dp-select', className, { 'dp-select--disabled': disabled })}
        {...objectKeyFilter(props, CustomSelect.propTypes)}
      >
        {!opened || displayInputWhenOpened ?
          (<div className="dp-select__input" onClick={this.toggleOpened}>
            {this.props.inputRenderer()}
            <span className={classNames('dp-select__arrow', { 'dp-select__arrow--opened': opened })} />
          </div>)
          : null}
        {opened ? (
          <ClickOutsideContent
            onClickOutside={this.clickOutside}
            outsideClickIgnoreClass="dp-select__input"
          >
            <Scrollbar>
              {children}
            </Scrollbar>
          </ClickOutsideContent>
        ) : null}
      </div>
    );
  }
}
