import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { Link } = props;
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
      const newWindow = props.newWindow ? '_blank' : null;
      return (
        <Link className={classes} disabled={props.disabled} href={props.href}>
          {/* eslint-disable-next-line */}
          <a target={newWindow}>{props.children}</a>
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
