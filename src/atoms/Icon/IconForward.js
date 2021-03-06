import React from 'react';
import PropTypes from 'prop-types';

const IconForward = (props) => (
  <svg
    className={`icon icon-next ${props.elementClass ? props.elementClass : ''}`}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M12,19c-3.3,0-6-2.7-6-6s2.7-6,6-6v4l5-5l-5-5v4c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8h-2C18,16.3,15.3,19,12,19z" />
    <path
      d="M14.7,12.1c-0.2-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.4-0.1-0.6-0.1c-0.2,0-0.4,0.1-0.6,0.1s-0.5,0.3-0.5,0.3l-0.3,0.6
	c-0.1,0.2-0.1,0.5-0.1,0.8v0.7c0,0.3,0,0.5,0.1,0.8c0.1,0.3,0.1,0.5,0.3,0.6c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.1,0.6,0.1
	c0.2,0,0.4-0.1,0.6-0.1s0.5-0.3,0.5-0.3L15,15c0.1-0.2,0.1-0.5,0.1-0.8v-0.7c0-0.3,0-0.5-0.1-0.8S14.9,12.2,14.7,12.1z M14.3,13.4
	v1.5c0,0.1-0.1,0.3-0.1,0.3L14,15.4c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.2-0.1-0.2-0.2c0-0.1-0.1-0.3-0.1-0.3
	v-2c0-0.1,0.1-0.3,0.1-0.3l0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.2,0.1,0.2,0.2c0,0.1,0.1,0.3,0.1,0.3
	V13.4z"
    />
    <polygon points="10.8,16 10.9,16 10.9,11.7 10.8,11.7 9,12.3 9,13 10,12.7 10,16 " />
  </svg>
);

IconForward.propTypes = {
  elementClass: PropTypes.string
};

export default IconForward;
