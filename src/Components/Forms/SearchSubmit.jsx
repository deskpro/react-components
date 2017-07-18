import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import { List, ListElement, Popper } from 'Components/Common';
import Input from 'Components/Forms/Input';
import Button from 'Components/Button';
import Icon from 'Components/Icon';

/**
 * Renders a search input with submit button, where search results are displayed
 * in a popper below the input.
 */
export default class SearchSubmit extends Input {
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
     * Called when the search form is submitted.
     */
    onSubmit:  PropTypes.func,
    /**
     * Called when a search result is clicked.
     */
    onSelect:  PropTypes.func
  };

  static defaultProps = {
    onSubmit: noop,
    onSelect: noop
  };

  constructor(props) {
    super(props);
    this.popperRef = null;
    this.rootRef   = null;
    this.inputRef  = null;
    this.inputDOM  = null;
  }

  componentDidMount() {
    this.inputDOM = this.inputRef.input;
    this.updatePopperWidth();
    window.addEventListener('resize', this.updatePopperWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePopperWidth);
  }

  /**
   * Sets the width of the popper to match the input width
   */
  updatePopperWidth = () => {
    ReactDOM.findDOMNode(this.popperRef).style.width = window.getComputedStyle(this.rootRef, null).width;
  };

  handleClick = () => {
    this.props.onSubmit(this.inputDOM.value);
  };

  /**
   * Renders the search results in a drop down
   *
   * @returns {XML}
   */
  renderResults() {
    const { results, onSelect } = this.props;
    if (results.length === 0) {
      return <List ref={ref => (this.resultsRef = ref)} />;
    }

    /* eslint-disable react/jsx-no-bind */
    return (
      <List ref={ref => (this.resultsRef = ref)} className="dp-search-submit__results">
        {results.map((result, i) => (
          <ListElement
            key={i}
            onClick={onSelect.bind(this, result, i)}
            dangerouslySetInnerHTML={{ __html: result }}
          />
        ))}
      </List>
    );
  }

  render() {
    const { results, className, style, ...props } = this.props;
    const inputProps = objectKeyFilter(props, SearchSubmit.propTypes);

    return (
      <div
        ref={ref => (this.rootRef = ref)}
        className={classNames(
          'dp-search-submit',
          {
            'dp-search-submit--open': results.length > 0
          },
          className
        )}
        style={style}
      >
        <Input ref={ref => (this.inputRef = ref)} {...inputProps} />
        <Button className="dp-button--square" onClick={this.handleClick}>
          <Icon name="search" />
        </Button>
        <Popper
          ref={ref => (this.popperRef = ref)}
          target={this.rootRef}
          placement="bottom"
          arrow={false}
          opened={results.length > 0}
        >
          {this.renderResults()}
        </Popper>
      </div>
    );
  }
}
