import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { objectKeyFilter } from '../../utils/objects';
import { PopperIcon } from '../Common';
import ItemPopper from './ItemPopper';

/**
 * Settings icon and popper which will contain a form which controls item settings.
 */
export default class ItemSettings extends ItemPopper {
  render() {
    return (
      <span {...objectKeyFilter(this.props, ItemPopper.propTypes)}>
        <PopperIcon
          name={faCog}
          popper={this.state.popper}
          className="dp-icon__settings"
        />
        {this.renderPopper()}
      </span>
    );
  }
}
