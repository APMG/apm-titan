import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from '../Link/Link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prevIndex, nextIndex } from '../../utils/utils';

const Pagination = ({
  elementClass,
  prevNextClass,
  firstLastClass,
  numberClass,
  currentNumberClass,
  currentPage,
  totalPages,
  buffer,
  basePath,
  hasFirstAndLast,
  inclusiveFirstLast,
  firstLastSeparator,
  firstSymbol,
  prevSymbol,
  nextSymbol,
  lastSymbol,
  middleSymbol
}) => {
  const classes = classNames({
    pagination: true,
    [elementClass]: elementClass
  });

  const firstLinkClasses = classNames({
    pagination_link: true,
    'pagination_link-first': true,
    [firstLastClass]: firstLastClass
  });

  const prevLinkClasses = classNames({
    pagination_link: true,
    'pagination_link-prev': true,
    [prevNextClass]: prevNextClass
  });

  const nextLinkClasses = classNames({
    pagination_link: true,
    'pagination_link-next': true,
    [prevNextClass]: prevNextClass
  });

  const lastLinkClasses = classNames({
    pagination_link: true,
    'pagination_link-last': true,
    [firstLastClass]: firstLastClass
  });

  const paginationArray = [];

  Array(buffer * 2 + 1)
    .fill(0)
    .forEach((val, i) => {
      let value = i + currentPage - buffer;
      if (value > 0 && value <= totalPages) paginationArray.push(value);
    });

  const showFirst = () => {
    if (hasFirstAndLast) {
      if (inclusiveFirstLast && currentPage > 1 + buffer) {
        return true;
      } else if (!inclusiveFirstLast && currentPage >= 1) {
        return true;
      } else if (middleSymbol && currentPage >= 1) {
        return true;
      } else return false;
    } else {
      return false;
    }
  };

  const showLast = () => {
    if (hasFirstAndLast) {
      if (inclusiveFirstLast && currentPage < totalPages - buffer) {
        return true;
      } else if (!inclusiveFirstLast && currentPage <= totalPages) {
        return true;
      } else if (middleSymbol && currentPage >= 1) {
        return true;
      } else return false;
    } else {
      return false;
    }
  };

  const getFirstPageHref = () => {
    if (middleSymbol) {
      return currentPage === 1 ? `/${basePath}` : `/${basePath}/${currentPage}`;
    }
    return `/${basePath}`;
  };

  return (
    <nav data-testid="pagination-test" className={classes}>
      <ul className="pagination_list">
        {showFirst() && (
          <li className="pagination_page pagination_page-first">
            <Link href={getFirstPageHref()} className={firstLinkClasses}>
              {firstSymbol}
            </Link>
            {firstLastSeparator && currentPage > buffer + 2 && (
              <span className="pagination_separator pagination_separator-first">
                {firstLastSeparator}
              </span>
            )}
            {middleSymbol && middleSymbol}
          </li>
        )}
        {currentPage > 1 && (
          <li className="pagination_page pagination_page-prev">
            <Link
              href={`/${basePath}/${prevIndex(currentPage)}`}
              className={prevLinkClasses}
            >
              {prevSymbol}
            </Link>
          </li>
        )}
        {!middleSymbol &&
          paginationArray.map((value) => {
            const pageClasses = classNames({
              pagination_page: true,
              'pagination_page-number': true,
              'pagination_page-current': currentPage === value
            });

            const linkClasses = classNames({
              pagination_link: true,
              'pagination_link-number': true,
              'pagination_link-current': currentPage === value,
              [numberClass]: numberClass,
              [currentNumberClass]: currentNumberClass && currentPage === value
            });

            const pageHref =
              value === 1 ? `/${basePath}` : `/${basePath}/${value}`;

            return (
              <li key={uuidv4()} className={pageClasses}>
                <Link href={pageHref} className={linkClasses}>
                  {value}
                </Link>
              </li>
            );
          })}
        {currentPage < totalPages && (
          <li className="pagination_page pagination_page-next">
            <Link
              href={`/${basePath}/${nextIndex(currentPage, totalPages)}`}
              className={nextLinkClasses}
            >
              {nextSymbol}
            </Link>
          </li>
        )}
        {showLast() && (
          <li className="pagination_page pagination_page-last">
            {firstLastSeparator && currentPage < totalPages - buffer - 1 && (
              <span className="pagination_separator pagination_separator-last">
                {firstLastSeparator}
              </span>
            )}
            <Link
              href={`/${basePath}/${totalPages}`}
              className={lastLinkClasses}
            >
              {lastSymbol}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  elementClass: PropTypes.string,
  prevNextClass: PropTypes.string,
  firstLastClass: PropTypes.string,
  numberClass: PropTypes.string,
  currentNumberClass: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  basePath: PropTypes.string.isRequired,
  buffer: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasFirstAndLast: PropTypes.bool,
  inclusiveFirstLast: PropTypes.bool,
  firstLastSeparator: PropTypes.string,
  firstSymbol: PropTypes.any,
  prevSymbol: PropTypes.any,
  nextSymbol: PropTypes.any,
  lastSymbol: PropTypes.any,
  middleSymbol: PropTypes.any
};

Pagination.defaultProps = {
  hasFirstAndLast: true,
  prevSymbol: '〈',
  nextSymbol: '〉',
  firstSymbol: '《',
  lastSymbol: '》'
};

export default Pagination;
