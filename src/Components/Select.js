import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import Multiselect from 'react-bootstrap-multiselect';
import classNames from 'classnames';

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
      const { options, ...multiProps } = elementProps;
      return (
        <div className={classNames('dp-select', className)}>
          <Multiselect
            data={options}
            multiple
            enableCaseInsensitiveFiltering
            filterBehavior="text"
            templates={{
              // button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
              // ul: '<ul class="multiselect-container dropdown-menu"></ul>',
              // filter: '<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
              filterClearBtn: '<i class="fa fa-times-circle">',
              li:             '<li><a tabindex="0"><label></label></a></li>',
              // divider: '<li class="multiselect-item divider"></li>',
              // liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
            }}
            {...multiProps}
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
