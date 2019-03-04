import React from 'react';
import { render, cleanup } from 'react-testing-library';
import EventInfo from '../EventInfo';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

describe('EventInfo component', () => {
  const testProps = {
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
        price: '69.0',
        description: 'Member price general admission'
      }
    ],
    eventDates: [
      {
        date: 'August 5th, 2019'
      }
    ]
  };

  test('render EventVenue if venue name props exists', () => {
    const { getByText } = render(<EventInfo venue={testProps.venue} />);

    expect(getByText('Walker Art Center')).toBeDefined();
  });

  test('does not render EventVenue if venue prop is empty', () => {
    const { container } = render(<EventInfo title={testProps.title} />);
    expect(container.getElementsByClassName('eventInfo-venue').length).toBe(0);
  });

  test('render EventArtist if artist name props exists', () => {
    const { getByText } = render(<EventInfo artist={testProps.artist} />);
    let nodeArtist = getByText(testProps.artist.name);

    expect(nodeArtist.innerHTML).toBe('john doe');
  });

  test('does not render EventArtist if artist prop is empty', () => {
    const { container } = render(<EventInfo title={testProps.title} />);
    expect(container.getElementsByClassName('eventInfo-artist').length).toBe(0);
  });

  test('render EventPrices if prop(s) exists', () => {
    const { getByText } = render(<EventInfo price={testProps.eventPrices} />);

    let nodeTestPrice = getByText(
      `${testProps.eventPrices[0].description}: $69.0`
    );
    let nodeTestDesc = getByText(
      `Member price general admission: $${testProps.eventPrices[0].price}`
    );
    expect(nodeTestPrice.innerHTML).toBe(
      `${testProps.eventPrices[0].description}: $69.0`
    );
    expect(nodeTestDesc.innerHTML).toBe(
      `Member price general admission: $${testProps.eventPrices[0].price}`
    );
  });

  test('does not render EventPrices if eventPrices props is empty', () => {
    const { container } = render(<EventInfo title={testProps.title} />);
    expect(container.getElementsByClassName('eventInfo-prices').length).toBe(0);
  });

  test('render EventDates if prop(s) exists', () => {
    const { getByText } = render(
      <EventInfo eventDates={testProps.eventDates} />
    );
    let nodeTestDates = getByText(testProps.eventDates[0].date);
    expect(nodeTestDates.innerHTML).toBe('August 5th, 2019');
  });

  test('does not render EventDates if eventPrices props is empty', () => {
    const { container } = render(<EventInfo title={testProps.title} />);
    expect(container.getElementsByClassName('eventInfo-date').length).toBe(0);
  });
});
