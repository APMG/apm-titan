import React from 'react';
import PropTypes from 'prop-types';

const EventPrices = (props) => {
  return (
    // TODO: I don't think this should be an article. It seems like more of an attribute of a larger article, such as the event itself. The things it holds don't seem like paragraphs either.
    <article className="eventInfo-prices">
      <h2>Event tickets</h2>
      {props.price.map((data, index) => {
        return (
          <div key={index}>
            <p>
              {data.description}: ${data.price}
            </p>
          </div>
        );
      })}

      <p>
        <a target={'_blank'} href={props.ticketLink} className="link">
          Buy Tickets here
        </a>
      </p>
      <br />
    </article>
  );
};

EventPrices.propTypes = {
  price: PropTypes.array,
  ticketLink: PropTypes.string
};
export default EventPrices;
