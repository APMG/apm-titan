import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Heading = ({ elementClass, children, className, level }) => {
  // This component is for semantically providing h1 - h6
  // depending on the html document outline.
  // By default the `hdg-*` class will match the level,
  // but to visually change the size, pass in classes
  // through the `className` prop

  const classes = classNames({
    hdg: !className,
    [`hdg-${level}`]: !className && level,
    [className]: className,
    [elementClass]: elementClass
  });

  const Hdg = `h${level}`;

  return <Hdg className={classes}>{children}</Hdg>;
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  elementClass: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
};

export default Heading;
