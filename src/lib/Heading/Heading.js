import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  const Hdg = `h${props.level}`;
  return <Hdg className={props.className}>{props.children}</Hdg>;
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.number.isRequired
};

export default Heading;
