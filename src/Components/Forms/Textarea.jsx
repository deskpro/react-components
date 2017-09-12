import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import noop from 'utils/noop';

/**
 * Textarea component.
 */
export default class Textarea extends React.Component {
  static propTypes = {
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
    value:     '',
    name:      '',
    className: '',
    onChange:  noop
  };

  handleChange = (event) => {
    this.props.onChange(event.currentTarget.value || '', event.currentTarget.name);
  };

  render() {
    const { value, name, className, ...props } = this.props;

    return (
      <div
        className={classNames('dp-textarea', className)}
        {...objectKeyFilter(props, Textarea.propTypes)}
      >
        <textarea name={name} value={value} onChange={this.handleChange} />
      </div>
    );
  }
}
