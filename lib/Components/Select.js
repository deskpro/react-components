'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _class2, _temp4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactBootstrapMultiselect = require('react-bootstrap-multiselect');

var _reactBootstrapMultiselect2 = _interopRequireDefault(_reactBootstrapMultiselect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DpMultiselect = (_temp2 = _class = function (_React$Component) {
  _inherits(DpMultiselect, _React$Component);

  function DpMultiselect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DpMultiselect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DpMultiselect.__proto__ || Object.getPrototypeOf(DpMultiselect)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (value, added) {
      var values = _this.props.value.slice(0);
      if (added) {
        if (!values.includes(value[0].value)) {
          values.push(value[0].value);
        }
      } else {
        values = values.filter(function (item) {
          return item !== value[0].value;
        });
      }
      _this.props.handleChange(values);
    }, _this.handleSelectAll = function () {
      var values = [];
      _this.props.options.forEach(function (item) {
        values.push(item.value);
      });
      _this.props.handleChange(values);
    }, _this.handleDeselectAll = function () {
      _this.props.handleChange([]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DpMultiselect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          elementProps = _objectWithoutProperties(_props, ['options']);

      var props = Object.assign({}, elementProps);
      delete props.value;
      delete props.onChange;
      delete props.handleChange;

      return _react2.default.createElement(_reactBootstrapMultiselect2.default, _extends({
        data: options,
        ref: function ref(c) {
          _this2.element = c;
        },
        multiple: true,
        enableCaseInsensitiveFiltering: true,
        filterBehavior: 'text',
        onChange: this.handleChange,
        onSelectAll: this.handleSelectAll,
        onDeselectAll: this.handleDeselectAll,
        templates: {
          button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <i class="fa fa-caret-down"></button>',
          filterClearBtn: '<i class="fa fa-times-circle">',
          li: '<li><a tabindex="0"><label></label></a></li>'
          // filter: '<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
          // ul: '<ul class="multiselect-container dropdown-menu"></ul>',
          // divider: '<li class="multiselect-item divider"></li>',
          // liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
        }
      }, props));
    }
  }]);

  return DpMultiselect;
}(_react2.default.Component), _class.propTypes = {
  value: _propTypes2.default.array,
  options: _propTypes2.default.array,
  handleChange: _propTypes2.default.func
}, _class.defaultProps = {
  value: [],
  handleChange: function handleChange() {}
}, _temp2);
var Select = (_temp4 = _class2 = function (_React$Component2) {
  _inherits(Select, _React$Component2);

  function Select() {
    var _ref2;

    var _temp3, _this3, _ret2;

    _classCallCheck(this, Select);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref2, [this].concat(args))), _this3), _this3.handleChange = function (value) {
      _this3.props.onChange(value);
    }, _temp3), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          multiple = _props2.multiple,
          elementProps = _objectWithoutProperties(_props2, ['className', 'multiple']);

      var props = Object.assign({}, elementProps);
      delete props.onChange;
      if (multiple) {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('dp-select', className) },
          _react2.default.createElement(DpMultiselect, _extends({
            handleChange: this.handleChange
          }, elementProps))
        );
      }
      return _react2.default.createElement(_reactSelect2.default, _extends({
        className: (0, _classnames2.default)('dp-select', className),
        onChange: this.handleChange
      }, props));
    }
  }]);

  return Select;
}(_react2.default.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.array,
  multiple: _propTypes2.default.bool
}, _class2.defaultProps = {
  placeholder: 'Please select',
  multiple: false,
  onChange: function onChange() {}
}, _temp4);
exports.default = Select;