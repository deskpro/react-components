'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickOutsideButton = (0, _reactOnclickoutside2.default)(_Button2.default);
var ConfirmButton = (_temp = _class = function (_React$Component) {
  _inherits(ConfirmButton, _React$Component);

  function ConfirmButton(props) {
    _classCallCheck(this, ConfirmButton);

    var _this = _possibleConstructorReturn(this, (ConfirmButton.__proto__ || Object.getPrototypeOf(ConfirmButton)).call(this, props));

    _this.state = {
      confirm: false
    };
    _this.clickOutside = _this.clickOutside.bind(_this);
    _this.getLabel = _this.getLabel.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ConfirmButton, [{
    key: 'getLabel',
    value: function getLabel() {
      if (this.state.confirm) {
        return this.props.message;
      }
      return this.props.children;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      if (!this.props.disabled) {
        if (this.state.confirm) {
          this.props.onClick(e);
          this.setState({
            confirm: false
          });
        } else {
          this.setState({
            confirm: true
          });
        }
      }
    }
  }, {
    key: 'clickOutside',
    value: function clickOutside() {
      this.setState({
        confirm: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = Object.assign({}, this.props);
      delete props.message;
      delete props.onClick;
      return _react2.default.createElement(
        ClickOutsideButton,
        _extends({
          onClick: this.handleClick,
          onClickOutside: this.clickOutside,
          disableOnClickOutside: !this.state.confirm
        }, props),
        this.getLabel()
      );
    }
  }]);

  return ConfirmButton;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  message: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
}, _class.defaultProps = {
  disabled: false,
  message: 'Are you sure?',
  onClick: function onClick() {}
}, _temp);
exports.default = ConfirmButton;