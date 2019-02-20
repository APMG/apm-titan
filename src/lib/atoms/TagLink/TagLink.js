import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const TagLink = (props) => {
  return (
    <Link
      className={`tag ${props.elementClass ? props.elementClass : ''}`}
      to={`${props.href}`}
    >
      {props.title}
    </Link>
  );
};

TagLink.propTypes = {
  elementClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default TagLink;
