import React from 'react';

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
export function childrenComponentType(component) {
  return function(props, propName, componentName) {
    let error = null;
    React.Children.forEach(props[propName], (child) => {
      if (child.type !== component) {
        error = new Error(
          `Children of "${componentName}" component must be of type "${component.name}"`
        );
      }
    });
    return error
  }
}
