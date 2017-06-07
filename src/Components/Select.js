import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';
import classNames from 'classnames';

class Select extends React.Component {
  static propTypes = {
    className:   PropTypes.string,
    placeholder: PropTypes.string,
    onChange:    PropTypes.func,
    options:     PropTypes.object,
  };
  static defaultProps = {
    placeholder: 'Please select'
  };

  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { className, ...elementProps } = this.props;
    return (
      <ReactSelect
        className={classNames('dp-select', className)}
        onChange={this.handleChange}
        {...elementProps}
      />
    );
  }
}
export default Select;
