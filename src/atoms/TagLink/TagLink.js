import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TagLink = ({ elementClass, href, tagName, Link }) => {
  const classes = classNames({
    tag: true,
    [elementClass]: elementClass
  });

  return (
    <Link className={classes} href={href}>
      {/* eslint-disable-next-line */}
      <a>{tagName}</a>
    </Link>
  );
};

TagLink.propTypes = {
  elementClass: PropTypes.string,
  href: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  Link: PropTypes.func
};

export default TagLink;
