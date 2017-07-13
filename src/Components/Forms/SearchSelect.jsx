import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'utils/objects';
import Select from 'Components/Forms/Select';

/**
 * Renders a search box as a select drop down menu.
 */
export default class SearchSelect extends Select {
  static propTypes = {
    /**
     * List of search results.
     */
    results:   PropTypes.array,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Styles applied to the root element.
     */
    style:     PropTypes.object
  };

  render() {
    const { results, className, style, ...props } = this.props;
    const inputProps = objectKeyFilter(props, SearchSelect.propTypes);

    const options = [];
    for (let i = 0; i < results.length; i++) {
      options.push({
        label: results[i],
        value: results[i]
      });
    }

    return (
      <div className={classNames('dp-search-select', className)} style={style}>
        <Select icon="search" {...inputProps} options={options} />
      </div>
    );
  }
}
