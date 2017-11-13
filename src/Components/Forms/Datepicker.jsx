import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { cssMatchComputedWidth } from 'utils/css';
import { dateNumberOfDaysInMonth, dateCalendarDays, DAYS, MONTHS } from 'utils/dates';
import { stringUpperFirst } from 'utils/strings';
import { objectKeyFilter } from 'utils/objects';
import { Popper } from 'Components/Common';
import Input from 'Components/Forms/Input';
import Select from 'Components/Forms/Select';
import Icon from 'Components/Icon';

/**
 * Renders an input with drop down date picker.
 */
export default class Datepicker extends React.Component {
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
    /**
     * Add time selector
     */
    withTime:    PropTypes.bool,
  };

  static defaultProps = {
    placeholder: 'DD/MM/YYYY',
    format:      'DD/MM/YYYY',
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
    withTime:    false,
  };

  constructor(props) {
    super(props);

    let date = props.date;
    let hours = null;
    let minutes = null;

    if (props.value) {
      const momentDate = moment(props.value, props.format);
      date = momentDate.toDate();
      hours = momentDate.hours();
      minutes = momentDate.minutes();
    }

    if (!date) {
      date = new Date();
    }

    this.state = {
      date,
      hours,
      minutes,
      value:  props.value ? date : null,
      opened: false
    };

    this.focused    = false;
    this.rootRef    = null;
    this.inputRef   = null;
    this.inputDOM   = null;
    this.resultsRef = null;
    this.resultsDOM = null;

    this.hours = Array(...new Array(24)).map((_, i) => ({ value: i, label: i }));
    this.minutes = Array(...new Array(60)).map((_, i) => ({ value: i, label: i }));
  }

  componentDidMount() {
    this.inputDOM   = this.inputRef.input;
    if (this.props.date) {
      this.inputRef.setValue(moment(this.props.date).format(this.props.format));
    }
    this.popperDOM = ReactDOM.findDOMNode(this.popperRef);
    this.updatePopperWidth();

    this.rootRef.addEventListener('mouseenter', this.handleMouseEnter);
    this.rootRef.addEventListener('mouseleave', this.handleMouseLeave);
    window.addEventListener('click', this.handleDocumentClick);
    window.addEventListener('resize', this.updatePopperWidth);
  }

  componentWillUnmount() {
    this.rootRef.removeEventListener('mouseenter', this.handleMouseEnter);
    this.rootRef.removeEventListener('mouseleave', this.handleMouseLeave);
    window.removeEventListener('click', this.handleDocumentClick);
    window.removeEventListener('resize', this.updatePopperWidth);
  }

  /**
   * Sets the width of the popper to match the input width
   */
  updatePopperWidth = () => {
    cssMatchComputedWidth(this.inputDOM, this.popperDOM);
  };

  focus = () => {
    this.inputRef.focus();
    this.handleInputFocus();
  };

  /**
   * Called when the mouse enters the root element
   */
  handleMouseEnter = () => {
    this.focused = true;
  };

  /**
   * Called when the mouse leaves the root element loses focus
   */
  handleMouseLeave = () => {
    this.focused = false;
  };

  /**
   * Called when the document is clicked
   */
  handleDocumentClick = () => {
    if (!this.focused) {
      this.popperRef.close();
    }
  };

  /**
   * Called by the popper when it's opened
   */
  handlePopperOpen = () => {
    this.setState({ opened: true });
  };

  /**
   * Called by the popper when it's closed
   */
  handlePopperClose = () => {
    this.setState({ opened: false });
  };

  /**
   * Called when the calendar previous icon is clicked
   */
  handlePrevClick = () => {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() - 1);
    this.setState({ date });
  };

  /**
   * Called when the calendar next icon is clicked
   */
  handleNextClick = () => {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() + 1);
    this.setState({ date });
  };

  /**
   * Called when a specific day on the calendar is clicked
   *
   * @param {Date} value
   */
  handleDayClick = (value) => {
    const date = moment(value);
    if (this.props.withTime) {
      date.hours(this.state.hours);
      date.minutes(this.state.minutes);
    }
    this.inputRef.setValue(date.format(this.props.format));
    this.popperRef.close();
    this.props.onSelect(date.toDate());
    this.props.onChange(date.format(this.props.format), this.props.name);
    this.setState({ value: date.toDate() });
  };

  handleHoursChange = (option) => {
    const hours = option.value;
    const date = moment(this.state.value).hours(hours);
    this.setState({
      hours,
    });
    if (date.isValid()) {
      this.setState({
        value: date.toDate(),
        date:  date.toDate(),
      });
      this.inputRef.setValue(date.format(this.props.format));
      this.props.onChange(date.format(this.props.format), this.props.name);
      this.props.onSelect(date.toDate());
    }
  };

  handleMinutesChange = (option) => {
    const minutes = option.value;
    const date = moment(this.state.value).minutes(minutes);
    this.setState({
      minutes,
    });
    if (date.isValid()) {
      this.setState({
        value: date.toDate(),
        date:  date.toDate(),
      });
      this.inputRef.setValue(date.format(this.props.format));
      this.props.onChange(date.format(this.props.format), this.props.name);
      this.props.onSelect(date.toDate());
    }
  };

  /**
   * Called when the input value changes
   */
  handleInputChange = (e, name) => {
    const value = moment(this.inputRef.getValue(), this.props.format, true);
    if (value.isValid()) {
      const date = value.toDate();
      this.props.onSelect(date);
      this.setState({
        value: date,
        date
      });
      if (this.props.withTime) {
        this.setState({
          hours:   value.hours(),
          minutes: value.minutes(),
        });
      }
    }
    if (this.props.onChange) {
      this.props.onChange(e, name);
    }
  };

  /**
   * Called when the input receives focus
   */
  handleInputFocus = (e) => {
    this.popperRef.open();
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  /**
   * Called when the calendar icon is clicked
   */
  handleIconClick = () => {
    this.inputRef.focus();
  };

  /**
   * Renders the calendar that's placed inside the popper
   *
   * @returns {XML}
   */
  renderCalendar() {
    const { months, days } = this.props;
    const date = this.state.date;

    /* eslint-disable react/no-array-index-key */
    return (
      <div className="dp-datepicker__calendar">
        <div className="dp-datepicker__calendar__month">
          <div className="dp-datepicker__calendar__month__icon">
            <Icon name="angle-left" onClick={this.handlePrevClick} />
          </div>
          <div className="dp-datepicker__calendar__month__text">
            {stringUpperFirst(months[date.getMonth()])} {date.getFullYear()}
          </div>
          <div className="dp-datepicker__calendar__month__icon">
            <Icon name="angle-right" onClick={this.handleNextClick} />
          </div>
        </div>
        <div className="dp-datepicker__calendar__weekdays">
          {days.map((d, i) => <div key={i}>{d[0].toUpperCase()}</div>)}
        </div>
        {this.renderMonth(date)}
      </div>
    );
  }

  /**
   * Renders the month days portion of the calendar
   *
   * @param {Date} date
   * @returns {XML}
   */
  renderMonth(date) {
    let sameDate = false;
    let currDay  = 0;
    const currDate = this.state.value;
    if (currDate) {
      currDay  = currDate.getDate();
      sameDate = date.getFullYear() === currDate.getFullYear()
        && date.getMonth() === currDate.getMonth();
    }

    const monthDays   = dateCalendarDays(date);
    const daysInMonth = dateNumberOfDaysInMonth(date);
    const weekDays    = [];
    for (let i = 0; i < monthDays.length; i++) {
      if (i % 7 === 0) {
        weekDays.push(monthDays.slice(i, i + 7));
      }
    }

    return (
      <div>
        {weekDays.map((week, i) => (
          <div key={i} className="dp-datepicker__calendar__week">
            {week.map((day, y) => (
              <div
                key={y}
                className={classNames({ 'dp-datepicker__calendar__day--selected': (sameDate && day === currDay) })}
                onClick={() => {
                  this.handleDayClick(new Date(date.getFullYear(), date.getMonth(), day));
                }}
              >
                {day > 0 && day <= daysInMonth ? day : null}
              </div>
            ))}
          </div>
          ))}
      </div>
    );
  }

  renderTimePicker = () => (
    <div className="dp-datepicker__time">
      <Select
        className="dp-datepicker__time__hours"
        name="hours"
        clearable={false}
        value={this.state.hours}
        options={this.hours}
        placeholder="HH"
        onChange={this.handleHoursChange}
      />
      <Select
        className="dp-datepicker__time__minutes"
        name="hours"
        clearable={false}
        value={this.state.minutes}
        options={this.minutes}
        placeholder="MM"
        onChange={this.handleMinutesChange}
      />
    </div>
    );

  render() {
    const { opened } = this.state;
    const { style, placeholder, className, value, withTime, name, ...props } = this.props;
    const inputProps = objectKeyFilter(props, Datepicker.propTypes);

    return (
      <div
        ref={ref => (this.rootRef = ref)}
        className={classNames(
          'dp-datepicker',
          className,
          {
            'dp-datepicker--active': opened
          }
        )}
        style={style}
      >
        <Input
          iconRight="calendar"
          ref={ref => (this.inputRef = ref)}
          placeholder={placeholder}
          onFocus={this.handleInputFocus}
          onIconClick={this.handleIconClick}
          onChange={this.handleInputChange}
          value={value}
          name={name}
          {...inputProps}
        />
        <Popper
          ref={ref => (this.popperRef = ref)}
          target={this.rootRef}
          placement="bottom"
          arrow={false}
          onOpen={this.handlePopperOpen}
          onClose={this.handlePopperClose}
        >
          {this.renderCalendar()}
          { withTime ? this.renderTimePicker() : null}
        </Popper>
      </div>
    );
  }
}
