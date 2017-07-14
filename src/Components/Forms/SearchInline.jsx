import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import { stringHighlight } from 'utils/strings';
import { List, ListElement } from 'Components/Common';
import Input from 'Components/Forms/Input';

/**
 * Renders an inline search input.
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
    children:  PropTypes.node,
    /**
     * Called when a search result is clicked.
     */
    onSelect:  PropTypes.func
  };

  static defaultProps = {
    onSelect: noop
  };

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

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateResultsWidth);
  }

  /**
   * Sets the width of the results drop down to match the input width
   */
  updateResultsWidth = () => {
    this.resultsDOM.style.width = window.getComputedStyle(this.inputDOM, null).width;
  };

  /**
   * Renders the search results in a drop down
   *
   * @returns {XML}
   */
  renderResults() {
    const { results, onSelect } = this.props;
    const value = this.inputDOM ? this.inputDOM.value : null;
    if (!value || results.length === 0) {
      return (
        <List
          ref={ref => this.resultsRef = ref}
        />
      );
    }

    return (
      <List ref={ref => this.resultsRef = ref} className="dp-search-inline__results">
        {results.map((result, i) => (
          <ListElement
            key={i}
            onClick={onSelect.bind(this, result, i)}
            dangerouslySetInnerHTML={{ __html: stringHighlight(result, value) }}
          />
          ))}
      </List>
    );
  }

  render() {
    const { results, className, style, ...props } = this.props;
    const inputProps = objectKeyFilter(props, SearchInline.propTypes);

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
        <Input ref={ref => this.inputRef = ref} icon="search" {...inputProps} />
        {this.renderResults()}
      </div>
    );
  }
}
