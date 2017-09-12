import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'Components/Common/Heading';

/**
 * Renders a component representing a page section.
 */
const Section = ({ title, hidden, className, children, ...props }) => {
  const classes = classNames(
    'dp-section',
    {
      'dp-section--hidden': hidden
    },
    classNames
  );

  return (
    <section className={classes} {...props}>
      {title && <Heading size={3} underline>{title}</Heading>}
      {children}
    </section>
  );
};

Section.propTypes = {
  /**
   * Title to display inside the section.
   */
  title:     PropTypes.string,
  /**
   * Whether the section is hidden.
   */
  hidden:    PropTypes.bool,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

Section.defaultProps = {
  title:     '',
  hidden:    false,
  className: '',
  children:  []
};

export default Section;
