import React from 'react';

/**
 * Returns a boolean value indicating whether the given value is a
 * class which extends React.Component
 *
 * @param {object} component The object to test
 * @returns {boolean}
 */
export function domIsReactClassComponent(component) {
  return component instanceof React.Component || !!((
    typeof component === 'function' &&
    !!component.prototype.isReactComponent
  ));
}

/**
 * Returns a boolean value indicating whether the given object is a
 * stateless functional component
 *
 * @param {object} component The object to test
 * @returns {boolean}
 */
export function domIsReactFunctionComponent(component) {
  return !!((
    typeof component === 'function' &&
    String(component).includes('_react2.default.createElement')
  ));
}

/**
 * Returns a boolean value indicating whether the given object is any
 * type of React component
 *
 * @param {object} component The object to test
 * @returns {boolean}
 */
export function domIsReactComponent(component) {
  return !!((
    domIsReactClassComponent(component) ||
    domIsReactFunctionComponent(component)
  ));
}

/**
 * Returns a boolean value indicating whether the given object is a valid
 * DOM or React element
 *
 * @param {object} element The object to test
 * @returns {boolean}
 */
export function domIsElement(element) {
  return React.isValidElement(element);
}

