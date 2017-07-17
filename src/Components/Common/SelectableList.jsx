import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';
import { List } from 'Components/Common';

/**
 * A list that can be scrolled through using arrow keys.
 */
export default class SelectableList extends React.Component {
  static propTypes = {
    /**
     * Selected index.
     */
    selected:        PropTypes.number,
    /**
     * Allow the selected index to be -1.
     */
    negativeAllowed: PropTypes.bool,
    /**
     * CSS classes to apply to the element.
     */
    className:       PropTypes.string,
    /**
     * Children to render.
     */
    children:        PropTypes.node,
    /**
     * Called when an item in the list is selected, either by clicking it or pressing ENTER.
     * Receives the index and selected child.
     */
    onSelect:        PropTypes.func,
    /**
     * Called when the selected index changes. Receives the new index and selected child.
     */
    onChange:        PropTypes.func
  };

  static defaultProps = {
    selected:        0,
    negativeAllowed: false,
    onSelect:        noop,
    onChange:        noop
  };

  constructor(props) {
    super(props);
    this.state    = {
      index: props.selected
    };
    this.rootRef    = null;
    this.rootDOM    = null;
    this.childArray = [];
    this.childLen   = 0;
  }

  componentDidMount() {
    this.rootDOM    = ReactDOM.findDOMNode(this.rootRef);
    this.childArray = React.Children.toArray(this.props.children);
    this.childLen   = this.childArray.length - 1;
  }

  componentDidUpdate() {
    this.childArray = React.Children.toArray(this.props.children);
    this.childLen   = this.childArray.length - 1;
  }

  /**
   * Sets the index of the selected item
   *
   * @param {number} newIndex Index of the element to select
   * @param {function} cb  Called after the index state is updated with the new index value
   */
  setIndex = (newIndex, cb = noop) => {
    let index = parseInt(newIndex, 10);
    if (index < 0) {
      index = this.props.negativeAllowed ? -1 : 0;
    } else if (index > this.childLen) {
      index = this.childLen;
    }
    if (index !== this.state.index) {
      this.setState({ index }, () => {
        this.props.onChange(index, this.childArray[index]);
        cb(index, this.childArray[index]);
      });
    } else {
      cb(index, this.childArray[index]);
    }
  };

  handleMouseOver = () => {
    this.rootDOM.focus();
  };

  handleKeyDown = (e) => {
    const code = e.keyCode;
    if (code === 40) {        // down
      this.setIndex(this.state.index + 1);
    } else if (code === 38) { // up
      this.setIndex(this.state.index - 1);
    } else if (code === 13) { // enter
      this.props.onSelect(this.state.index, this.childArray[this.state.index]);
    }
  };

  handleClick = (e) => {
    this.setIndex(
      e.target.getAttribute('data-dp-index'),
      this.props.onSelect
    );
  };

  render() {
    const { className, children, ...props } = this.props;
    const { index } = this.state;
    const body = React.Children.map(children, (child, i) => {
      const childClassNames = classNames(child.props.className, {
        'dp-selectable-list--selected': i === index
      });
      return React.cloneElement(child, {
        'data-dp-index': i,
        onClick:         this.handleClick,
        className:       childClassNames
      });
    });

    // tabIndex -1 is required for this to work.
    // See https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
    return (
      <List
        tabIndex="-1"
        className={classNames('dp-selectable-list', className)}
        {...objectKeyFilter(props, SelectableList.propTypes)}
        ref={ref => (this.rootRef = ref)}
        onKeyDown={this.handleKeyDown}
        onMouseOver={this.handleMouseOver}
      >
        {body}
      </List>
    );
  }
}
