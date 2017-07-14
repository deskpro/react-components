import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { dateNumberOfDaysInMonth, dateCalendarDays, DAYS, MONTHS } from 'utils/dates';
import { objectKeyFilter } from 'utils/objects';
import { Popper } from 'Components/Common';
import Input from 'Components/Forms/Input';
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
    onSelect:    PropTypes.func
  };

  static defaultProps = {
    placeholder: 'DD/MM/YYYY',
    date:        new Date(),
    days:        DAYS,
    months:      MONTHS,
    onSelect:    noop
  };

  constructor(props) {
    super(props);

    this.state = {
      date:   props.date,
      value:  null,
      opened: false
    };

    this.focused    = false;
    this.rootRef    = null;
    this.inputRef   = null;
    this.inputDOM   = null;
    this.resultsRef = null;
    this.resultsDOM = null;
  }

  componentDidMount() {
    this.inputDOM   = this.inputRef.input;
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
    this.popperDOM.style.width = window.getComputedStyle(this.inputDOM, null).width;
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
   * @param {Date} date
   */
  handleDayClick = (date) => {
    this.inputRef.setValue(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    this.popperRef.close();
    this.props.onSelect(date);
    this.setState({ value: date });
  };

  /**
   * Called when the input value changes
   */
  handleInputChange = (e) => {
    const value = new Date(this.inputRef.getValue());
    if (value) {
      this.props.onSelect(value);
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
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
   * Renders the calendar that's placed inside the popper
   *
   * @returns {XML}
   */
  renderCalendar() {
    const { months, days } = this.props;
    const date = this.state.date;

    return (
      <div className="dp-datepicker__calendar">
        <div className="dp-datepicker__calendar__month">
          <div className="dp-datepicker__calendar__month__icon">
            <Icon name="angle-left" onClick={this.handlePrevClick} />
          </div>
          <div className="dp-datepicker__calendar__month__text">
            {months[date.getMonth()]} {date.getFullYear()}
          </div>
          <div className="dp-datepicker__calendar__month__icon">
            <Icon name="angle-right" onClick={this.handleNextClick} />
          </div>
        </div>
        <div className="dp-datepicker__calendar__weekdays">
          {days.map((d, i) => <div key={i}>{d[0]}</div>)}
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

  render() {
    const { opened } = this.state;
    const { style, placeholder, className, ...props } = this.props;
    const inputProps = objectKeyFilter(props, Datepicker.propTypes);

    return (
      <div
        ref={ref => this.rootRef = ref}
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
          ref={ref => this.inputRef = ref}
          placeholder={placeholder}
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
          {...inputProps}
        />
        <Popper
          ref={ref => this.popperRef = ref}
          target={this.rootRef}
          placement="bottom"
          arrow={false}
          onOpen={this.handlePopperOpen}
          onClose={this.handlePopperClose}
        >
          {this.renderCalendar()}
        </Popper>
      </div>
    );
  }
}
