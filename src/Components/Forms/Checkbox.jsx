/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'utils/newid';
import { objectKeyFilter } from 'utils/objects';
import Label from 'Components/Forms/Label';

class Checkbox extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    onChange:        PropTypes.func,
    style:           PropTypes.object,
    className:       PropTypes.string,
    stopPropagation: PropTypes.bool,
    disabled:        PropTypes.bool,
    readOnly:        PropTypes.bool,
    existing:        PropTypes.bool,
    checked:         PropTypes.bool,
    id:              PropTypes.string,
    value:           PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children:        PropTypes.node,
  };

  static defaultProps = {
    onChange() {},
    style:           {},
    className:       '',
    checked:         false,
    stopPropagation: false,
    disabled:        false,
    readOnly:        false,
    existing:        false,
    id:              null,
    value:           '',
    children:        null
  };

  constructor(props) {
    super(props);
    this.state = {
      changed: false
    };
  }

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id;
    } else {
      this.id = newId();
    }
  }

  handleChange = (event) => {
    this.setState({
      changed: true
    });
    if (this.props.stopPropagation) {
      event.stopPropagation();
    }
    if (!this.props.disabled && !this.props.readOnly) {
      this.props.onChange(event.target.checked, this.props.value, event.target.name);
    }
  };

  render() {
    const {
      children, className, value, style, disabled, readOnly, checked, ...props
    } = this.props;
    return (
      <div
        className={classNames(
          'dp-input--checkbox',
          className,
          {
            'dp-input--checkbox--disabled':  this.props.disabled,
            'dp-input--checkbox--read-only': this.props.readOnly,
            'dp-input--checkbox--existing':  this.props.existing && !this.state.changed && !this.props.checked,
          }
        )}
        style={style}
      >
        <input
          type="checkbox"
          value={value}
          id={this.id}
          onChange={this.handleChange}
          disabled={disabled || readOnly}
          checked={checked}
          {...objectKeyFilter(props, Checkbox.propTypes)}
        />
        <label htmlFor={this.id} className="dp-input--checkbox__checkbox" />
        <Label htmlFor={this.id}>{children}</Label>
      </div>
    );
  }
}

export default Checkbox;
