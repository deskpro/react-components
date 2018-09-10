import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/fontawesome-free-solid/index';
import { faStar as faStarO } from '@fortawesome/fontawesome-free-regular';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';

/**
 * A single star in the group of stars
 */
const StarIcon = ({
  value, icon, onClick, ...props
}) => (
  <FontAwesomeIcon icon={icon} size="sm" onClick={() => { onClick(value); }} {...props} />
);

StarIcon.propTypes = {
  value:   PropTypes.number,
  icon:    PropTypes.object,
  onClick: PropTypes.func
};

StarIcon.defaultProps = {
  value:   0,
  icon:    faStar,
  onClick: noop
};

/**
 * Renders a group of star icons which represent a vote between 1 and 5.
 */
export default class Stars extends React.Component {
  static propTypes = {
    /**
     * A number between 1 and 5 representing the vote value.
     */
    value:     PropTypes.number.isRequired,
    /**
     * Called when a star is clicked with the star value.
     */
    onClick:   PropTypes.func,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string
  };

  static defaultProps = {
    className: '',
    onClick:   noop
  };

  render() {
    const {
      value, onClick, className, ...props
    } = this.props;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= value) {
        stars.push(<StarIcon key={i} value={i} onClick={onClick} icon={faStar} />);
      } else if (i === value + 0.5) {
        stars.push(<StarIcon key={i} value={i} onClick={onClick} icon={faStarHalf} />);
      } else {
        stars.push(<StarIcon key={i} value={i} onClick={onClick} icon={faStarO} />);
      }
    }

    return (
      <div
        className={classNames('dp-stars', className)}
        {...objectKeyFilter(props, Stars.propTypes)}
      >
        {stars}
      </div>
    );
  }
}
