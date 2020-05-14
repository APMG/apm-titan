import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventInfo from '../EventInfo';

afterEach(cleanup);

const defaultProps = {
  title: 'this is a title',
  artist: {
    name: 'john doe',
    website: 'www.johnDoe.com',
    facebook: 'facebook.com/johndoe',
    twitter: 'twitter.com/johndoe'
  },
  venue: {
    id: 133,
    name: 'Walker Art Center',
    website: 'http://www.walkerart.org/'
  },
  eventPrices: [
    {
      price: '69.00',
      description: 'Member price general admission'
    }
  ],
  eventDates: [
    {
      date: 'August 5, 2019'
    }
  ]
};

test('Render EventVenue if venue props is given', () => {
  const { getByText } = render(<EventInfo venue={defaultProps.venue} />);
  const venueNode = getByText(defaultProps.venue.name);

  expect(venueNode.textContent).toBe('Walker Art Center');
});

test('Render EventArtist if artist prop is given', () => {
  const { getByText } = render(<EventInfo artist={defaultProps.artist} />);
  let artistNode = getByText(defaultProps.artist.name);

  expect(artistNode.textContent).toBe('john doe');
});

test('Render EventDates if eventDates prop is given', () => {
  const { getByText } = render(
    <EventInfo eventDates={defaultProps.eventDates} />
  );
  let datesNode = getByText(defaultProps.eventDates[0].date);

  expect(datesNode.textContent).toBe('August 5, 2019');
});

test('Render EventPrices if eventPrices prop is given', () => {
  const { getByText } = render(<EventInfo prices={defaultProps.eventPrices} />);
  let eventNode = getByText('Member price general admission: $69.00');

  expect(eventNode.textContent).toBe('Member price general admission: $69.00');
});

test('Does not render EventVenue, EventArtist, EventPrices or EventDates if their respective props are not given', () => {
  const { container } = render(<EventInfo />);
  const venueNodes = container.querySelectorAll('.eventInfo-venue');
  const artistNodes = container.querySelectorAll('.eventInfo-artist');
  const pricesNodes = container.querySelectorAll('.eventInfo-prices');
  const dateNodes = container.querySelectorAll('.eventInfo-date');

  expect(venueNodes).toHaveLength(0);
  expect(artistNodes).toHaveLength(0);
  expect(pricesNodes).toHaveLength(0);
  expect(dateNodes).toHaveLength(0);
});
