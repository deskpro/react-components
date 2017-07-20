import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import { dateToMonth, MONTHS_SHORT } from 'utils/dates';

/**
 * Displays the month and day in badge or pill format.
 */
const DateBadge = ({ date, month, day, pill, className, ...props }) => (
  <div
    className={classNames(
      'db-badge dp-date-badge',
      className,
      {
        'dp-date-badge--pill': pill
      }
    )}
    {...objectKeyFilter(props, DateBadge.propTypes)}
  >
    <div className="dp-date-badge__month">
      {date ? dateToMonth(date, true) : month}
    </div>
    <div className="dp-date-badge__day">
      {date ? date.getDate() : day}
    </div>
  </div>
);

DateBadge.propTypes = {
  /**
   * Date to display using a Date instance.
   */
  date:      PropTypes.instanceOf(Date),
  /**
   * Month to display.
   */
  month:     PropTypes.oneOf(MONTHS_SHORT),
  /**
   * Day to display.
   */
  day:       PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Display the date as a single line pill button.
   */
  pill:      PropTypes.bool,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string
};

DateBadge.defaultProps = {
  date:      null,
  month:     MONTHS_SHORT[0],
  day:       0,
  pill:      false,
  className: ''
};

export default DateBadge;
