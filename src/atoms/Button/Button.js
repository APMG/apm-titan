import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  Link,
  type,
  size,
  elementClass,
  href,
  disabled,
  children,
  // eslint-disable-next-line no-unused-vars
  newWindow,
  submitForm
}) => {
  const classes = classNames({
    btn: true,
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [elementClass]: elementClass
  });

  if (href) {
    if (disabled) {
      return (
        <span className={classes} disabled={disabled}>
          {children}
        </span>
      );
    } else {
      const newWindow = newWindow ? '_blank' : null;
      return (
        <Link className={classes} disabled={disabled} href={href}>
          {/* eslint-disable-next-line */}
          <a target={newWindow}>{children}</a>
        </Link>
      );
    }
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        type={submitForm ? 'submit' : 'button'}
      >
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  elementClass: PropTypes.string,
  href: PropTypes.string,
  /** newWindow only applies to Link buttons, adds target="_blank" */
  newWindow: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small']),
  /** if submitForm == true, adds type="submit" to <button> */
  submitForm: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'destructive'])
};

export default Button;
