import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TagLink = (props) => {
  const { Link } = props;
  const classes = classNames({
    tag: true,
    [props.elementClass]: props.elementClass
  });

  return (
    <Link className={classes} href={props.href}>
      {/* eslint-disable-next-line */}
      <a>{props.tagName}</a>
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
