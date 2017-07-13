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
    style:           {},
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
    this.props.onChange(event.target.checked, this.props.value);
  };

  render() {
    const { children, className, value, style, disabled, ...props } = this.props;
    return (
      <div
        className={classNames(
          'dp-input--checkbox',
          className,
          { 'dp-input--checkbox--disabled': this.props.disabled }
        )}
        style={style}
      >
        <input
          type="checkbox"
          value={value}
          id={this.id}
          onChange={this.handleChange}
          disabled={disabled}
          {...objectKeyFilter(props, Checkbox.propTypes)}
        />
        <label htmlFor={this.id} className="dp-input--checkbox__checkbox" />
        <Label htmlFor={this.id}>{children}</Label>
      </div>
    );
  }
}

export default Checkbox;
