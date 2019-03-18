import React from 'react';
import { render, cleanup } from 'react-testing-library';
import EventTeaser from '../EventTeaser';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  title: 'this is a title',
  events: [
    {
      id: 324,
      title: '#MicroShow: Sharon Van Etten',
      shortDescription:
        'The incomparable Sharon Van Etten in the tiniest, warmest venue.',
      eventDates: [
        {
          date: '2019-02-17T10:00:00.000-06:00',
          description: '',
          updated_at: '2019-01-25T16:49:26.000-06:00'
        }
      ],
      venue: {
        id: 669,
        name: 'The Warming House',
        website: 'a/place'
      }
    }
  ]
};

describe('EventTeaser component', () => {
  test('renders title link if props exisit', () => {
    const { getByText } = render(
      <EventTeaser id={324} title={testProps.title} headingLevel={2} />
    );
    expect(getByText(testProps.title)).toBeDefined();
    expect(getByText(testProps.title).innerHTML).toBe('this is a title');
  });

  test('renders EventDates if prop exists', () => {
    const { getByText } = render(
      <EventTeaser
        id={324}
        title={testProps.title}
        eventDates={testProps.events[0].eventDates}
      />
    );
    expect(getByText('February 17, 2019')).toBeDefined();
  });

  test('does not render EventDates if prop is empty', () => {
    const { container } = render(
      <EventTeaser title={testProps.title} id={324} />
    );
    expect(container.getElementsByClassName('eventInfo-date').length).toBe(0);
  });

  test('renders EventVenue if prop exists', () => {
    const { container } = render(
      <EventTeaser
        id={324}
        title={testProps.title}
        venue={testProps.events[0].venue}
      />
    );
    expect(container.getElementsByClassName('eventInfo-venue').length).toBe(1);
  });

  test('does not render EventVenue if prop is empty', () => {
    const { container } = render(
      <EventTeaser title={testProps.title} id={324} />
    );
    expect(container.getElementsByClassName('eventInfo-venue').length).toBe(0);
  });

  test('renders Heading if h1 prop exists', () => {
    const { getByText, container } = render(
      <EventTeaser title={testProps.title} id={324} headingLevel={1} />
    );
    expect(getByText('this is a title').tagName).toBe('H1');
    expect(container.getElementsByClassName('hdg-1').length).toBe(1);
  });

  test('throws an error when required `title` and` id` prop is missing', () => {
    expect(() => {
      render(<EventTeaser />);
    }).toThrow();
  });
});
