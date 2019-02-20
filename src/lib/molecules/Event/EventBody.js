import React from 'react';
import PropTypes from 'prop-types';
import Body from '../Body/Body';

const EventBody = (props) => {
  return <Body elementClass="event_body" bodyHtml={props.bodyHtml} />;
};

EventBody.propTypes = {
  bodyHtml: PropTypes.string.isRequired
};

export default EventBody;
