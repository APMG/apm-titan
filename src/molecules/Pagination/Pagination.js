import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';

const Pagination = (props) => {
  const { total_pages, page, link_prefix, links_to_show } = props;
  let { next_page, previous_page } = props;
  let items = [];
  let startpage;
  let endpage;

  if (page === 1) {
    startpage = page;
    endpage = page + links_to_show - 1;
  } else if (page > 1 && page < total_pages) {
    startpage = page - 1;
    endpage = page + links_to_show - 2;
  } else {
    startpage = total_pages - links_to_show + 1;
    endpage = total_pages;
  }

  if (page > 1) {
    items.push(generateListItem(1, [], ['first'], '« First'));
    items.push(generateListItem(previous_page, [], ['prev'], '‹ Prev', 'prev'));
  }

  while (startpage <= endpage) {
    if (page === startpage) {
      items.push(generateListItem(startpage, ['active']));
    } else {
      items.push(generateListItem(startpage));
    }
    ++startpage;
  }

  if (page < total_pages) {
    items.push(generateListItem(next_page, [], ['next'], 'Next ›', 'next'));
    items.push(generateListItem(total_pages, [], ['last'], 'Last »'));
  }

  return (
    <nav className="pagination">
      <ul className="pagination_list">{items}</ul>
    </nav>
  );

  function generateListItem(
    currentPage,
    anchorClasses = [],
    listItemClasses = [],
    overrideText = '',
    rel = ''
  ) {
    const mergedAnchorClasses = ['pagination_page_link'].concat(anchorClasses);
    const mergedListItemClasses = ['pagination_page'].concat(listItemClasses);
    return (
      <li className={mergedListItemClasses.join(' ')} key={uuid()}>
        <Link
          className={mergedAnchorClasses.join(' ')}
          rel={rel ? rel : undefined}
          to={`/${link_prefix}/${currentPage}`}
        >
          {overrideText || currentPage}
        </Link>
      </li>
    );
  }
};

Pagination.propTypes = {
  total_pages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  next_page: PropTypes.number,
  previous_page: PropTypes.number,
  link_prefix: PropTypes.string.isRequired,
  links_to_show: PropTypes.number.isRequired
};

export default Pagination;
