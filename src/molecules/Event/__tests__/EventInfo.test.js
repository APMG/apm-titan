import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventInfo from '../EventInfo';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

function defaultProps() {
  const title = 'this is a title';
  const artist = {
    name: 'john doe',
    website: 'www.johnDoe.com',
    facebook: 'facebook.com/johndoe',
    twitter: 'twitter.com/johndoe'
  };
  const venue = {
    id: 133,
    name: 'Walker Art Center',
    website: 'http://www.walkerart.org/'
  };
  const eventPrices = [
    {
      price: '69.00',
      description: 'Member price general admission'
    }
  ];
  const eventDates = [
    {
      date: 'August 5, 2019'
    }
  ];

  return {
    title,
    artist,
    venue,
    eventPrices,
    eventDates
  };
}

test('Render EventVenue if venue props is provided', () => {
  const { venue } = defaultProps();

  const { getByText } = render(<EventInfo venue={venue} />);

  const node = getByText(venue.name);

  expect(node.textContent).toBe('Walker Art Center');
});

test('render EventArtist if artist prop exists', () => {
  const { artist } = defaultProps();

  const { getByText } = render(<EventInfo artist={artist} />);

  let artistNode = getByText(artist.name);

  expect(artistNode.textContent).toBe('john doe');
});

test('render EventDates if eventDates prop exists', () => {
  const { eventDates } = defaultProps();

  const { getByText } = render(<EventInfo eventDates={eventDates} />);

  let datesNode = getByText(eventDates[0].date);

  expect(datesNode.textContent).toBe('August 5, 2019');
});

test('render EventPrices if eventPrices prop exists', () => {
  const { eventPrices } = defaultProps();

  const { getByText } = render(<EventInfo prices={eventPrices} />);

  let eventNode = getByText(
    `${eventPrices[0].description}: $${eventPrices[0].price}`
  );

  expect(eventNode.textContent).toBe(`Member price general admission: $69.00`);
});

test('Does not render EventVenue, EventArtist, EventPrices or EventDates if their respective props are not provided', () => {
  const { container } = render(<EventInfo />);

  expect(container.getElementsByClassName('eventInfo-venue').length).toBe(0);
  expect(container.getElementsByClassName('eventInfo-artist').length).toBe(0);
  expect(container.getElementsByClassName('eventInfo-prices').length).toBe(0);
  expect(container.getElementsByClassName('eventInfo-date').length).toBe(0);
});
