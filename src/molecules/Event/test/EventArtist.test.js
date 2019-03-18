import React from 'react';
import { render, cleanup } from 'react-testing-library';
import EventArtist from '../EventArtist';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  title: 'this is a title',
  artist: {
    name: 'john doe',
    website: 'www.johnDoe.com',
    facebook: 'facebook.com/johndoe',
    twitter: 'twitter.com/johndoe'
  }
};

describe('EventArtist component', () => {
  test('renders Artist if props exists', () => {
    const { getByText } = render(<EventArtist artist={testProps.artist} />);
    expect(getByText(testProps.artist.name).innerHTML).toBeDefined();
  });
});
