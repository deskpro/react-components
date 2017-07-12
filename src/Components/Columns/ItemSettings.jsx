import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import { PopperIcon } from 'Components/Common';
import ItemPopper from 'Components/Columns/ItemPopper';

/**
 * Settings icon and popper which will contain a form which controls item settings.
 */
export default class ItemFilter extends ItemPopper {
  render() {
    return (
      <span {...objectKeyFilter(this.props, ItemPopper.propTypes)}>
        <PopperIcon
          name="cog"
          popper={this.state.popper}
          className="dp-icon__settings"
        />
        {this.renderPopper()}
      </span>
    );
  }
}
