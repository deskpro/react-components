import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { cssMatchComputedWidth } from 'utils/css';
import { objectKeyFilter } from 'utils/objects';
import { List, ListElement, Highlighter } from 'Components/Common';
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
  }

  componentDidUpdate() {
    this.updateResultsWidth();
  }

  /**
   * Sets the width of the results drop down to match the input width
   */
  updateResultsWidth = () => {
    cssMatchComputedWidth(this.inputDOM, this.resultsDOM);
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
          ref={ref => (this.resultsRef = ref)}
        />
      );
    }

    /* eslint-disable react/jsx-no-bind */
    /* eslint-disable react/no-array-index-key */
    return (
      <List ref={ref => (this.resultsRef = ref)} className="dp-search-inline__results">
        {results.map((result, i) => (
          <ListElement key={i} onClick={onSelect.bind(this, result, i)}>
            <Highlighter highlight={value}>
              {result}
            </Highlighter>
          </ListElement>
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
        <Input ref={ref => (this.inputRef = ref)} icon="search" {...inputProps} />
        {this.renderResults()}
      </div>
    );
  }
}
