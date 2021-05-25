import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Amat's (ruby) repo: https://gitlab.mpr.org/cms-prototype/amat

const Body = ({ bodyHtml, elementClass }) => {
  console.log('bodyHTML 🔵:', bodyHtml);
  const classes = classNames({
    userContent: true,
    [elementClass]: elementClass
  });

  const markup = () => {
    return { __html: bodyHtml };
  };

  return <div className={classes} dangerouslySetInnerHTML={markup()} />;
};

Body.propTypes = {
  elementClass: PropTypes.string,
  bodyHtml: PropTypes.string.isRequired
};

export default Body;
