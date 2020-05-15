import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Event from '../Event';

afterEach(cleanup);

const defaultProps = {
  title: 'this is a title',
  bodyHtml: 'body field',
  venue: {
    name: 'Walker Art Center',
    website: '/url/to/tickets'
  },
  artist: {
    name: 'Anthony Kiedis'
  },
  tag: {
    title: 'topic',
    href: 'www.mpr.org'
  },
  eventPrices: [
    {
      price: '69.0',
      description: 'Member price general admission'
    }
  ]
};

test('Renders the Heading component as an H1 if headingLevel not specified', () => {
  const { getByText } = render(<Event title={defaultProps.title} />);

  expect(getByText(defaultProps.title).tagName).toBe('H1');
});

test('Renders EventBody if bodyHtml prop is given', () => {
  const { getByText } = render(
    <Event title={defaultProps.title} bodyHtml={defaultProps.bodyHtml} />
  );

  expect(getByText(defaultProps.bodyHtml)).toBeDefined();
});

test('Does not render EventBody if bodyHtml prop is empty', () => {
  const { container } = render(<Event title={defaultProps.title} />);
  const bodyNodes = container.querySelectorAll('.event_body');

  expect(bodyNodes).toHaveLength(0);
});

test('Renders EventInfo if venue, artist, price props is given', () => {
  const { getByText } = render(
    <Event
      title={defaultProps.title}
      venue={defaultProps.venue}
      artist={defaultProps.artist}
      prices={defaultProps.eventPrices}
    />
  );

  expect(getByText(defaultProps.venue.name)).toBeDefined();
  expect(getByText(defaultProps.artist.name).innerHTML).toBeDefined();
  expect(
    getByText(`${defaultProps.eventPrices[0].description}: $69.0`)
  ).toBeDefined();
});

test('Does not render EventInfo if venue or artist prop is empty', () => {
  const { container } = render(<Event title={defaultProps.title} />);
  const venueNode = container.querySelectorAll('.eventInfo-venue');
  const artistNode = container.querySelectorAll('.eventInfo-artist');
  const pricesNode = container.querySelectorAll('.eventInfo-prices');

  expect(venueNode).toHaveLength(0);
  expect(artistNode).toHaveLength(0);
  expect(pricesNode).toHaveLength(0);
});

test('Throws an error when required `title` prop is missing', () => {
  expect(() => {
    render(<Event />);
  }).toThrow();
});
