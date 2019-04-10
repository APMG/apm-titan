import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../../atoms/Link/Link';

const Pagination = (props) => {
  const classes = classNames({
    pagination: true,
    [props.elementClass]: props.elementClass
  });

  const {
    totalPages,
    page,
    linkPrefix,
    linksToShow,
    hasFirstAndLast,
    prevSymbol,
    nextSymbol,
    firstSymbol,
    lastSymbol
  } = props;
  let { nextPage, previousPage } = props;
  let items = [];
  let startpage;
  let endpage;

  if (page === 1) {
    startpage = page;
    endpage = page + linksToShow - 1;
  } else if (page > 1 && page < totalPages) {
    startpage = page - 1;
    endpage = page + linksToShow - 2;
  } else {
    startpage = totalPages - linksToShow + 1;
    endpage = totalPages;
  }

  if (page > 1) {
    if (hasFirstAndLast)
      items.push(generateListItem(1, [], ['first'], firstSymbol));
    items.push(
      generateListItem(previousPage, [], ['prev'], prevSymbol, 'prev')
    );
  }

  while (startpage <= endpage) {
    if (page === startpage) {
      items.push(generateListItem(startpage, ['active']));
    } else {
      items.push(generateListItem(startpage));
    }
    ++startpage;
  }

  if (page < totalPages) {
    items.push(generateListItem(nextPage, [], ['next'], nextSymbol, 'next'));
    if (hasFirstAndLast)
      items.push(generateListItem(totalPages, [], ['last'], lastSymbol));
  }

  return <nav><ul className={classes}>{items}</ul></nav>;

  function generateListItem(
    currentPage,
    anchorClasses = [],
    listItemClasses = [],
    overrideText = '',
    rel = ''
  ) {
    const mergedListItemClasses = ['pagination_page'].concat(listItemClasses);
    const mergedAnchorClasses = ['pagination_pageLink'].concat(anchorClasses);
    return (
      <li className={mergedListItemClasses.join(' ')} key={uuid()}>
        <Link
          className={mergedAnchorClasses.join(' ')}
          rel={rel ? rel : undefined}
          to={`/${linkPrefix}/${currentPage}`}
        >
          {overrideText || currentPage}
        </Link>
      </li>
    );
  }
};

Pagination.propTypes = {
  elementClass: PropTypes.string,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.number,
  previousPage: PropTypes.number,
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
  prevSymbol: '<',
  nextSymbol: '>',
  firstSymbol: 'Last »',
  lastSymbol: '« First'
};

export default Pagination;
