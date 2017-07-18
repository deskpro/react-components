import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';

/**
 * Renders a progress bar.
 */
export default class Progress extends React.Component {
  static propTypes = {
    /**
     * The size of the progress bar.
     */
    size:      PropTypes.oneOf(['s', 'm', 'l', 'small', 'medium', 'large']),
    /**
     * The type of progress bar to render.
     */
    type:      PropTypes.oneOf(['primary', 'cta']),
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node
  };

  static defaultProps = {
    size: 'large',
    type: 'primary'
  };

  render() {
    const { size, type, className, children, ...props } = this.props;

    return (
      <div
        className={classNames('dp-progress', `dp-progress--${type}`, `dp-progress--${size[0]}`, className)}
        {...objectKeyFilter(props, Progress.propTypes)}
      >
        {children}
      </div>
    );
  }
}
