import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';

/**
 * ${classname} component.
 */
export default class ${classname} extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children: PropTypes.node
  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    const { className, children, ...props } = this.props;

    return (
      <div
        className={classNames('dp-', className)}
        {...objectKeyFilter(props, ${classname}.propTypes)}
      >
        {children}
      </div>
    )
  }
}
