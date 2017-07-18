import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { childrenRecursiveMap } from 'utils/props';
import { objectKeyFilter } from 'utils/objects';
import { stringInterpolate } from 'utils/strings';
import { ListElement, SelectableList, Popper, Scrollbar, Highlighter } from 'Components/Common';
import { Button } from 'Components/Buttons';
import Input from 'Components/Forms/Input';
import Icon from 'Components/Icon';

/**
 * Provides a button which opens a search form.
 */
export default class SearchButton extends Input {
  static propTypes = {
    /**
     * List of search results.
     */
    results:             PropTypes.array,
    /**
     * Displayed in the drop down before a value is entered.
     */
    emptyPlaceholder:    PropTypes.string,
    /**
     * Close the search box when the user clicks outside of it.
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * CSS classes to apply to the element.
     */
    className:           PropTypes.string,
    /**
     * Styles applied to the root element.
     */
    style:               PropTypes.object,
    /**
     * Children to render.
     */
    children:            PropTypes.node,
    /**
     * Called when a search result is selected. Receives selected index as the first argument, and selected
     * value (text) as the second.
     */
    onSelect:            PropTypes.func
  };

  static defaultProps = {
    closeOnClickOutside: true,
    onSelect:            noop
  };

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      value:  ''
    };
    this.focused    = false;
    this.rootRef    = null;
    this.inputRef   = null;
    this.resultsRef = null;
    this.popperRef  = null;
    this.buttonRef  = null;
  }

  componentDidMount() {
    if (this.props.closeOnClickOutside) {
      this.rootRef.addEventListener('mouseenter', this.handleMouseEnter);
      this.rootRef.addEventListener('mouseleave', this.handleMouseLeave);
      window.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnClickOutside) {
      this.rootRef.removeEventListener('mouseenter', this.handleMouseEnter);
      this.rootRef.removeEventListener('mouseleave', this.handleMouseLeave);
      window.removeEventListener('click', this.handleDocumentClick);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.opened !== this.state.opened && this.state.opened) {
      setTimeout(() => {
        this.inputRef.focus();
      }, 0);
    }
  }

  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  handleChange = (value) => {
    this.resultsRef.setIndex(-1);
    this.setState({ value }, () => {
      this.props.onChange(value);
    });
  };

  handleMouseEnter = () => {
    this.focused = true;
  };

  handleMouseLeave = () => {
    this.focused = false;
  };

  handleDocumentClick = () => {
    if (!this.focused) {
      this.setState({ opened: false });
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 40 && this.state.opened) { // down
      ReactDOM.findDOMNode(this.resultsRef).focus();
      this.resultsRef.setIndex(0);
    }
  };

  handleSelect = (index, child) => {
    const value = child.props['data-dp-value'];
    this.inputRef.setValue(value);
    this.props.onSelect(value, index);
  };

  handleListChange = (index) => {
    if (index === -1) {
      // Put the cursor at the end of the input.
      // Timeout required for this to work in some browsers.
      // See https://stackoverflow.com/a/10576409/401019
      setTimeout(() => {
        const valLength = this.state.value.length;
        const input = this.inputRef.input;
        input.selectionStart = input.selectionEnd = valLength;
        input.focus();
      }, 0);
    }
  };

  open = () => {
    this.setState({ opened: true });
  };

  close = () => {
    this.setState({ opened: false });
  };

  toggle = () => {
    if (this.state.opened) {
      this.close();
    } else {
      this.open();
    }
  };

  /**
   * Renders the search results in a drop down
   *
   * @returns {XML}
   */
  renderResults() {
    const { results, emptyPlaceholder, children } = this.props;
    const value = this.state.value;

    let body = null;
    if (value && results.length === 0 && children) {
      body = (
        <ListElement>
          {childrenRecursiveMap(children, (child) => {
            if (typeof child === 'string') {
              return stringInterpolate(child, { value });
            }
            return child;
          })}
        </ListElement>
      );
    } else if (!value || results.length === 0) {
      body = emptyPlaceholder ? <ListElement>{emptyPlaceholder}</ListElement> : null;
    } else {
      body = results.map((result, i) => (
        <ListElement key={i} data-dp-value={result}>
          <Highlighter highlight={value}>
            {result}
          </Highlighter>
        </ListElement>
      ));
    }

    return (
      <SelectableList
        negativeAllowed
        ref={ref => (this.resultsRef = ref)}
        onSelect={this.handleSelect}
        onChange={this.handleListChange}
        className="dp-search-button__results"
      >
        {body}
      </SelectableList>
    );
  }

  render() {
    const { opened, value } = this.state;
    const { className, style, ...props } = this.props;
    const inputProps = objectKeyFilter(props, SearchButton.propTypes);

    return (
      <div
        className={classNames('dp-search-button', className)}
        style={style}
        ref={ref => (this.rootRef = ref)}
        {...objectKeyFilter(props, SearchButton.propTypes)}
      >
        <Button
          ref={ref => (this.buttonRef = ref)}
          className={classNames(
            'dp-button--square',
            {
              'dp-button--active': opened
            }
          )}
          onClick={this.handleClick}
        >
          <Icon name="plus" />
        </Button>
        <Popper
          placement="bottom-start"
          offsetX="2px"
          ref={ref => (this.popperRef = ref)}
          target={this.buttonRef}
          arrow={false}
          opened={opened}
        >
          <div>
            <Input
              {...inputProps}
              icon="search"
              ref={ref => (this.inputRef = ref)}
              value={value}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <Scrollbar>
              {this.renderResults()}
            </Scrollbar>
          </div>
        </Popper>
      </div>
    );
  }
}
