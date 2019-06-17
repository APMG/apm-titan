import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prevIndex, nextIndex } from '../../utils';

const Pagination = (props) => {
  const { Link } = props;
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
            <Link href={`/${props.linkPrefix}`}>
              {/* eslint-disable-next-line */}
              <a>{props.firstSymbol}</a>
            </Link>
          </li>
        )}
        <li className="pagination_page pagination_page-prev">
          <Link href={`/${props.linkPrefix}/${prevIndex(props.currentPage)}`}>
            {/* eslint-disable-next-line */}
            <a>{props.prevSymbol}</a>
          </Link>
        </li>
        {paginationArray.map((value) => {
          return (
            <li key={uuid()} className="pagination_page pagination_page-number">
              <Link href={`/${props.linkPrefix}/${value}`}>
                {/* eslint-disable-next-line */}
                <a>{value}</a>
              </Link>
            </li>
          );
        })}
        <li className="pagination_page pagination_page-next">
          <Link
            href={`/${props.linkPrefix}/${nextIndex(
              props.currentPage,
              numberOfPages
            )}`}
          >
            {props.nextSymbol}
          </Link>
        </li>
        {props.hasFirstAndLast && (
          <li className="pagination_page pagination_page-last">
            <Link href={`/${props.linkPrefix}/${numberOfPages}`}>
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
