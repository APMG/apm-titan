import React from 'react';
import PropTypes from 'prop-types';
import Body from '../Body/Body';

const ContentBody = (props) => {
  return <Body elementClass="content_body" bodyHtml={props.bodyHtml} />;
};

ContentBody.propTypes = {
  bodyHtml: PropTypes.string.isRequired
};

export default ContentBody;
