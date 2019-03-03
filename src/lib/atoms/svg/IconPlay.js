import React from 'react';
import PropTypes from 'prop-types';

const IconPlay = (props) => (
  <svg
    className={`icon icon-play ${props.elementClass ? props.elementClass : ''}`}
    width="24px"
    height="24px"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M21.78,11.61l-15-9.53a.55.55,0,0,0-.53,0A.49.49,0,0,0,6,2.48v19a.49.49,0,0,0,.28.43.58.58,0,0,0,.53,0l15-9.53a.46.46,0,0,0,0-.78Z"
      transform="translate(-6 -2)"
    />
  </svg>
);

IconPlay.propTypes = {
  elementClass: PropTypes.string
};

export default IconPlay;
