import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  // This component is for semantically providing h1 - h6
  // depending on the html document outline.
  // By default the `hdg-*` class will match the level,
  // but to visually change the size, pass in classes
  // through the `elementClass` prop

  const classes = () => {
    if (props.elementClass) {
      return props.elementClass;
    } else {
      return `hdg hdg-${props.level}`;
    }
  };

  const Hdg = `h${props.level}`;

  return <Hdg className={classes()}>{props.children}</Hdg>;
};

Heading.propTypes = {
  children: PropTypes.node,
  elementClass: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
};

export default Heading;
