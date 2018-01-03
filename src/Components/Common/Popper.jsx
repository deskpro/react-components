import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PopperJS from 'popper.js';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import Portal from 'Components/Common/Portal';

/**
 * A wrapper around popper.js, a tooltip style container which uses absolute positioning
 * to place elements relative to other elements.
 *
 * @see https://popper.js.org
 */
export default class Popper extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className:           PropTypes.string,
    /**
     * Children to render.
     */
    children:            PropTypes.node,
    /**
     * Popper is placed in reference to this element.
     */
    target:              PropTypes.any, // eslint-disable-line
    /**
     * Placement applied to popper.
     */
    placement:           PropTypes.oneOf(PopperJS.placements),
    /**
     * Shifts the popper on its X axis.
     */
    offsetX:             PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Shifts the popper on its Y axis.
     */
    offsetY:             PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Applied to the z-index style.
     */
    zIndex:              PropTypes.number,
    /**
     * Whether the children are displayed or not.
     */
    opened:              PropTypes.bool,
    /**
     * Whether an arrow is added to the popper.
     */
    arrow:               PropTypes.bool,
    /**
     * True to attach the children to document.body.
     */
    detached:            PropTypes.bool,
    /**
     * Add resize/scroll events and start recalculating position of
     * the popper element when they are triggered.
     */
    eventsEnabled:       PropTypes.bool,
    /**
     * Prevents the popper from being positioned outside the boundary.
     */
    preventOverflow:     PropTypes.bool,
    /**
     * Close the popper when the user clicks outside of it.
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Called when the popper is created.
     */
    onCreate:            PropTypes.func,
    /**
     * Called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent updates.
     */
    onUpdate:            PropTypes.func,
    /**
     * Called when the popper is opened.
     */
    onOpen:              PropTypes.func,
    /**
     * Called when the popper is closed.
     */
    onClose:             PropTypes.func
  };

  static defaultProps = {
    placement:           'auto',
    offsetX:             '0px',
    offsetY:             '0px',
    zIndex:              0,
    className:           '',
    children:            '',
    arrow:               true,
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

  /**
   * List of accepted placements to use as values of the placement prop
   */
  static placements = PopperJS.placements;

  constructor(props) {
    super(props);

    this.state = {
      opened: props.opened
    };
    this.node    = null;
    this.target  = null;
    this.focused = false;
  }

  componentDidMount() {
    this.updatePopper();
    if (this.props.closeOnClickOutside) {
      this.node.addEventListener('mouseenter', this.handleMouseEnter);
      this.node.addEventListener('mouseleave', this.handleMouseLeave);
      window.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.opened !== this.props.opened) {
      if (this.props.opened) {
        this.open();
      } else {
        this.close();
      }
    }
    this.updatePopper();
  }

  componentWillUnmount() {
    this.destroyPopper();
    if (this.props.closeOnClickOutside) {
      this.node.removeEventListener('mouseenter', this.handleMouseEnter);
      this.node.removeEventListener('mouseleave', this.handleMouseLeave);
      window.removeEventListener('click', this.handleDocumentClick);
    }
  }

  /**
   * Sets the target element
   *
   * @param {*} target
   */
  setTarget = (target) => {
    this.target = target;
  };

  /**
   * Returns a DOM node for the given target
   *
   * @param {React.Component|function|string} target
   * @returns {Node}
   */
  findTargetNode = (target) => {
    let node = null;
    if (target instanceof React.Component || this.target instanceof React.Component) {
      node = ReactDOM.findDOMNode(target || this.target); // eslint-disable-line react/no-find-dom-node
    } else if (typeof target === 'function') {
      node = target();
    } else if (typeof target === 'string') {
      node = document.getElementById(target);
    } else {
      node = target;
    }

    return node;
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
    this.target = this.findTargetNode(target);
    if (!this.target) {
      return;
    }

    if (preventOverflow && !eventsEnabled) {
      console.warn('`eventsEnabled` should be true when `preventOverflow` is true.'); // eslint-disable-line no-console
    } else if (detached && !eventsEnabled) {
      console.warn('`eventsEnabled` should be true when `detached` is true.'); // eslint-disable-line no-console
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

    this.popper.scheduleUpdate();
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
    if (this.state.opened) {
      this.close(target);
    } else {
      this.open(target);
    }
  };

  /**
   * Open the popper
   *
   * @param {string|function|React.Component} [target]
   */
  open = (target) => {
    this.target = target || this.target;
    this.setState({ opened: true }, () => {
      this.props.onOpen(this);
    });
  };

  /**
   * Close the popper
   *
   * @param {string|function|React.Component} [target]
   */
  close = (target) => {
    this.target = target || this.target;
    this.setState({ opened: false }, () => {
      this.props.onClose(this);
    });
  };

  handleMouseEnter = () => {
    this.focused = true;
  };

  handleMouseLeave = () => {
    this.focused = false;
  };

  handleDocumentClick = (e) => {
    if (!this.focused && e.target !== this.target) {
      this.close();
    }
  };

  render() {
    const {
      detached, arrow, children, className, ...props
    } = this.props;
    const { opened } = this.state;
    if (!this.target) {
      return <div ref={ref => (this.node = ref)} />;
    }

    const popper = (
      <div
        ref={ref => (this.node = ref)}
        className={classNames(
          'dp-popper',
          className,
          {
            'dp-popper--opened':  opened,
            'dp-popper--arrowed': arrow
          }
        )}
        {...objectKeyFilter(props, Popper.propTypes)}
      >
        {children}
      </div>
    );

    return detached ? <Portal>{popper}</Portal> : popper;
  }
}
