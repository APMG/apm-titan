import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventArtist from '../EventArtist';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
function defaultProps() {
  const artist = {
    name: 'john doe',
    website: 'www.johnDoe.com',
    facebook: 'facebook.com/johndoe',
    twitter: 'twitter.com/johndoe'
  };

  return {
    artist
  };
}

test('Renders correct links for the artist object', () => {
  const { artist } = defaultProps();

  const { getByText } = render(<EventArtist artist={artist} />);

  const websiteNode = getByText(artist.name).parentElement;
  const facebookNode = getByText('Facebook');
  const twitterNode = getByText('Twitter');

  expect(websiteNode.getAttribute('href')).toBe('www.johnDoe.com');
  expect(facebookNode.getAttribute('href')).toBe('facebook.com/johndoe');
  expect(twitterNode.getAttribute('href')).toBe('twitter.com/johndoe');
});

// TODO: Perhaps expand these tests when functionality of the component itself is expanded: right now, there is no logic in there for, say, if an artist doesn't have a Facebook page or an artist would prefer to link to their Instagram or something
