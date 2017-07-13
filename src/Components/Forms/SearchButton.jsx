import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { childrenRecursiveMap } from 'utils/props';
import { objectKeyFilter } from 'utils/objects';
import { highlightWord, stringInterpolate } from 'utils/strings';
import { List, ListElement, Popper, Scrollbar } from 'Components/Common';
import Input from 'Components/Forms/Input';
import Button from 'Components/Button';
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
     * Called when a search result is clicked.
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
    this.focused   = false;
    this.rootRef   = null;
    this.inputRef  = null;
    this.popperRef = null;
    this.buttonRef = null;
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

  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  handleChange = (value) => {
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

  handleOpen = () => {
    setTimeout(() => {
      this.inputRef.focus();
    }, 10);
  };

  open = () => {
    this.setState({ opened: true });
  };

  close = () => {
    this.setState({ opened: false });
  };

  toggle = () => {
    this.state.opened ? this.close() : this.open();
  };

  /**
   * Renders the search results in a drop down
   *
   * @returns {XML}
   */
  renderResults() {
    const { results, onSelect, emptyPlaceholder, children } = this.props;
    const value = this.state.value;
    if (value && results.length === 0 && children) {
      return (
        <List ref={ref => this.resultsRef = ref} className="dp-search-button__results">
          <ListElement>
            {childrenRecursiveMap(children, (child) => {
              if (typeof child === 'string') {
                return stringInterpolate(child, { value });
              }
              return child;
            })}
          </ListElement>
        </List>
      );
    }

    if (!value || results.length === 0) {
      return (
        <List ref={ref => this.resultsRef = ref} className="dp-search-button__results">
          {emptyPlaceholder ? <ListElement>{emptyPlaceholder}</ListElement> : null}
        </List>
      );
    }

    return (
      <List ref={ref => this.resultsRef = ref} className="dp-search-button__results">
        {results.map((result, i) => (
          <ListElement
            key={i}
            onClick={onSelect.bind(this, result, i)}
            dangerouslySetInnerHTML={{ __html: highlightWord(result, value) }}
          />
        ))}
      </List>
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
        ref={ref => this.rootRef = ref}
        {...objectKeyFilter(props, SearchButton.propTypes)}
      >
        <Button
          ref={ref => this.buttonRef = ref}
          className={classNames(
            'dp-button--icon',
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
          ref={ref => this.popperRef = ref}
          target={this.buttonRef}
          arrow={false}
          opened={opened}
          onOpen={this.handleOpen}
        >
          <div>
            <Input
              {...inputProps}
              icon="search"
              ref={ref => this.inputRef = ref}
              value={value}
              onChange={this.handleChange}
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
