import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TagLink = ({ elementClass, href, tagName }) => {
  const classes = classNames({
    tag: true,
    [elementClass]: elementClass
  });

  return (
    <Link href={href} className={classes}>
      {tagName}
    </Link>
  );
};

TagLink.propTypes = {
  elementClass: PropTypes.string,
  href: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired
};

export default TagLink;
