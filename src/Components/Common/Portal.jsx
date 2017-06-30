import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import noop from 'Components/utils/noop';

/**
 * Portal mounts its children in the document body.
 */
export default class Portal extends React.Component {
  static propTypes = {
    /**
     * Called when the child elements are mounted.
     */
    onUpdate: PropTypes.func
  };

  static defaultProps = {
    onUpdate: noop
  };

  componentDidMount() {
    this.popup = document.createElement("div");
    document.body.appendChild(this.popup);
    this._renderLayer();
  }

  componentDidUpdate() {
    this._renderLayer();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
    this.popup = null;
  }

  _renderLayer() {
    ReactDOM.render(this.props.children, this.popup, () => {
      this.props.onUpdate(this);
    });
  }

  render() {
    return <div />;
  }
}
