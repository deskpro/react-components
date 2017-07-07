import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PopperJS from 'popper.js';
import classNames from 'classnames';
import Portal from 'Components/Common/Portal';
import noop from 'Components/utils/noop';

/**
 * A wrapper around popper.js, a container which uses absolute positioning
 * to place elements relative to other elements.
 *
 * @see https://popper.js.org
 */
export default class Popper extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Popper is placed in reference to this element.
     */
    target: PropTypes.any,
    /**
     * Placement applied to popper.
     */
    placement: PropTypes.oneOf([
      'auto',
      'auto-start',
      'auto-end',
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end'
    ]),
    /**
     * Shifts the popper on its X axis.
     */
    offsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Shifts the popper on its Y axis.
     */
    offsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Applied to the z-index style.
     */
    zIndex: PropTypes.number,
    /**
     * Whether the children are displayed or not.
     */
    opened: PropTypes.bool,
    /**
     * True to attach the children to document.body.
     */
    detached: PropTypes.bool,
    /**
     * Add resize/scroll events and start recalculating position of
     * the popper element when they are triggered.
     */
    eventsEnabled: PropTypes.bool,
    /**
     * Prevents the popper from being positioned outside the boundary.
     */
    preventOverflow: PropTypes.bool,
    /**
     * Close the popper when the user clicks outside of it.
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Called when the popper is created.
     */
    onCreate: PropTypes.func,
    /**
     * Called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent updates.
     */
    onUpdate: PropTypes.func,
    /**
     * Called when the popper is opened.
     */
    onOpen: PropTypes.func,
    /**
     * Called when the popper is closed.
     */
    onClose: PropTypes.func
  };

  static defaultProps = {
    placement:           'auto',
    offsetX:             '0px',
    offsetY:             '0px',
    zIndex:              0,
    detached:            false,
    opened:              false,
    eventsEnabled:       false,
    preventOverflow:     false,
    closeOnClickOutside: false,
    onCreate:            noop,
    onUpdate:            noop,
    onOpen:              noop,
    onClose:             noop
  };

  constructor(props) {
    super(props);
    this.state = {
      target: null,
      opened: props.opened
    };
    this.node    = null;
    this.target  = null;
    this.focused = false;
  }

  componentDidMount() {
    if (this.props.closeOnClickOutside) {
      const node = ReactDOM.findDOMNode(this);
      node.addEventListener('mouseenter', this.handleMouseEnter);
      node.addEventListener('mouseleave', this.handleMouseLeave);
      window.addEventListener('click', this.handleDocumentClick);
    }
    this.updatePopper();
  }

  componentWillUnmount() {
    if (this.props.closeOnClickOutside) {
      const node = ReactDOM.findDOMNode(this);
      node.removeEventListener('mouseenter', this.handleMouseEnter);
      node.removeEventListener('mouseleave', this.handleMouseLeave);
      window.removeEventListener('click', this.handleDocumentClick);
    }
    this.destroyPopper();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.opened !== this.props.opened) {
      this.setState({opened: this.props.opened});
      this.props.opened ? this.props.onOpen(this) : this.props.onClose(this);
    }
    this.updatePopper();
    if (this.popper) {
      this.popper.scheduleUpdate();
    }
  }

  handleMouseEnter = () => {
    this.focused = true;
  };

  handleMouseLeave = () => {
    this.focused = false;
  };

  handleDocumentClick = () => {
    if (!this.focused) {
      this.close();
    }
  };

  /**
   * Initializes or updates the this.popper object.
   */
  updatePopper = () => {
    const {
      target,
      placement,
      offsetX,
      offsetY,
      detached,
      eventsEnabled,
      preventOverflow,
      onCreate,
      onUpdate
    } = this.props;
    if (target === undefined && !this.target) {
      return;
    }

    if (preventOverflow && !eventsEnabled) {
      console.warn('`eventsEnabled` should be true when `preventOverflow` is true.');
    } else if (detached && !eventsEnabled) {
      console.warn('`eventsEnabled` should be true when `detached` is true.');
    }
    if (this.target instanceof React.Component) {
      this.target = ReactDOM.findDOMNode(this.target);
    } else if (typeof target === "function") {
      this.target = target();
    } else if (typeof target === "string") {
      this.target = document.getElementById(target);
    } else {
      this.target = target;
    }

    this.destroyPopper();
    this.popper = new PopperJS(this.target, this.node, {
      placement,
      eventsEnabled,
      modifiers: {
        offset: {
          offset: `${offsetX}, ${offsetY}`
        },
        preventOverflow: {
          enabled: !preventOverflow
        }
      },
      onCreate: () => onCreate(this),
      onUpdate: () => onUpdate(this)
    });
  };

  /**
   * Destroys the internal Popper instance.
   */
  destroyPopper = () => {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  };

  /**
   * Toggle the popper opened or closed.
   *
   * @param {string|function|React.Component} [target]
   */
  toggle = (target) => {
    this.state.opened ? this.close(target) : this.open(target);
  };

  /**
   * Open the popper
   *
   * @param {string|function|React.Component} [target]
   */
  open = (target) => {
    this.target = target || this.target;
    this.setState({opened: true});
  };

  /**
   * Close the popper
   *
   * @param {string|function|React.Component} [target]
   */
  close = (target) => {
    this.target = target || this.target;
    this.setState({opened: false});
  };

  render() {
    const { detached, children, className } = this.props;
    const { opened } = this.state;
    if (!opened || !this.target) {
      return <div ref={ref => this.node = ref} />;
    }

    const popper = (
      <div ref={ref => this.node = ref} className={classNames('dp-popper', className)}>
        {children}
      </div>
    );
    return detached ? <Portal>{popper}</Portal> : popper;
  }
}
