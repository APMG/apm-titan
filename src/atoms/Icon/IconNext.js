import React from 'react';
import PropTypes from 'prop-types';

const IconNext = (props) => (
  <svg
    className={`icon icon-next ${props.elementClass ? props.elementClass : ''}`}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

IconNext.propTypes = {
  elementClass: PropTypes.string
};

export default IconNext;
