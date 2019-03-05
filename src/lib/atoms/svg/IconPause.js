import React from 'react';
import PropTypes from 'prop-types';

const IconPause = (props) => (
  <svg
    className={`icon icon-pause ${
      props.elementClass ? props.elementClass : ''
    }`}
    width="24px"
    height="24px"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="5" height="20" />
    <rect x="11" width="5" height="20" />
  </svg>
);

IconPause.propTypes = {
  elementClass: PropTypes.string
};

export default IconPause;
