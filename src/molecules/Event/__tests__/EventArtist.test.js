import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventArtist from '../EventArtist';

afterEach(cleanup);

const defaultProps = {
  artist: {
    name: 'john doe',
    website: 'www.johnDoe.com',
    facebook: 'facebook.com/johndoe',
    twitter: 'twitter.com/johndoe'
  }
};

test('Renders correct links for the artist object', () => {
  const { getByText } = render(<EventArtist artist={defaultProps.artist} />);

  const websiteNode = getByText(defaultProps.artist.name).parentElement;
  const facebookNode = getByText('Facebook');
  const twitterNode = getByText('Twitter');

  expect(websiteNode.getAttribute('href')).toBe('www.johnDoe.com');
  expect(facebookNode.getAttribute('href')).toBe('facebook.com/johndoe');
  expect(twitterNode.getAttribute('href')).toBe('twitter.com/johndoe');
});

// TODO: Perhaps expand these tests when functionality of the component itself is expanded: right now, there is no logic in there for, say, if an artist doesn't have a Facebook page or an artist would prefer to link to their Instagram or something
