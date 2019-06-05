import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TagLink = (props) => {
  const classes = classNames({
    tag: true,
    [props.elementClass]: props.elementClass
  });

  return (
    <Link href={props.to}>
      <a className={classes}>{props.tagName}</a>
    </Link>
  );
};

TagLink.propTypes = {
  elementClass: PropTypes.string,
  to: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired
};

export default TagLink;
