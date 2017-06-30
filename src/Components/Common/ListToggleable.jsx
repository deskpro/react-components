import React from 'react';
import PropTypes from 'prop-types';
import { toUpperFirst } from 'Components/utils/strings';
import { List } from 'Components/Common';

const TOGGLE_ID_ATTRIB = 'data-dp-toggle-id';

/**
 * A higher order component which changes prop values on its children
 * by responding to events triggered by the children.
 */
class ListToggleable extends React.Component {
  static propTypes = {
    /**
     * The event to listen for.
     */
    on: PropTypes.string.isRequired,
    /**
     * Name of the property on the children which will receive a true or false value.
     */
    toggle: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      targetID: null,
      targetOn: false
    };
  }

  handleEvent = (e) => {
    const element  = findToggleID(e.target);
    if (element) {
      const targetID = element.getAttribute(TOGGLE_ID_ATTRIB);
      if (targetID !== null) {
        this.setState({
          targetID,
          targetOn: targetID == this.state.targetID
        });
      }
    }
  };

  render() {
    const { on, toggle, children, ...props } = this.props;
    const { targetID, targetOn } = this.state;
    const targetValue = !targetOn;

    return (
      <List {...props}>
        {React.Children.map(children, (child, i) => {
          let props = {
            'data-dp-toggle-id': i,
            [`on${toUpperFirst(on)}`]: this.handleEvent
          };
          props[toggle] = props[TOGGLE_ID_ATTRIB] == targetID ? targetValue : false;
          return React.cloneElement(child, props);
        })}
      </List>
    )
  }
}
export default ListToggleable;

function findToggleID(el) {
  if (el.getAttribute(TOGGLE_ID_ATTRIB) !== null) {
    return el;
  }
  while (el.parentNode) {
    el = el.parentNode;
    if (el.getAttribute(TOGGLE_ID_ATTRIB) !== null) {
      return el;
    }
  }
  return null;
}
