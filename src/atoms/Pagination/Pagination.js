import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prevIndex, nextIndex } from '../../utils';

const Pagination = ({
  elementClass,
  elementsPerPage,
  totalElements,
  currentPage,
  linkPrefix,
  linksToShow,
  hasFirstAndLast,
  firstSymbol,
  prevSymbol,
  nextSymbol,
  lastSymbol,
  Link
}) => {
  const classes = classNames({
    pagination: true,
    [elementClass]: elementClass
  });

  const numberOfPages = Math.ceil(totalElements / elementsPerPage);
  const middleIndex = Math.floor(linksToShow / 2);
  const paginationArray = [];

  Array(linksToShow)
    .fill(0)
    .forEach((val, i) => {
      let value = i + currentPage - middleIndex;
      if (value > 0 && value <= numberOfPages) paginationArray.push(value);
    });

  return (
    <nav>
      <ul className={classes}>
        {hasFirstAndLast && (
          <li className="pagination_page pagination_page-first">
            <Link href={`/${linkPrefix}`}>
              {/* eslint-disable-next-line */}
              <a>{firstSymbol}</a>
            </Link>
          </li>
        )}
        <li className="pagination_page pagination_page-prev">
          <Link href={`/${linkPrefix}/${prevIndex(currentPage)}`}>
            {/* eslint-disable-next-line */}
            <a>{prevSymbol}</a>
          </Link>
        </li>
        {paginationArray.map((value) => {
          return (
            <li key={uuid()} className="pagination_page pagination_page-number">
              <Link href={`/${linkPrefix}/${value}`}>
                {/* eslint-disable-next-line */}
                <a>{value}</a>
              </Link>
            </li>
          );
        })}
        <li className="pagination_page pagination_page-next">
          <Link
            href={`/${linkPrefix}/${nextIndex(currentPage, numberOfPages)}`}
          >
            <a href={`/${linkPrefix}/${nextIndex(currentPage, numberOfPages)}`}>
              {nextSymbol}
            </a>
          </Link>
        </li>
        {hasFirstAndLast && (
          <li className="pagination_page pagination_page-last">
            <Link href={`/${linkPrefix}/${numberOfPages}`}>
              <a>{lastSymbol}</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  elementClass: PropTypes.string,
  elementsPerPage: PropTypes.number.isRequired,
  totalElements: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  linkPrefix: PropTypes.string.isRequired,
  linksToShow: PropTypes.number.isRequired,
  hasFirstAndLast: PropTypes.bool,
  firstSymbol: PropTypes.any,
  prevSymbol: PropTypes.any,
  nextSymbol: PropTypes.any,
  lastSymbol: PropTypes.any,
  Link: PropTypes.func
};

Pagination.defaultProps = {
  hasFirstAndLast: true,
  prevSymbol: '〈',
  nextSymbol: '〉',
  firstSymbol: '《',
  lastSymbol: '》'
};

export default Pagination;
