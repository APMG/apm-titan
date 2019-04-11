import React from 'react';
import uuid from 'uuid';
import Link from '../../atoms/Link/Link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prevIndex, nextIndex } from '../../utils';

const Pagination = (props) => {
  const classes = classNames({
    pagination: true,
    [props.elementClass]: props.elementClass
  });

  const numberOfPages = Math.ceil(props.totalElements / props.elementsPerPage);
  const middleIndex = Math.floor(props.linksToShow / 2);
  const paginationArray = [];

  Array(props.linksToShow)
    .fill(0)
    .forEach((val, i) => {
      let value = i + props.currentPage - middleIndex;
      if (value > 0 && value <= numberOfPages) paginationArray.push(value);
    });

  return (
    <nav>
      <ul className={classes}>
        {props.hasFirstAndLast && (
          <li className="pagination_page pagination_page-first">
            <Link to={`/${props.linkPrefix}`}>{props.firstSymbol}</Link>
          </li>
        )}
        <li className="pagination_page pagination_page-prev">
          <Link to={`/${props.linkPrefix}/${prevIndex(props.currentPage)}`}>
            {props.prevSymbol}
          </Link>
        </li>
        {paginationArray.map((value) => {
          return (
            <li key={uuid()} className="pagination_page pagination_page-number">
              <Link to={`/${props.linkPrefix}/${value}`}>{value}</Link>
            </li>
          );
        })}
        <li className="pagination_page pagination_page-next">
          <Link
            to={`/${props.linkPrefix}/${nextIndex(
              props.currentPage,
              numberOfPages
            )}`}
          >
            {props.nextSymbol}
          </Link>
        </li>
        {props.hasFirstAndLast && (
          <li className="pagination_page pagination_page-last">
            <Link to={`/${props.linkPrefix}/${numberOfPages}`}>
              {props.lastSymbol}
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
  prevSymbol: PropTypes.any,
  nextSymbol: PropTypes.any,
  firstSymbol: PropTypes.any,
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
