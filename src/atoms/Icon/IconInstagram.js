import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const IconInstagram = (props) => {
  const classes = classNames({
    icon: true,
    'icon-instagram': true,
    [props.elementClass]: props.elementClass
  });

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="25"
      height="28"
      viewBox="0 0 25 28"
    >
      <path
        stroke="none"
        d="M7.9 2C4.7 2 2 4.7 2 7.9L2 19.8C2 23.1 4.7 25.7 7.9 25.7L19.1 25.7C22.3 25.7 25 23.1 25 19.8L25 7.9C25 4.7 22.3 2 19.1 2L7.9 2ZM19.1 27.7L7.9 27.7C3.6 27.7 0 24.2 0 19.8L0 7.9C0 3.6 3.6 0 7.9 0L19.1 0C23.4 0 27 3.6 27 7.9L27 19.8C27 24.2 23.4 27.7 19.1 27.7ZM13.3 8.9C12.1 8.9 11 9.4 10.1 10.3 9.2 11.2 8.6 12.5 8.6 13.8 8.6 16.5 10.8 18.7 13.5 18.7 16.2 18.7 18.3 16.6 18.4 13.8 18.4 12.4 18 11.2 17.2 10.4 16.4 9.5 15.1 9 13.5 8.9 13.4 8.9 13.4 8.9 13.3 8.9M13.5 21.2C9.4 21.2 6.1 17.9 6.1 13.8 6.1 11.8 6.9 9.9 8.4 8.5 9.8 7.1 11.6 6.4 13.5 6.5 15.8 6.5 17.7 7.3 19 8.7 20.3 10 20.9 11.8 20.9 13.9 20.8 15.8 20 17.7 18.7 19 17.3 20.4 15.5 21.2 13.5 21.2M22.8 6.3C22.8 7.2 22 8 21 8 20.1 8 19.3 7.2 19.3 6.3 19.3 5.3 20.1 4.5 21 4.5 22 4.5 22.8 5.3 22.8 6.3"
      />
    </svg>
  );
};

IconInstagram.propTypes = {
  elementClass: PropTypes.string
};

export default IconInstagram;
