import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '@reach/router';

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
        <Link className={classes} disabled={props.disabled} to={props.href}>
          {props.children}
        </Link>
      );
    }
  } else {
    return (
      <button className={classes} disabled={props.disabled}>
        {props.children}
      </button>
    );
  }
};

Button.propTypes = {
  // Children are required because even if the button is styled with a class it should have text inside for accessibility
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  elementClass: PropTypes.string,
  // Renders a <button> element if href is missing/null
  href: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', 'destructive'])
};

export default Button;
