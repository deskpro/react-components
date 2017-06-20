'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _reactTagsinput = require('react-tagsinput');

var _reactTagsinput2 = _interopRequireDefault(_reactTagsinput);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelInput = (_temp = _class = function (_React$Component) {
  _inherits(LabelInput, _React$Component);

  function LabelInput(props) {
    _classCallCheck(this, LabelInput);

    var _this = _possibleConstructorReturn(this, (LabelInput.__proto__ || Object.getPrototypeOf(LabelInput)).call(this, props));

    _this.setEditable = function () {
      _this.setState({
        editable: true
      });
    };

    _this.handleChange = function (labels) {
      _this.props.onChange(labels);
    };

    _this.handleClickOutside = function () {
      _this.setState({
        editable: false
      });
    };

    _this.renderLabel = function (labelProps) {
      var tag = labelProps.tag,
          key = labelProps.key,
          onRemove = labelProps.onRemove;

      return _react2.default.createElement(
        _Label2.default,
        {
          key: key,
          editable: true,
          onClose: function onClose() {
            return onRemove(key);
          }
        },
        tag
      );
    };

    _this.renderLabels = function () {
      var _this$props = _this.props,
          labels = _this$props.labels,
          inputProps = _this$props.inputProps;

      if (_this.state.editable) {
        return _react2.default.createElement(_reactTagsinput2.default, {
          value: labels,
          renderTag: _this.renderLabel,
          inputProps: inputProps,
          onChange: _this.handleChange
        });
      }
      if (!labels) {
        return null;
      }
      return labels.map(function (label, key) {
        return _react2.default.createElement(
          _Label2.default,
          { key: key },
          label
        );
      });
    };

    _this.state = {
      editable: false
    };
    return _this;
  }

  _createClass(LabelInput, [{
    key: 'render',
    value: function render() {
      var editable = this.state.editable;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('dp-label-input', { editable: editable }),
          onBlur: this.handleBlur,
          onClick: this.setEditable
        },
        this.renderLabels()
      );
    }
  }]);

  return LabelInput;
}(_react2.default.Component), _class.propTypes = {
  labels: _propTypes2.default.array.isRequired,
  inputProps: _propTypes2.default.object,
  onChange: _propTypes2.default.func
}, _class.defaultProps = {
  inputProps: { placeholder: 'Add a label' },
  onChange: function onChange() {}
}, _temp);
exports.default = (0, _reactOnclickoutside2.default)(LabelInput);