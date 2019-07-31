import React from 'react';
import uuid from 'uuid';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prevIndex, nextIndex } from '../../utils/utils';

const Pagination = ({
  elementClass,
  currentPage,
  totalPages,
  slug,
  linksToShow,
  resourceType,
  hasFirstAndLast,
  firstSymbol,
  prevSymbol,
  nextSymbol,
  lastSymbol
}) => {
  const classes = classNames({
    pagination: true,
    [elementClass]: elementClass
  });

  const middleIndex = Math.floor(linksToShow / 2);
  const paginationArray = [];

  Array(linksToShow)
    .fill(0)
    .forEach((val, i) => {
      let value = i + currentPage - middleIndex;
      if (value > 0 && value <= totalPages) paginationArray.push(value);
    });

  return (
    <nav data-testid="pagination-test" className={classes}>
      <ul className="pagination_list">
        {hasFirstAndLast && currentPage > 1 && (
          <li className="pagination_page pagination_page-first">
            <Link href={`/${resourceType}?slug=${slug}`} as={`/${slug}`}>
              <a className="pagination_link pagination_link-first">
                {firstSymbol}
              </a>
            </Link>
          </li>
        )}
        {currentPage > 1 && (
          <li className="pagination_page pagination_page-prev">
            <Link
              href={`/${resourceType}?slug=${slug}&pageNum=${prevIndex(
                currentPage
              )}`}
              as={`/${slug}/${prevIndex(currentPage)}`}
            >
              <a className="pagination_link pagination_link-prev">
                {prevSymbol}
              </a>
            </Link>
          </li>
        )}

        {paginationArray.map((value) => {
          return (
            <li key={uuid()} className="pagination_page pagination_page-number">
              <Link
                href={`/${resourceType}?slug=${slug}&pageNum=${value}`}
                as={`/${slug}/${value}`}
              >
                <a className="pagination_link pagination_link-number">
                  {value}
                </a>
              </Link>
            </li>
          );
        })}
        {currentPage < totalPages && (
          <li className="pagination_page pagination_page-next">
            <Link
              href={`/${resourceType}?slug=${slug}&pageNum=${nextIndex(
                currentPage,
                totalPages
              )}`}
              as={`/${slug}/${nextIndex(currentPage, totalPages)}`}
            >
              <a className="pagination_link pagination_link-next">
                {nextSymbol}
              </a>
            </Link>
          </li>
        )}

        {hasFirstAndLast && currentPage < totalPages && (
          <li className="pagination_page pagination_page-last">
            <Link
              href={`/${resourceType}?slug=${slug}&pageNum=${totalPages}`}
              as={`/${slug}/${totalPages}`}
            >
              <a className="pagination_link pagination_link-last ">
                {lastSymbol}
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  elementClass: PropTypes.string,
  resourceType: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  linksToShow: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasFirstAndLast: PropTypes.bool,
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
