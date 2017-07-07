import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FilterIcon from 'Components/Columns/FilterIcon';
import { Popper } from 'Components/Common';

/**
 * Filter icon and popper which will contain a form that filters a list
 */
export default class FilterPopper extends React.Component {
  static propTypes = {
    /**
     * Whether the popper is opened or not.
     */
    opened: PropTypes.bool
  };

  static defaultProps = {
    opened: false
  };

  toggle = () => {
    this.popper.toggle();
  };

  open = () => {
    this.popper.open();
  };

  close = () => {
    this.popper.close();
  };

  render() {
    const { children, opened, ...props } = this.props;

    return (
      <span {...props}>
        <FilterIcon popper={this.popper} />
        <Popper
          ref={(ref) => {this.popper = ref;}}
          opened={opened}
          offsetX="2px"
          offsetY="3px"
          className="dp-column-popper"
          placement="bottom"
          style={{width: 180}}
          closeOnClickOutside={true}
          >
          {children}
        </Popper>
      </span>
    )
  }
}
