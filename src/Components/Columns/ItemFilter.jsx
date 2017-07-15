import React from 'react';
import { objectKeyFilter } from 'utils/objects';
import { PopperIcon } from 'Components/Common';
import ItemPopper from 'Components/Columns/ItemPopper';

/**
 * Filter icon and popper which will contain a form that filters a list
 */
export default class ItemFilter extends ItemPopper {
  render() {
    return (
      <span {...objectKeyFilter(this.props, ItemPopper.propTypes)}>
        <PopperIcon
          name="filter"
          popper={this.state.popper}
          className="dp-icon__filter"
        />
        {this.renderPopper()}
      </span>
    );
  }
}
