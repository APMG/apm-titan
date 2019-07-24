import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link';

const Button = ({
  as,
  children,
  disabled,
  elementClass,
  href,
  newWindow,
  size,
  submitForm,
  type,
  ...rest
}) => {
  const classes = classNames({
    btn: true,
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: disabled,
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
      return (
        <Link href={href} as={as}>
          <a
            className={classes}
            target={newWindow ? '_blank' : null}
            rel={newWindow ? 'noopener noreferrer' : null}
            {...rest}
          >
            {children}
          </a>
        </Link>
      );
    }
  } else {
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
