import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Event from '../Event';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
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

describe('Event component', () => {
  test('renders EventHeader', () => {
    const { getByText } = render(<Event title={testProps.title} />);
    expect(getByText('this is a title')).toBeDefined();
  });

  test('renders the Heading component with an h1 if headingLevel not specified', () => {
    const { getByText } = render(<Event title={testProps.title} />);
    expect(getByText(testProps.title).tagName).toBe('H1');
  });

  // test('does not render EventHeader if heading prop is empty', () => {
  // FIXME: This test doesn't do what was described and didn't before either. First off, what is a heading prop? Do you mean headingLevel? Either way, whether the component is rendered or not seems to be decided by whether you provide a title or not, and since you do here, it shows up.
  // const { container } = render(<Event title={testProps.title} />);
  // expect(container.getElementsByClassName('event_header').length).toBe(0);
  // });

  test('renders EventBody if bodyHtml prop exists', () => {
    const { getByText } = render(
      <Event title={testProps.title} bodyHtml={testProps.bodyHtml} />
    );
    expect(getByText(testProps.bodyHtml)).toBeDefined();
  });

  test('does not render EventBody if bodyHtml prop is empty', () => {
    const { container } = render(<Event title={testProps.title} />);
    expect(container.getElementsByClassName('event_body').length).toBe(0);
  });

  test('renders EventInfo if venue, artist, price props exists', () => {
    const { getByText } = render(
      <Event
        title={testProps.title}
        venue={testProps.venue}
        artist={testProps.artist}
        prices={testProps.eventPrices}
      />
    );
    expect(getByText(testProps.venue.name)).toBeDefined();
    expect(getByText(testProps.artist.name).innerHTML).toBeDefined();
    expect(
      getByText(`${testProps.eventPrices[0].description}: $69.0`)
    ).toBeDefined();
  });

  test('does not render Eventinfo if venue or artist prop is empty', () => {
    const { container } = render(<Event title={testProps.title} />);
    expect(container.getElementsByClassName('eventInfo-venue').length).toBe(0);
    expect(container.getElementsByClassName('eventInfo-artist').length).toBe(0);
    expect(container.getElementsByClassName('eventInfo-prices').length).toBe(0);
  });

  test('throws an error when required `title` prop is missing', () => {
    expect(() => {
      render(<Event />);
    }).toThrow();
  });
});
