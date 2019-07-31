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
  linkPrefix,
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
    <nav className={classes}>
      <ul className="pagination_list">
        {hasFirstAndLast && currentPage > 1 && (
          <li className="pagination_page pagination_page-first">
            <Link
              href={`/${resourceType}?slug=${linkPrefix}`}
              as={`/${linkPrefix}`}
            >
              <a className="pagination_link pagination_link-first">
                {firstSymbol}
              </a>
            </Link>
          </li>
        )}
        {currentPage > 1 && (
          <li className="pagination_page pagination_page-prev">
            <Link
              href={`/${resourceType}?slug=${linkPrefix}&pageNum=${prevIndex(
                currentPage
              )}`}
              as={`/${linkPrefix}/${prevIndex(currentPage)}`}
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
                href={`/${resourceType}?slug=${linkPrefix}&pageNum=${value}`}
                as={`/${linkPrefix}/${value}`}
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
              href={`/${resourceType}?slug=${linkPrefix}&pageNum=${nextIndex(
                currentPage,
                totalPages
              )}`}
              as={`/${linkPrefix}/${nextIndex(currentPage, totalPages)}`}
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
              href={`/${resourceType}?slug=${linkPrefix}&pageNum=${totalPages}`}
              as={`/${linkPrefix}/${totalPages}`}
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
  linkPrefix: PropTypes.string.isRequired,
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
