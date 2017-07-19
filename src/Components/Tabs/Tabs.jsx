import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';

/**
 * Renders a group of links as tabs.
 */
export default class Tabs extends React.Component {
  static propTypes = {
    /**
     * Name of the active tab.
     */
    active:    PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node,
    /**
     * Called when the active tab changes. Receives the name of the tab.
     */
    onChange:  PropTypes.func
  };

  static defaultProps = {
    active:   '',
    onChange: noop
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }

  componentDidMount() {
    this.props.onChange(this.state.active);
  }

  handleClick = (active) => {
    this.setState({ active }, () => {
      this.props.onChange(active);
    });
  };

  render() {
    const { className, children, ...props } = this.props;
    const { active } = this.state;

    const tabs = React.Children.map(children, child => React.cloneElement(child, {
      onClick: this.handleClick,
      active:  child.props.name === active
    }));

    return (
      <ul className={classNames('dp-tabs', className)} {...objectKeyFilter(props, Tabs.propTypes)}>
        {tabs}
      </ul>
    );
  }
}
