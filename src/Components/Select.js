import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import Multiselect from 'react-bootstrap-multiselect';
import classNames from 'classnames';

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

  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  }

  handleChange = (value, added) => {
    let { values } = this.state;
    if (added) {
      if (!values.includes(value[0].value)) {
        values.push(value[0].value);
      }
    } else {
      values = values.filter(item => item !== value[0].value);
    }
    this.setState({
      values
    });
    this.props.handleChange(values);
    this.element.syncData();
  };

  handleSelectAll = () => {
    const values = [];
    this.props.options.forEach((item) => {
      values.push(item.value);
    });
    this.setState({
      values
    });
    this.props.handleChange(values);
    this.element.syncData();
  };

  handleDeselectAll = () => {
    this.setState({
      values: []
    });
    this.props.handleChange([]);
    this.element.syncData();
  };

  render() {
    const { options, ...elementProps } = this.props;
    const self = this;
    const props = Object.assign({}, elementProps);

    const data = options.map((option) => {
      const newOption = Object.assign({}, option);
      if (self.state.values.includes(newOption.value)) {
        newOption.selected = true;
      }
      return newOption;
    });

    delete props.onChange;
    delete props.handleChange;
    return (
      <Multiselect
        data={data}
        ref={(c) => { this.element = c; }}
        multiple
        enableCaseInsensitiveFiltering
        filterBehavior="text"
        onChange={this.handleChange}
        onSelectAll={this.handleSelectAll}
        onDeselectAll={this.handleDeselectAll}
        templates={{
          // button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
          // ul: '<ul class="multiselect-container dropdown-menu"></ul>',
          // filter: '<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
          filterClearBtn: '<i class="fa fa-times-circle">',
          li:             '<li><a tabindex="0"><label></label></a></li>',
          // divider: '<li class="multiselect-item divider"></li>',
          // liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
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
    onChange:    PropTypes.func,
    options:     PropTypes.array,
    multiple:    PropTypes.bool,
  };
  static defaultProps = {
    placeholder: 'Please select',
    multiple:    false,
    onChange() {},
  };

  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { className, multiple, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.onChange;
    if (multiple) {
      return (
        <div className={classNames('dp-select', className)}>
          <DpMultiselect
            handleChange={this.handleChange}
            {...elementProps}
          />
        </div>
      );
    }
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
