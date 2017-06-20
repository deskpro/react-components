'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelInputAutosuggest = (_temp = _class = function (_LabelInput) {
  _inherits(LabelInputAutosuggest, _LabelInput);

  function LabelInputAutosuggest() {
    _classCallCheck(this, LabelInputAutosuggest);

    return _possibleConstructorReturn(this, (LabelInputAutosuggest.__proto__ || Object.getPrototypeOf(LabelInputAutosuggest)).apply(this, arguments));
  }

  return LabelInputAutosuggest;
}(_Label2.default), _class.propTypes = {
  labels: _propTypes2.default.array,
  options: _propTypes2.default.array
}, _temp);
exports.default = LabelInputAutosuggest;