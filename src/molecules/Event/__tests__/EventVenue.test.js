import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventVenue from '../EventVenue';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
function defaultProps() {
  let venue = {
    name: 'First Avenue',
    website: 'https://youtube.com',
    street: '701 N 1st Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55403',
    phone: '(612) 338-8388',
    latitude: '44.9786311',
    longitude: '-93.2773028'
  };

  return {
    venue
  };
}

test('Creates the correct address element', () => {
  const { venue } = defaultProps();

  const { container } = render(<EventVenue venue={venue} />);

  const node = container.querySelectorAll('address')[0];

  // a snapshot works well here because 1) it's tiny and
  // 2) this should never change. if it does, there's a problem.
  expect(node).toMatchSnapshot();
});

test('Links to the correct Google Maps coordinates', () => {
  const { venue } = defaultProps();

  const { getByText } = render(<EventVenue venue={venue} />);

  const node = getByText('View Map');

  expect(node.getAttribute('href')).toBe(
    `https://www.google.com/maps/?q=${venue.latitude},${venue.longitude}`
  );
});
