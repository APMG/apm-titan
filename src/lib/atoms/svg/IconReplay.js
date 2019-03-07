import React from 'react';
import PropTypes from 'prop-types';

const IconReplay = (props) => (
  <svg
    className={`icon icon-next ${props.elementClass ? props.elementClass : ''}`}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M12.6,15.6c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.1,0.6,0.1s0.4-0.1,0.6-0.1s0.5-0.3,0.5-0.3l0.3-0.6
	c0.1-0.2,0.1-0.5,0.1-0.8v-0.7c0-0.3,0-0.5-0.1-0.8c-0.1-0.3-0.1-0.5-0.3-0.6c-0.2-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.4-0.1-0.6-0.1
	s-0.4,0.1-0.6,0.1c-0.2,0-0.5,0.3-0.5,0.3l-0.3,0.6c-0.1,0.2-0.1,0.5-0.1,0.8v0.7c0,0.3,0,0.5,0.1,0.8
	C12.4,15.3,12.4,15.5,12.6,15.6z M13.1,12.9c0-0.1,0.1-0.3,0.1-0.3l0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0.1
	c0.1,0.1,0.2,0.1,0.2,0.2c0,0.1,0.1,0.3,0.1,0.3v0.5v1.5c0,0.1-0.1,0.3-0.1,0.3L14,15.4c-0.1,0.1-0.2,0.1-0.3,0.1
	c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.2-0.1-0.2-0.2c0-0.1-0.1-0.3-0.1-0.3V12.9z"
    />
    <path d="M12,5V1L7,6l5,5V7c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6H4c0,4.4,3.6,8,8,8s8-3.6,8-8S16.4,5,12,5z" />
    <polygon points="10.9,16 10.9,11.7 10.8,11.7 9,12.3 9,13 10,12.7 10,16 " />
  </svg>
);

IconReplay.propTypes = {
  elementClass: PropTypes.string
};

export default IconReplay;