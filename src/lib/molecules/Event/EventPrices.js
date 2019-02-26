import React from 'react';
import PropTypes from 'prop-types';

const EventPrices = (props) => {
  return (
    <div className="eventInfo-prices">
      <h2>Event tickets</h2>
      {props.price.map((data, index) => {
        return (
          <div key={index}>
            {data.description}: ${data.price}
          </div>
        );
      })}
      <br />
      <a target={'_blank'} href={props.ticketLink} className="link">
        Buy Tickets here
      </a>
    </div>
  );
};

EventPrices.propTypes = {
  price: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  ticketLink: PropTypes.string
};
export default EventPrices;
