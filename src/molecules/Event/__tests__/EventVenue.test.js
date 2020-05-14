import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventVenue from '../EventVenue';

afterEach(cleanup);

const defaultProps = {
  venue: {
    name: 'First Avenue',
    website: 'https://youtube.com',
    street: '701 N 1st Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55403',
    phone: '(612) 338-8388',
    latitude: '44.9786311',
    longitude: '-93.2773028'
  }
};

test('Creates the correct address element', () => {
  const { container } = render(<EventVenue venue={defaultProps.venue} />);
  const addressNode = container.querySelectorAll('address')[0];

  // a snapshot works well here because 1) it's tiny and 2) this should never change. if it does, there's a problem.
  expect(addressNode).toMatchSnapshot();
});

test('Links to the correct Google Maps coordinates', () => {
  const { getByText } = render(<EventVenue venue={defaultProps.venue} />);
  const mapNode = getByText('View Map');

  expect(mapNode.getAttribute('href')).toBe(
    `https://www.google.com/maps/?q=${defaultProps.venue.latitude},${defaultProps.venue.longitude}`
  );
});
