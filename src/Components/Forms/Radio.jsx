import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from '../../utils/newid';
import { objectKeyFilter } from '../../utils/objects';
import Label from './Label';

export class Radio extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className:       PropTypes.string,
    disabled:        PropTypes.bool,
    id:              PropTypes.string,
    value:           PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children:        PropTypes.node,
    onChange:        PropTypes.func,
    stopPropagation: PropTypes.bool,
    style:           PropTypes.object,
  };

  static defaultProps = {
    onChange() {},
    stopPropagation: false,
    disabled:        false,
    id:              '',
    value:           '',
    style:           {},
    className:       '',
    children:        ''
  };

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id;
    } else {
      this.id = newId();
    }
  }

  handleChange = (event) => {
    if (this.props.stopPropagation) {
      event.stopPropagation();
    }
    this.props.onChange(event.target.checked, this.props.value, event.target.name);
  };

  render() {
    const {
      children, className, value, style, disabled, ...props
    } = this.props;
    return (
      <div
        className={classNames(
          'dp-input--radio',
          className,
          { 'dp-input--radio--disabled': this.props.disabled }
        )}
        style={style}
      >
        <label htmlFor={this.id}>
          <input
            type="radio"
            value={value}
            id={this.id}
            onChange={this.handleChange}
            disabled={disabled}
            {...objectKeyFilter(props, Radio.propTypes)}
          />
          <i />
          <Label htmlFor={this.id}>{children}</Label>
        </label>
      </div>
    );
  }
}

export default Radio;
