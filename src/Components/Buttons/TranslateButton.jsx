import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { objectKeyFilter } from '../../utils/objects';
import ProgressButton from './ProgressButton';
import Icon from '../Icon';

/**
 * Renders a progress button along with globe icon.
 */
export default class TranslateButton extends React.Component {
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
    size:      'large',
    percent:   0,
    className: '',
    children:  ''
  };

  render() {
    const {
      percent, size, className, children, ...props
    } = this.props;

    return (
      <div
        className={classNames('dp-translate-button', `dp-translate-button--${size[0]}`, className)}
        {...objectKeyFilter(props, TranslateButton.propTypes)}
      >
        <Icon name={faGlobe} />
        <ProgressButton percent={percent} size={size}>
          {children}
        </ProgressButton>
      </div>
    );
  }
}
