import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'Components/utils/objects';
import { regexpEscape } from 'Components/utils/regexp';
import { List, ListElement } from 'Components/Common';
import Input from 'Components/Forms/Input';

/**
 * Creates an inline search input.
 */
export default class SearchInline extends Input {
  static propTypes = {
    /**
     * List of search results.
     */
    results:   PropTypes.array,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Styles applied to the root element.
     */
    style:     PropTypes.object,
    /**
     * Children to render.
     */
    children:  PropTypes.node
  };

  static defaultProps = {};

  /**
   * Wraps the input value in <i></i> tags
   *
   * @param {string} result
   * @param {RegExp} regexp
   * @returns {{__html: *}}
   */
  static highlightResult(result, regexp) {
    return { __html: result.replace(regexp, '<i>$1</i>') };
  }

  constructor(props) {
    super(props);
    this.inputRef   = null;
    this.inputDOM   = null;
    this.resultsRef = null;
    this.resultsDOM = null;
  }

  componentDidMount() {
    this.inputDOM   = this.inputRef.input;
    this.resultsDOM = ReactDOM.findDOMNode(this.resultsRef);
    this.updateResultsWidth();
    window.addEventListener('resize', this.updateResultsWidth);
  }

  updateResultsWidth = () => {
    this.resultsDOM.style.width = window.getComputedStyle(this.inputDOM, null).width;
  };

  /**
   * Renders the search results in a drop down
   *
   * @returns {XML}
   */
  renderResults() {
    const results = this.props.results;
    const value   = this.inputDOM ? this.inputDOM.value : null;
    if (!value || results.length === 0) {
      return (
        <List
          ref={ref => this.resultsRef = ref}
        />
      );
    }
    const regexp = new RegExp(`(${regexpEscape(value)})`, 'ig');

    return (
      <List ref={ref => this.resultsRef = ref} className="dp-search-inline__results">
        {results.map((result, i) => (
          <ListElement
            key={i}
            dangerouslySetInnerHTML={SearchInline.highlightResult(result, regexp)}
          />
          ))}
      </List>
    );
  }

  render() {
    const { results, className, style, ...props } = this.props;
    const inputProps = objectKeyFilter(props, SearchInline.propTypes);
    inputProps.icon = 'search';

    return (
      <div
        className={classNames(
          'dp-search-inline',
          {
            'dp-search-inline--open': results.length > 0
          },
          className
        )}
        style={style}
      >
        <Input ref={ref => this.inputRef = ref} {...inputProps} />
        {this.renderResults()}
      </div>
    );
  }
}
