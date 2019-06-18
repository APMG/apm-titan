import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TagLink = ({ elementClass, href, tagName, Link }) => {
  const classes = classNames({
    tag: true,
    [elementClass]: elementClass
  });

  return (
    <Link href={href}>
      <a className={classes}>{tagName}</a>
    </Link>
  );
};

TagLink.propTypes = {
  elementClass: PropTypes.string,
  href: PropTypes.string,
  tagName: PropTypes.string,
  Link: PropTypes.element
};

export default TagLink;
