import React from 'react';
import PropTypes from 'prop-types';
import { stringHighlight } from 'utils/strings';

/**
 * Wraps a phrase in <i> tags for the sake of highlighting the phrase.
 */
const Highlighter = ({ highlight, element, children, ...props }) => (
  React.createElement('span', {
    ...props,
    dangerouslySetInnerHTML: { __html: stringHighlight(children, highlight, element) }
  })
);

Highlighter.propTypes = {
  /**
   * The word or phrase to highlight.
   */
  highlight: PropTypes.string.isRequired,
  /**
   * Type of element that surrounds the highlighted word.
   */
  element:   PropTypes.string,
  /**
   * The component children.
   */
  children:  PropTypes.string
};

Highlighter.defaultProps = {
  element: 'i'
};

export default Highlighter;
