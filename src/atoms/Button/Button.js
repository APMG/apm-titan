import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Link from '../Link/Link';
import Link from 'next/link';

const Button = (props) => {
  const classes = classNames({
    btn: true,
    [`btn-${props.type}`]: props.type,
    [`btn-${props.size}`]: props.size,
    [props.elementClass]: props.elementClass
  });

  if (props.href) {
    if (props.disabled) {
      return (
        <span className={classes} disabled={props.disabled}>
          {props.children}
        </span>
      );
    } else {
      return (
        <Link href={props.href}>
          <a
            href={props.href}
            className={classes}
            disabled={props.disabled}
            target={props.newWindow ? '_blank' : null}
          >
            {props.children}
          </a>
        </Link>
      );
    }
  } else {
    return (
      <button
        className={classes}
        disabled={props.disabled}
        type={props.submitForm ? 'submit' : 'button'}
      >
        {props.children}
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
