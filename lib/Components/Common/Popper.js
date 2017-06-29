'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _noop = require('../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A wrapper around popper.js, a container which uses absolute positioning
 * to place elements relative to other elements.
 *
 * @see https://popper.js.org
 */
var Popper = (_temp = _class = function (_React$Component) {
  _inherits(Popper, _React$Component);

  function Popper(props) {
    _classCallCheck(this, Popper);

    var _this = _possibleConstructorReturn(this, (Popper.__proto__ || Object.getPrototypeOf(Popper)).call(this, props));

    _this.updatePopper = function () {
      var _this$props = _this.props,
          target = _this$props.target,
          placement = _this$props.placement,
          offsetX = _this$props.offsetX,
          offsetY = _this$props.offsetY,
          detached = _this$props.detached,
          eventsEnabled = _this$props.eventsEnabled,
          preventOverflow = _this$props.preventOverflow,
          _onCreate = _this$props.onCreate,
          _onUpdate = _this$props.onUpdate;

      if (preventOverflow && !eventsEnabled) {
        console.warn('`eventsEnabled` should be true when `preventOverflow` is true.');
      } else if (detached && !eventsEnabled) {
        console.warn('`eventsEnabled` should be true when `detached` is true.');
      }

      if (!_this.target) {
        if (typeof target === "function") {
          _this.target = target();
        } else if (typeof target === "string") {
          _this.target = document.getElementById(target);
        } else {
          _this.target = target;
        }
      }

      _this.destroyPopper();
      _this.popper = new _popper2.default(_this.target, _this.node, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: {
          offset: {
            offset: offsetX + ', ' + offsetY
          },
          preventOverflow: {
            enabled: !preventOverflow
          }
        },
        onCreate: function onCreate() {
          return _onCreate(_this);
        },
        onUpdate: function onUpdate() {
          return _onUpdate(_this);
        }
      });
    };

    _this.destroyPopper = function () {
      if (_this.popper) {
        _this.popper.destroy();
        _this.popper = null;
      }
    };

    _this.node = null;
    _this.target = null;
    return _this;
  }

  _createClass(Popper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updatePopper();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyPopper();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.opened !== this.props.opened) {
        this.props.opened ? this.props.onOpen(this) : this.props.onClose(this);
      }
      this.updatePopper();
      this.popper.scheduleUpdate();
    }

    /**
     * Initializes or updates the this.popper object.
     */


    /**
     * Destroys the internal Popper instance.
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          opened = _props.opened,
          arrow = _props.arrow,
          detached = _props.detached,
          children = _props.children,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['opened', 'arrow', 'detached', 'children', 'className']);

      if (!opened) {
        return _react2.default.createElement('div', null);
      }

      var popper = _react2.default.createElement(
        'div',
        _extends({ ref: function ref(_ref) {
            return _this2.node = _ref;
          }, className: (0, _classnames2.default)('dp-popper', className) }, elementProps),
        children,
        arrow ? _react2.default.createElement(Arrow, null) : null
      );
      return detached ? _react2.default.createElement(
        _Portal2.default,
        null,
        popper
      ) : popper;
    }
  }]);

  return Popper;
}(_react2.default.Component), _class.propTypes = {
  /**
   * CSS classes to apply to the element.
   */
  className: _propTypes2.default.string,
  /**
   * Popper is placed in reference to this element.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  /**
   * Placement applied to popper.
   */
  placement: _propTypes2.default.oneOf(['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),
  /**
   * Shifts the popper on its X axis.
   */
  offsetX: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * Shifts the popper on its Y axis.
   */
  offsetY: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * Applied to the z-index style.
   */
  zIndex: _propTypes2.default.number,
  /**
   * Whether the children are displayed or not.
   */
  opened: _propTypes2.default.bool,
  /**
   * Whether to add an arrow to the popper.
   */
  arrow: _propTypes2.default.bool,
  /**
   * True to attach the children to document.body.
   */
  detached: _propTypes2.default.bool,
  /**
   * Add resize/scroll events and start recalculating position of
   * the popper element when they are triggered.
   */
  eventsEnabled: _propTypes2.default.bool,
  /**
   * Prevents the popper from being positioned outside the boundary.
   */
  preventOverflow: _propTypes2.default.bool,
  /**
   * Called when the popper is created.
   */
  onCreate: _propTypes2.default.func,
  /**
   * Called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent updates.
   */
  onUpdate: _propTypes2.default.func,
  /**
   * Called when the popper is opened.
   */
  onOpen: _propTypes2.default.func,
  /**
   * Called when the popper is closed.
   */
  onClose: _propTypes2.default.func
}, _class.defaultProps = {
  placement: 'auto',
  offsetX: '0px',
  offsetY: '0px',
  zIndex: 0,
  arrow: true,
  detached: false,
  opened: false,
  eventsEnabled: false,
  preventOverflow: false,
  onCreate: _noop2.default,
  onUpdate: _noop2.default,
  onOpen: _noop2.default,
  onClose: _noop2.default
}, _temp);

/**
 * Arrow added to Popper containers.
 *
 * @returns {XML}
 */

exports.default = Popper;
var Arrow = function Arrow(_ref2) {
  var className = _ref2.className,
      elementProps = _objectWithoutProperties(_ref2, ['className']);

  return _react2.default.createElement('div', _extends({
    className: (0, _classnames2.default)('dp-popper__arrow', className)
  }, elementProps));
};
exports.Arrow = Arrow;