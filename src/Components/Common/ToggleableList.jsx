import React from 'react';
import PropTypes from 'prop-types';
import { toUpperFirst } from 'Components/utils/strings';
import { List } from 'Components/Common';

const DATA_DP_TOGGLE_ID = 'data-dp-toggle-id';

/**
 * A higher order component which changes prop values on its children
 * by responding to events triggered by the children.
 */
class ToggleableList extends React.Component {
  static propTypes = {
    /**
     * The event to listen for.
     */
    on: PropTypes.string.isRequired,
    /**
     * Name of the property on the children which will receive a true or false value.
     */
    toggle: PropTypes.string.isRequired,
    /**
     * Only control components of this type.
     */
    whenType: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      targetID: null,
      targetValue: false
    };
  }

  /**
   * @param {Event} e
   */
  handleEvent = (e) => {
    const element = findToggleableParent(e.target);
    if (element) {
      const targetID = element.getAttribute(DATA_DP_TOGGLE_ID);
      const targetValue = (targetID == this.state.targetID) ? !this.state.targetValue : true;
      if (targetID !== null) {
        this.setState({
          targetID,
          targetValue
        });
      }
    }
  };

  render() {
    const { on, toggle, whenType, children, ...props } = this.props;
    const { targetID, targetValue } = this.state;

    return (
      <List {...props}>
        {React.Children.map(children, (child, index) => {
          if (whenType && child.type !== undefined && child.type !== whenType) {
            return child;
          }
          return React.cloneElement(child, {
            [DATA_DP_TOGGLE_ID]: index,
            [`on${toUpperFirst(on)}`]: this.handleEvent,
            [toggle]: (index == targetID) ? targetValue : false
          });
        })}
      </List>
    )
  }
}
export default ToggleableList;

/**
 * Traverses through the given element's parents until the element containing
 * the 'data-dp-toggle-id' attribute is found and returned. Returns the given
 * element when it contains the data attribute. Returns null when an element
 * cannot be found.
 *
 * Needed to get the toggleable ID when a child element fires a click event but
 * the root/parent element has the 'data-dp-toggle-id' attribute.
 *
 * @param {HTMLElement|Node|Object} el Element to traverse
 * @returns {HTMLElement|Node|null}
 */
function findToggleableParent(el) {
  if (el.getAttribute(DATA_DP_TOGGLE_ID) !== null) {
    return el;
  }
  while (el.parentNode) {
    el = el.parentNode;
    if (el.getAttribute(DATA_DP_TOGGLE_ID) !== null) {
      return el;
    }
  }
  return null;
}
