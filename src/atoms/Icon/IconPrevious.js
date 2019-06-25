import React from 'react';
import PropTypes from 'prop-types';

const IconPrevious = (props) => (
  <svg
    className={`icon icon-previous ${
      props.elementClass ? props.elementClass : ''
    }`}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

IconPrevious.propTypes = {
  elementClass: PropTypes.string
};

export default IconPrevious;
