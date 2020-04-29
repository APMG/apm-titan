import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Time from '../Time';
import { format, subDays, subMinutes } from 'date-fns';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('renders a <time> element with the default config', () => {
  // Arranged
  const data = {
    dateTime: '2019-07-18T04:00:00-05:00'
  };
  // Act
  const { getByText } = render(<Time dateTime={data.dateTime} />);
  const node = getByText('July 18, 2019');
  // Assert
  expect(node).toBeDefined();
  expect(node.className).toBe('');
  expect(node.tagName).toBe('TIME');
  expect(node.innerHTML).toBe('July 18, 2019');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T04:00:00-05:00');
});

test('uses "time ago" format when prop type="distance"', () => {
  // Arranged
  const titleFormat = 'MMMM d, yyyy h:mm aa';
  // Calculate dateTimes based on current test runner's time
  const dateFiveDaysAgo = subDays(new Date(), 5);
  const formattedTimeFiveDaysAgo = format(dateFiveDaysAgo, titleFormat);
  const dateTwelveMinutesAgo = subMinutes(new Date(), 12);
  const formattedTimeTwelveMinutesAgo = format(
    dateTwelveMinutesAgo,
    titleFormat
  );
  // Act
  const { getByText } = render(
    <>
      <Time dateTime={dateFiveDaysAgo.toString()} type="distance" />
      <Time dateTime={dateTwelveMinutesAgo.toString()} type="distance" />
    </>
  );
  const nodeDays = getByText('5 days');
  const nodeMins = getByText('12 minutes');
  // Assert
  expect(nodeDays).toBeDefined();
  expect(nodeMins).toBeDefined();
  expect(nodeDays.innerHTML).toBe('5 days');
  expect(nodeDays.getAttribute('datetime')).toBe(dateFiveDaysAgo.toString());
  expect(nodeDays.getAttribute('title')).toBe(
    formattedTimeFiveDaysAgo.toString()
  );
  expect(nodeMins.innerHTML).toBe('12 minutes');
  expect(nodeMins.getAttribute('datetime')).toBe(
    dateTwelveMinutesAgo.toString()
  );
  expect(nodeMins.getAttribute('title')).toBe(formattedTimeTwelveMinutesAgo);
});

test('formats the timestamp according to the format prop', () => {
  // Arranged
  const data = {
    date: '2019-07-18T04:00:00-05:00',
    format: 'MM-dd-yyyy'
  };
  // Act
  const { getByText } = render(
    <Time dateTime={data.date} formatString={data.format} />
  );
  const node = getByText('07-18-2019');
  // Assert
  expect(node).toBeDefined();
  expect(node.innerHTML).toBe('07-18-2019');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T04:00:00-05:00');
});

test('adds a class to the element when an `elementClass` prop is passed in', () => {
  // Arranged
  const data = {
    dateTime: '2019-07-18T04:00:00-05:00'
  };
  // Act
  const { getByText } = render(
    <Time dateTime={data.dateTime} elementClass="custom classes" />
  );
  const node = getByText('July 18, 2019');
  // Assert
  expect(node).toBeDefined();
  expect(node.innerHTML).toBe('July 18, 2019');
  expect(node.className).toBe('custom classes');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T04:00:00-05:00');
});

test('throws an error when a isRequired value is missing', () => {
  expect(() => {
    render(<Time />);
  }).toThrow();
});
