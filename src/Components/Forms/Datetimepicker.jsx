import React from 'react';
import PropTypes from 'prop-types';
import noop from 'utils/noop';
import { DAYS, MONTHS } from 'utils/dates';
import Datepicker from './Datepicker';

/**
 * Renders an input with drop down date picker.
 */
export default class Datetimepicker extends React.Component {
  static propTypes = {
    /**
     * Text to display in the input field until a value is chosen.
     */
    placeholder: PropTypes.string,
    /**
     * Moment format to use to render the input when the date is selected.
     */
    format:      PropTypes.string,
    /**
     * Initial value of the input (this property has priority over the date one)
     */
    value:       PropTypes.string,
    /**
     * Name of the input
     */
    name:        PropTypes.string,
    /**
     * The initial date to display.
     */
    date:        PropTypes.instanceOf(Date),
    /**
     * Days of the week, e.g. 'Sun', 'Mon', 'Tue', etc.
     */
    days:        PropTypes.array,
    /**
     * Months of the year, e.g. 'January', 'February', etc.
     */
    months:      PropTypes.array,
    /**
     * CSS classes to apply to the element.
     */
    className:   PropTypes.string,
    /**
     * Styles applied to the root element.
     */
    style:       PropTypes.object,
    /**
     * Called when a date is chosen.
     */
    onSelect:    PropTypes.func,
    /**
     * Called when the value is changed.
     */
    onChange:    PropTypes.func,
    /**
     * Called when the component receives focus.
     */
    onFocus:     PropTypes.func,
  };

  static defaultProps = {
    placeholder: '',
    format:      '',
    value:       '',
    name:        null,
    date:        null,
    days:        DAYS,
    months:      MONTHS,
    onSelect:    noop,
    onChange:    noop,
    onFocus:     noop,
    className:   '',
    style:       {},
  };

  render() {
    const { ...props } = this.props;

    return (
      <Datepicker withTime {...props} />
    );
  }
}
