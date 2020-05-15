import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventTeaser from '../EventTeaser';

afterEach(cleanup);

const defaultProps = {
  id: 324,
  title: '#MicroShow: Sharon Van Etten',
  shortDescription:
    'The incomparable Sharon Van Etten in the tiniest, warmest venue.',
  eventDates: [
    {
      date: '2019-02-17T10:00:00.000-06:00',
      description: 'an event',
      updated_at: '2019-01-25T16:49:26.000-06:00'
    },
    {
      date: '2020-03-18T20:00:00.000-06:00',
      description: 'another event'
    }
  ],
  venue: {
    id: 669,
    name: 'The Warming House',
    website: 'a/place'
  }
};

test('Renders title with correct text and correct heading level (defaulting to 4)', () => {
  const { getByText } = render(
    <EventTeaser id={defaultProps.id} title={defaultProps.title} />
  );
  const titleNode = getByText(defaultProps.title);

  expect(titleNode.textContent).toBe(defaultProps.title);
  expect(titleNode.classList).toContain('hdg');
  expect(titleNode.classList).toContain('hdg-4');
});

test('Renders title with correct text and correct heading level', () => {
  const { getByText } = render(
    <EventTeaser
      id={defaultProps.id}
      title={defaultProps.title}
      headingLevel={2}
    />
  );
  const titleNode = getByText(defaultProps.title);

  expect(titleNode.textContent).toBe(defaultProps.title);
  expect(titleNode.classList).toContain('hdg');
  expect(titleNode.classList).toContain('hdg-2');
});

test('Renders an EventDate if eventDates prop is given and contains just one entry', () => {
  const { getByText, container } = render(
    <EventTeaser
      id={defaultProps.id}
      title={defaultProps.title}
      eventDates={defaultProps.eventDates.slice(0, 1)}
    />
  );
  const dateNode = getByText('February 17, 2019');
  const dateNodes = container.querySelectorAll('.eventInfo-date');

  expect(dateNode.textContent).toBe('February 17, 2019');
  expect(dateNodes).toHaveLength(1);
});

test('Renders an EventDate if eventDates prop is given and contains more than one entry', () => {
  const { getByText, container } = render(
    <EventTeaser
      id={defaultProps.id}
      title={defaultProps.title}
      eventDates={defaultProps.eventDates}
    />
  );
  const firstDateNode = getByText('February 17, 2019');
  const secondDateNode = getByText('March 18, 2020');
  const dateNodes = container.querySelectorAll('.eventInfo-date');

  expect(firstDateNode.textContent).toBe('February 17, 2019');
  expect(secondDateNode.textContent).toBe('March 18, 2020');
  expect(dateNodes).toHaveLength(2);
});

test('Renders EventVenue if venue prop is given', () => {
  const { container } = render(
    <EventTeaser
      id={defaultProps.id}
      title={defaultProps.title}
      venue={defaultProps.venue}
    />
  );
  const venueNodes = container.querySelectorAll('.eventInfo-venue');

  expect(venueNodes).toHaveLength(1);
});

test('Does not render venue or event dates if props not given', () => {
  const { container } = render(
    <EventTeaser id={defaultProps.id} title={defaultProps.title} />
  );
  const venueNodes = container.querySelectorAll('.eventInfo-venue');
  const dateNodes = container.querySelectorAll('.eventInfo-date');

  expect(venueNodes).toHaveLength(0);
  expect(dateNodes).toHaveLength(0);
});

test('Throws an error when required "title" and "id" props are missing', () => {
  expect(() => {
    render(<EventTeaser />);
  }).toThrow();
});
