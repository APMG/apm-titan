import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Heading = (props) => {
  const classes = classNames({
    hdg: true,
    [`hdg-${props.level}`]: props.level,
    [props.elementClass]: props.elementClass
  });
  const Hdg = `h${props.level}`;

  return <Hdg className={classes}>{props.children}</Hdg>;
};

Heading.propTypes = {
  children: PropTypes.node,
  elementClass: PropTypes.string,
  level: PropTypes.number.isRequired
};

export default Heading;
