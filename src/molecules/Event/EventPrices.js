import React from 'react';
import PropTypes from 'prop-types';

const EventPrices = ({ prices, ticketLink }) => {
  return (
    <div className="eventInfo-prices">
      <h2>Event tickets</h2>
      {prices.map((data, index) => {
        return (
          <div key={index}>
            {data.description}: ${data.price}
          </div>
        );
      })}
      <br />
      <a target={'_blank'} href={ticketLink} className="link">
        Buy Tickets here
      </a>
    </div>
  );
};

EventPrices.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  ticketLink: PropTypes.string
};
export default EventPrices;
