import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Time from '../Time';
import dayjs from 'dayjs';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const defaultProps = {
  dateTime: '2019-07-18T06:00:00-05:00',
  formatString: 'MM-DD-YYYY'
};

test('Renders a <time> element with the default config', () => {
  const { getByText } = render(<Time dateTime={defaultProps.dateTime} />);
  const timeNode = getByText('July 18, 2019');

  expect(timeNode.tagName).toBe('TIME');
  expect(timeNode.textContent).toBe('July 18, 2019');
  expect(timeNode.getAttribute('datetime')).toBe('2019-07-18T06:00:00-05:00');
});

test('Uses "time ago" format when type is "distance"', () => {
  // Calculate dateTimes based on current test runner's time
  const dateFiveDaysAgo = dayjs().subtract(5, 'day'); //subDays(new Date(), 5);
  const formattedTimeFiveDaysAgo = dateFiveDaysAgo.format(
    'MMMM D, YYYY h:mm A'
  );
  const dateTwelveMinutesAgo = dayjs().subtract(12, 'minute'); //subMinutes(new Date(), 12);
  const formattedTimeTwelveMinutesAgo = dateTwelveMinutesAgo.format(
    'MMMM D, YYYY h:mm A'
  );

  const { getByText } = render(
    <>
      <Time dateTime={dateFiveDaysAgo.toString()} type="distance" />
      <Time
        dateTime={dateTwelveMinutesAgo.toString()}
        type="distance"
        distanceFormat="minute"
      />
    </>
  );
  const daysNode = getByText('5 days');
  const minsNode = getByText('12 minutes');

  expect(daysNode.textContent).toBe('5 days');
  expect(daysNode.getAttribute('datetime')).toBe(dateFiveDaysAgo.toString());
  expect(daysNode.getAttribute('title')).toBe(
    formattedTimeFiveDaysAgo.toString()
  );
  expect(minsNode.textContent).toBe('12 minutes');
  expect(minsNode.getAttribute('datetime')).toBe(
    dateTwelveMinutesAgo.toString()
  );
  expect(minsNode.getAttribute('title')).toBe(formattedTimeTwelveMinutesAgo);
});

test('Formats the timestamp according to the format prop', () => {
  const { getByText } = render(<Time {...defaultProps} />);
  const node = getByText('07-18-2019');

  expect(node.textContent).toBe('07-18-2019');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T06:00:00-05:00');
});

it('Adds a class to the element when an `elementClass` prop is passed in', () => {
  const { getByText } = render(
    <Time dateTime={defaultProps.dateTime} elementClass="custom classes" />
  );
  const node = getByText('July 18, 2019');

  expect(node.textContent).toBe('July 18, 2019');
  expect(node.className).toBe('custom classes');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T06:00:00-05:00');
});

it('Throws an error when a required value is missing', () => {
  expect(() => {
    render(<Time />);
  }).toThrow();
});
