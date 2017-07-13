import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import { Popper } from 'Components/Common';
import Input from 'Components/Forms/Input';
import Icon from 'Components/Icon';

const DAYS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getNumberOfDaysInMonth(date) {
  const copy = new Date(new Date(date).setDate(1));
  copy.setMonth(copy.getMonth() + 1);
  copy.setDate(0);
  return copy.getDate();
}

function getCalendarDays(date) {
  const copy = new Date(new Date(date).setDate(1));
  const offset = copy.getDay();
  copy.setMonth(copy.getMonth() + 1);
  copy.setDate(0);

  const daysInMonth = copy.getDate();
  let totalSquares = ((offset + daysInMonth) / 7 | 0) * 7;
  totalSquares += (offset + daysInMonth) % 7 ? 7 : 0;

  const calendarSquares = [];
  for (let i = 1; i <= totalSquares; i++) {
    calendarSquares.push(i - offset);
  }

  return calendarSquares;
}

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
      date: props.date
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

  handleMouseEnter = () => {
    this.focused = true;
  };

  handleMouseLeave = () => {
    this.focused = false;
  };

  handleDocumentClick = () => {
    if (!this.focused) {
      this.popperRef.close();
    }
  };

  handleInputFocus = (e) => {
    this.popperRef.open();
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  handlePrevClick = () => {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() - 1);
    this.setState({ date });
  };

  handleNextClick = () => {
    const date = new Date(this.state.date);
    date.setMonth(date.getMonth() + 1);
    this.setState({ date });
  };

  handleDayClick = (date) => {
    this.inputRef.setValue(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    this.popperRef.close();
    this.props.onSelect(date);
    this.setState({ date });
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
          {days.map((d, i) => {
            return <div key={i}>{d[0]}</div>;
          })}
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
    const monthDays   = getCalendarDays(date);
    const daysInMonth = getNumberOfDaysInMonth(date);
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
    const { style, placeholder, className, ...props } = this.props;
    const inputProps = objectKeyFilter(props, Datepicker.propTypes);

    return (
      <div
        ref={ref => this.rootRef = ref}
        className={classNames('dp-datepicker', className)}
        style={style}
      >
        <Input
          iconRight="calendar"
          ref={ref => this.inputRef = ref}
          placeholder={placeholder}
          onFocus={this.handleInputFocus}
          {...inputProps}
        />
        <Popper
          ref={ref => this.popperRef = ref}
          target={this.rootRef}
          placement="bottom"
          arrow={false}
          opened
        >
          {this.renderCalendar()}
        </Popper>
      </div>
    );
  }
}
