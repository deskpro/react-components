import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import classNames from 'classnames';

class Select extends React.Component {
  static propTypes = {
    className:   PropTypes.string,
    placeholder: PropTypes.string,
    onChange:    PropTypes.func,
    options:     PropTypes.array,
  };
  static defaultProps = {
    placeholder: 'Please select',
    onChange() {},
  };

  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { className, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.onChange;
    return (
      <ReactSelect
        className={classNames('dp-select', className)}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
export default Select;
