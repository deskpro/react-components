'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _noop = require('../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Portal mounts its children in the document body.
 */
var Portal = (_temp = _class = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.popup = document.createElement("div");
      document.body.appendChild(this.popup);
      this._renderLayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderLayer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.popup);
      document.body.removeChild(this.popup);
      this.popup = null;
    }
  }, {
    key: '_renderLayer',
    value: function _renderLayer() {
      var _this2 = this;

      _reactDom2.default.render(this.props.children, this.popup, function () {
        _this2.props.onUpdate(_this2);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return Portal;
}(_react2.default.Component), _class.propTypes = {
  /**
   * Called when the child elements are mounted.
   */
  onUpdate: _propTypes2.default.func
}, _class.defaultProps = {
  onUpdate: _noop2.default
}, _temp);
exports.default = Portal;