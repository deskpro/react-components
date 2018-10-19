import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AutosizeTextarea from 'react-textarea-autosize';
import { objectKeyFilter } from '../../utils/objects';
import noop from '../../utils/noop';

/**
 * Textarea component.
 */
export default class Textarea extends React.Component {
  static propTypes = {

    /**
     * Should we use autosizing textarea
     */
    autosize:  PropTypes.bool,
    /**
     * The textarea value.
     */
    value:     PropTypes.string,
    /**
     * The textarea name.
     */
    name:      PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Called when the textarea value changes.
     */
    onChange:  PropTypes.func
  };

  static defaultProps = {
    autosize:  false,
    value:     '',
    name:      '',
    className: '',
    onChange:  noop
  };

  handleChange = (event) => {
    this.props.onChange(event.currentTarget.value || '', event.currentTarget.name);
  };

  render() {
    const {
      autosize, value, name, className, ...props
    } = this.props;

    let textarea;

    if (autosize) {
      textarea = <AutosizeTextarea name={name} value={value} onChange={this.handleChange} {...objectKeyFilter(props, Textarea.propTypes)} />;
    } else {
      textarea = <textarea name={name} value={value} onChange={this.handleChange} {...objectKeyFilter(props, Textarea.propTypes)} />;
    }

    return (
      <div
        className={classNames('dp-textarea', className)}
      >
        {textarea}
      </div>
    );
  }
}
