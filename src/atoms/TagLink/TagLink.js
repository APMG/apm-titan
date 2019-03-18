import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import classNames from 'classnames';

const TagLink = (props) => {
  const classes = classNames({
    tag: true,
    [props.elementClass]: props.elementClass
  });

  return (
    <Link className={classes} to={props.to}>
      {props.tagName}
    </Link>
  );
};

TagLink.propTypes = {
  elementClass: PropTypes.string,
  to: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired
};

export default TagLink;
