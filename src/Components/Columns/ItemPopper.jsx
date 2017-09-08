import React from 'react';
import PropTypes from 'prop-types';
import { Popper } from 'Components/Common';

/**
 * Used to construct column items which contain poppers.
 */
export default class ItemPopper extends React.Component {
  static propTypes = {
    /**
     * Whether the popper is opened or not.
     */
    opened:   PropTypes.bool,
    /**
     * One or more components.
     */
    children: PropTypes.node,
  };

  static defaultProps = {
    opened:   false,
    children: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      popper: null
    };
  }

  componentDidMount() {
    this.setState({ popper: this.popper }); // eslint-disable-line react/no-did-mount-set-state
  }

  /**
   * Toggles the popper opened or closed
   */
  toggle = () => {
    this.popper.toggle();
  };

  /**
   * Opens the popper
   */
  open = () => {
    this.popper.open();
  };

  /**
   * Closes the popper
   */
  close = () => {
    this.popper.close();
  };

  /**
   * Renders the standard popper
   */
  renderPopper() {
    const { children, opened } = this.props;

    return (
      <Popper
        ref={(ref) => { this.popper = ref; }}
        opened={opened}
        offsetX="2px"
        offsetY="3px"
        className="dp-column-popper"
        placement="bottom"
        style={{ width: 180 }}
        closeOnClickOutside
      >
        {children}
      </Popper>
    );
  }

  render() {
    return (
      <span {...this.props}>
        {this.renderPopper()}
      </span>
    );
  }
}
