import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  type,
  size,
  elementClass,
  disabled,
  children,
  submitForm,
  ...rest
}) => {
  const classes = classNames({
    btn: true,
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [elementClass]: elementClass
  });

  return (
    <button
      className={classes}
      disabled={disabled}
      type={submitForm ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  elementClass: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  submitForm: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'destructive'])
};

export default Button;
