import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchSubmit } from 'Components/Forms';

import Button from './Button';

/**
 * Pagination component.
 */
export default class Pagination extends React.Component {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);
  }

  shouldDisplaySearch = () => {
    return this.props.pageCount >= 50;
  }

  shouldDisplayPrev = () => {
    return this.props.activePage > 1;
  }

  shouldDisplayNext = () => {
    return this.props.activePage !== this.props.pageCount;
  }

  pagesToDisplay = () => {
    const { activePage, pageCount } = this.props;
    const pages = [activePage];

    let reachedBothEdges = false;

    for (let i = 1; pages.length <= 7 && !reachedBothEdges; i++) {
      if (activePage - i >= 1) {
        pages.unshift(activePage - i);
      }

      if (activePage + i <= pageCount) {
        pages.push(activePage + i);
      }

      reachedBothEdges = activePage - i < 1 && activePage + i > pageCount;
    }

    pages[0] = 1;
    pages[pages.length - 1] = pageCount;

    if (pages[1] - pages[0] !== 1) {
      // insert …
    }
    if (pages[pages.length - 1] - pages[pages.length - 2] !== 1) {
      // insert …
    }

    return pages;
  }

  render() {
    return (
      <div>
        {this.shouldDisplayPrev() &&
          <Button
            type="square"
          >
            Prev
          </Button>
        }

        {this.pagesToDisplay().map(pageNumber => (
          <Button
            key={pageNumber}
            type="square"
            className={classNames({
              'dp-button--active': pageNumber === this.props.activePage
            })}
          >
            {pageNumber}
          </Button>

          ))}

        {this.shouldDisplayNext() &&
          <Button
            type="square"
          >
            Next
          </Button>
        }

        {this.shouldDisplaySearch() &&
          <SearchSubmit
            placeholder="Select page number"
            results={[]}
          />
        }

      </div>
    );
  }
}
