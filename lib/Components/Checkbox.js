'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _newid = require('./utils/newid');

var _newid2 = _interopRequireDefault(_newid);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (_temp2 = _class = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.onChange(event.target.checked, _this.props.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
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
          children = _props.children,
          className = _props.className,
          value = _props.value,
          elementProps = _objectWithoutProperties(_props, ['children', 'className', 'value']);

      var props = Object.assign({}, elementProps);
      delete props.onChange;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('dp-input--checkbox', className, { 'dp-input--checkbox--disabled': this.props.disabled })
        },
        _react2.default.createElement('input', _extends({
          type: 'checkbox',
          value: value,
          id: this.id,
          ref: function ref(c) {
            _this2.input = c;
          },
          onChange: this.handleChange
        }, elementProps)),
        _react2.default.createElement('label', { htmlFor: this.id, className: 'dp-input--checkbox__checkbox' }),
        _react2.default.createElement(
          _InputLabel2.default,
          { htmlFor: this.id },
          children
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  value: _propTypes2.default.oneOf(_propTypes2.default.string, _propTypes2.default.number),
  children: _propTypes2.default.node,
  onChange: _propTypes2.default.func
}, _class.defaultProps = {
  onChange: function onChange() {}
}, _temp2);
exports.default = Checkbox;