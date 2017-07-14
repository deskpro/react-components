import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import Multiselect from 'react-bootstrap-multiselect';
import classNames from 'classnames';
import Icon from 'Components/Icon';

class DpMultiselect extends React.Component {
  static propTypes = {
    value:        PropTypes.array,
    options:      PropTypes.array,
    handleChange: PropTypes.func,
  };
  static defaultProps = {
    value: [],
    handleChange() {},
  };

  handleChange = (value, added) => {
    let values = this.props.value.slice(0);
    if (added) {
      if (values.indexOf(value[0].value) === -1) {
        values.push(value[0].value);
      }
    } else {
      values = values.filter(item => item !== value[0].value);
    }
    this.props.handleChange(values);
  };

  handleSelectAll = () => {
    const values = [];
    this.props.options.forEach((item) => {
      values.push(item.value);
    });
    this.props.handleChange(values);
  };

  handleDeselectAll = () => {
    this.props.handleChange([]);
  };

  render() {
    const { options, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.value;
    delete props.onChange;
    delete props.handleChange;

    return (
      <Multiselect
        data={options}
        ref={(c) => { this.element = c; }}
        multiple
        enableCaseInsensitiveFiltering
        filterBehavior="text"
        onChange={this.handleChange}
        onSelectAll={this.handleSelectAll}
        onDeselectAll={this.handleDeselectAll}
        templates={{
          button:         '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <i class="fa fa-caret-down"></button>', // eslint-disable-line max-len
          filterClearBtn: '<i class="fa fa-times-circle">',
          li:             '<li><a tabindex="0"><label></label></a></li>'
        }}
        {...props}
      />
    );
  }
}
class Select extends React.Component {
  static propTypes = {
    className:   PropTypes.string,
    placeholder: PropTypes.string,
    icon:        PropTypes.string,
    onChange:    PropTypes.func,
    options:     PropTypes.array,
    multiple:    PropTypes.bool,
  };
  static defaultProps = {
    placeholder: 'Please select',
    multiple:    false,
    onChange() {},
  };

  getIcon = () => {
    const { icon } = this.props;
    if (!icon) {
      return null;
    }
    return <Icon name={icon} />;
  };

  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { icon, className, multiple, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.onChange;
    if (multiple) {
      return (
        <div
          className={
          classNames(
            'dp-select',
            className,
            {
              'dp-input--with-icon': icon
            }
          )
        }
        >
          {this.getIcon()}
          <DpMultiselect
            handleChange={this.handleChange}
            {...elementProps}
          />
        </div>
      );
    }
    return (
      <div
        className={
          classNames(
            'dp-select',
            className,
            {
              'dp-input--with-icon': icon
            }
          )
      }
      >
        {this.getIcon()}
        <ReactSelect
          className={classNames('dp-select', className)}
          onChange={this.handleChange}
          {...props}
        />
      </div>
    );
  }
}
export default Select;
