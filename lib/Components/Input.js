'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;
// import SVGInline from 'react-svg-inline';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _newid = require('./utils/newid');

var _newid2 = _interopRequireDefault(_newid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import LoadingSvg from 'styles/images/input_loading.svg';
// import ValidatedSvg from 'styles/images/tick.svg';

var Input = (_temp = _class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChange = function (event) {
      _this.props.onChange(event.currentTarget.value || '');
    };

    _this.onFocus = function (e) {
      _this.setState({
        focus: true
      });
      _this.props.onFocus(e);
    };

    _this.onBlur = function (e) {
      _this.setState({
        focus: false
      });
      _this.props.onBlur(e);
    };

    _this.getIcon = function () {
      var icon = _this.props.icon;

      if (!icon) {
        return null;
      }
      return _react2.default.createElement('i', { className: (0, _classnames2.default)('fa', 'fa-' + icon) });
    };

    _this.getPrefix = function () {
      var prefix = _this.props.prefix;

      if (!prefix) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'dp-input__prefix' },
        prefix
      );
    };

    _this.getSuffix = function () {
      var suffix = _this.props.suffix;

      if (!suffix) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'dp-input__suffix' },
        suffix
      );
    };

    _this.focus = function () {
      _this.input.focus();
    };

    _this.state = {
      focus: false
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.id) {
        this.id = this.props.id;
      } else {
        this.id = (0, _newid2.default)();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          validated = _props.validated,
          validating = _props.validating,
          icon = _props.icon,
          prefix = _props.prefix,
          suffix = _props.suffix,
          elementProps = _objectWithoutProperties(_props, ['className', 'validated', 'validating', 'icon', 'prefix', 'suffix']);

      var props = Object.assign({}, elementProps);
      delete props.onChange;
      delete props.onFocus;
      delete props.onBlur;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('dp-input', className, {
            'dp-input--validating': validating,
            'dp-input--validated': validated,
            'dp-input--with-icon': icon,
            'dp-input--with-prefix': prefix,
            'dp-input--with-suffix': suffix,
            'dp-input--focused': this.state.focus
          })
        },
        this.getPrefix(),
        this.getIcon(),
        _react2.default.createElement('input', _extends({
          id: this.id,
          ref: function ref(c) {
            _this2.input = c;
          },
          onChange: this.onChange,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        }, props)),
        this.getSuffix()
      );
    }
  }]);

  return Input;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  id: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  validated: _propTypes2.default.bool,
  validating: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readonly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func
}, _class.defaultProps = {
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
}, _temp);
exports.default = Input;