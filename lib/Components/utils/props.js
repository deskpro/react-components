'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childrenComponentType = childrenComponentType;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a function used in propTypes to validate that children are of a specific component type
 *
 * Example:
 * ```
 * class MyComponent extends React.Component {
 *  static propTypes = {
 *    children: childrenComponentType(MyOtherComponent)
 *  }
 * }
 * ```
 *
 * @param {React.Component} component The expected component
 * @returns {Function}
 */
function childrenComponentType(component) {
  return function (props, propName, componentName) {
    var error = null;
    _react2.default.Children.forEach(props[propName], function (child) {
      if (child.type !== component) {
        error = new Error('Children of "' + componentName + '" component must be of type "' + component.name + '"');
      }
    });
    return error;
  };
}