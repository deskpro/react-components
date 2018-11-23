import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import classNames from 'classnames';
import Icon from '../Icon';

const SelectContainer = ({ children, ...props }) => (
  <components.SelectContainer
    {...props}
    className={classNames(
      'react-select',
      {
        'react-select__is-focused': props.isFocused,
        'react-select__is-open':    props.selectProps.menuIsOpen
      }
    )}
  >
    {children}
  </components.SelectContainer>
);


const DropdownIndicator = () => (
  <div className="react-select__dropdown-indicator" />
);

class Select extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className:   PropTypes.string,
    /**
     * Name of the form element.
     */
    name:        PropTypes.string,
    /**
     * Displayed in the drop down before a value is entered.
     */
    placeholder: PropTypes.string,
    /**
     * Icon to display to the left of the text.
     */
    icon:        PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Allow multiple options to be selection.
     */
    multiple:    PropTypes.bool,
    /**
     * Called when the selected value changes.
     */
    onChange:    PropTypes.func,
    /**
     * Array of values to
     */
    options:     PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.node.isRequired,
    })).isRequired,
  };

  static defaultProps = {
    placeholder: 'Please select',
    multiple:    false,
    name:        '',
    icon:        '',
    className:   '',
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
    this.props.onChange(value, this.props.name);
  };

  render() {
    const {
      icon, name, className, value, ...elementProps
    } = this.props;
    const props = Object.assign({}, elementProps);
    const selectValue = typeof value === 'object' ? value : this.props.options.find(option => option.value === value);
    delete props.onChange;
    return (
      <div
        className={
          classNames(
            'dp-select',
            className,
            {
              'dp-input--with-icon': icon,
              'is-disabled':         props.disabled
            }
          )
        }
      >
        {this.getIcon()}
        <ReactSelect
          name={name}
          className={classNames('dp-select', className)}
          classNamePrefix="react-select"
          components={{ SelectContainer, DropdownIndicator }}
          onChange={this.handleChange}
          value={selectValue}
          {...props}
        />
      </div>
    );
  }
}
export default Select;
