import React from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { objectKeyFilter } from '../../utils/objects';
import { PopperIcon } from '../Common';
import ItemPopper from './ItemPopper';

/**
 * Filter icon and popper which will contain a form that filters a list
 */
export default class ItemFilter extends ItemPopper {
  render() {
    return (
      <span {...objectKeyFilter(this.props, ItemPopper.propTypes)}>
        <PopperIcon
          name={faFilter}
          popper={this.state.popper}
          className="dp-icon__filter"
        />
        {this.renderPopper()}
      </span>
    );
  }
}
