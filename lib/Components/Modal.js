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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_temp = _class = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.updateWindowDimensions = function () {
      _this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    _this.state = {
      width: 0,
      height: 0
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.updateWindowDimensions();
      window.addEventListener('resize', function () {
        if (!_this2.ticking) {
          window.requestAnimationFrame(function () {
            _this2.updateWindowDimensions();
            _this2.ticking = false;
          });
        }
        _this2.ticking = true;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          buttons = _props.buttons,
          style = _props.style,
          closeModal = _props.closeModal;
      var _state = this.state,
          width = _state.width,
          height = _state.height;

      var modalStyle = Object.assign({}, style);
      modalStyle.maxHeight = height * 0.7;
      modalStyle.maxWidth = width * 0.7;
      return _react2.default.createElement(
        'div',
        { className: 'dp-modal__overlay' },
        _react2.default.createElement(
          'div',
          {
            className: 'dp-modal',
            style: modalStyle
          },
          _react2.default.createElement(
            'div',
            { className: 'dp-modal__title' },
            title,
            _react2.default.createElement(
              'div',
              { className: 'dp-modal__close', onClick: closeModal },
              'X'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dp-modal__body' },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: 'dp-modal__buttons' },
            buttons
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component), _class.propTypes = {
  title: _propTypes2.default.string,
  children: _propTypes2.default.node,
  buttons: _propTypes2.default.node,
  style: _propTypes2.default.object,
  closeModal: _propTypes2.default.func
}, _class.defaultProps = {
  closeModal: function closeModal() {}
}, _temp);
exports.default = Modal;