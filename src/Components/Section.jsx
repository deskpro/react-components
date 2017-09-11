import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'Components/Common/Heading';

/**
 * Renders a component representing a page section.
 */
const Section = ({ title, className, children, ...props }) => (
  <section className={classNames('up-section', classNames)} {...props}>
    {title && <Heading size={3} underline>{title}</Heading>}
    {children}
  </section>
);

Section.propTypes = {
  /**
   * Title to display inside the section.
   */
  title:     PropTypes.string,
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
  className: '',
  children:  []
};

export default Section;
