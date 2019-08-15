import React from 'react';
import uuid from 'uuid';
import Link from 'next/link';
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
  hrefPrefix,
  asPrefix,
  hasFirstAndLast,
  inclusiveFirstLast,
  firstLastSeparator,
  firstSymbol,
  prevSymbol,
  nextSymbol,
  lastSymbol
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
      } else if (!inclusiveFirstLast && currentPage > 1) {
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
      } else if (!inclusiveFirstLast && currentPage < totalPages) {
        return true;
      } else return false;
    } else {
      return false;
    }
  };

  return (
    <nav data-testid="pagination-test" className={classes}>
      <ul className="pagination_list">
        {showFirst() && (
          <li className="pagination_page pagination_page-first">
            <Link href={`/${hrefPrefix}`} as={`/${asPrefix}`}>
              <a className={firstLinkClasses}>{firstSymbol}</a>
            </Link>
            {firstLastSeparator && currentPage > buffer + 2 && (
              <span className="pagination_separator pagination_separator-first">
                {firstLastSeparator}
              </span>
            )}
          </li>
        )}
        {currentPage > 1 && (
          <li className="pagination_page pagination_page-prev">
            <Link
              href={`/${hrefPrefix}&pageNum=${prevIndex(currentPage)}`}
              as={`/${asPrefix}/${prevIndex(currentPage)}`}
            >
              <a className={prevLinkClasses}>{prevSymbol}</a>
            </Link>
          </li>
        )}

        {paginationArray.map((value) => {
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

          return (
            <li key={uuid()} className={pageClasses}>
              <Link
                href={`/${hrefPrefix}&pageNum=${value}`}
                as={`/${asPrefix}/${value}`}
              >
                <a className={linkClasses}>{value}</a>
              </Link>
            </li>
          );
        })}
        {currentPage < totalPages && (
          <li className="pagination_page pagination_page-next">
            <Link
              href={`/${hrefPrefix}&pageNum=${nextIndex(
                currentPage,
                totalPages
              )}`}
              as={`/${asPrefix}/${nextIndex(currentPage, totalPages)}`}
            >
              <a className={nextLinkClasses}>{nextSymbol}</a>
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
              href={`/${hrefPrefix}&pageNum=${totalPages}`}
              as={`/${asPrefix}/${totalPages}`}
            >
              <a className={lastLinkClasses}>{lastSymbol}</a>
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
  hrefPrefix: PropTypes.string.isRequired,
  asPrefix: PropTypes.string.isRequired,
  buffer: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasFirstAndLast: PropTypes.bool,
  inclusiveFirstLast: PropTypes.bool,
  firstLastSeparator: PropTypes.string,
  firstSymbol: PropTypes.any,
  prevSymbol: PropTypes.any,
  nextSymbol: PropTypes.any,
  lastSymbol: PropTypes.any
};

Pagination.defaultProps = {
  hasFirstAndLast: true,
  prevSymbol: '〈',
  nextSymbol: '〉',
  firstSymbol: '《',
  lastSymbol: '》'
};

export default Pagination;
