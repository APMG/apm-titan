import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <svg
      width="256px"
      height="256px"
      className={props.elementClass ? props.elementClass : ''}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="256x256"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M16,128 L80,128 C80,154.509668 101.490332,176 128,176 L128,240 C66.144108,240 16,189.855892 16,128 Z"
          id="SW"
          fill="#F87E21"
        />
        <path
          d="M240,128 C240,189.855892 189.855892,240 128,240 L128,176 C154.509668,176 176,154.509668 176,128 L240,128 Z"
          id="SE"
          fill="#84C446"
        />
        <path
          d="M128,16 C189.855892,16 240,66.144108 240,128 L176,128 C176,101.490332 154.509668,80 128,80 L128,16 Z"
          id="NE"
          fill="#A4343A"
        />
        <path
          d="M16,128 C16,66.144108 66.144108,16 128,16 L128,80 C101.490332,80 80,101.490332 80,128 L16,128 Z"
          id="NW"
          fill="#4A90E2"
        />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  elementClass: PropTypes.string
};

export default Logo;
