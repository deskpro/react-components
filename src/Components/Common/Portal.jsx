import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import noop from 'utils/noop';

/**
 * Portal mounts its children in the document body.
 */
export default class Portal extends React.Component {
  static propTypes = {
    /**
     * Children to render.
     */
    children: PropTypes.node,
    /**
     * Called when the child elements are mounted.
     */
    onUpdate: PropTypes.func
  };

  static defaultProps = {
    onUpdate: noop,
    children: ''
  };

  constructor(props) {
    super(props);
    this.popup = null;
  }

  componentDidMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    this.renderChildren();
  }

  componentDidUpdate() {
    this.renderChildren();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
    this.popup = null;
  }

  /**
   * Renders the component children in the portal container
   */
  renderChildren() {
    ReactDOM.render(this.props.children, this.popup, () => {
      this.props.onUpdate(this);
    });
  }

  render() {
    return <div />;
  }
}
