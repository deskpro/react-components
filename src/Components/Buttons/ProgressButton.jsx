import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import Progress from 'Components/Progress';
import ProgressBar from 'Components/ProgressBar';

/**
 * Renders a button which contains a progress bar.
 */
export default class ProgressButton extends React.Component {
  static propTypes = {
    /**
     * The percentage complete.
     */
    percent:   PropTypes.number,
    /**
     * The button size.
     */
    size:      PropTypes.oneOf(['s', 'm', 'l', 'small', 'medium', 'large']),
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
    percent:   0,
    size:      'large',
    className: '',
    children:  ''
  };

  render() {
    const {
      percent, size, className, children, ...props
    } = this.props;

    return (
      <div
        className={classNames('dp-progress-button', `dp-progress-button--${size[0]}`, className)}
        {...objectKeyFilter(props, ProgressButton.propTypes)}
      >
        <div className="dp-progress-button__label">
          {children}
        </div>
        <Progress size="small" type={percent < 100 ? 'primary' : 'cta'}>
          <ProgressBar percent={percent} />
        </Progress>
      </div>
    );
  }
}
