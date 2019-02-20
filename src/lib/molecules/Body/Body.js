import React from 'react';
import PropTypes from 'prop-types';

// TODO: Implement the JS equivalent to Amat for transforming CMS body into HTML
// Amat's (ruby) repo: https://gitlab.mpr.org/cms-prototype/amat

const Body = (props) => {
  const markup = () => {
    return { __html: props.bodyHtml };
  };

  return (
    <div
      className={`userContent ${props.elementClass}`}
      dangerouslySetInnerHTML={markup()}
    />
  );
};

Body.propTypes = {
  elementClass: PropTypes.string,
  bodyHtml: PropTypes.string.isRequired
};

export default Body;
