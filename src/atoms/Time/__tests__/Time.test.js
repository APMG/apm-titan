import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Time from '../Time';
import dayjs from 'dayjs';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const defaultProps = {
  dateTime: '2019-07-18T02:00:00-00:00',
  formatString: 'MM-DD-YYYY'
};

test('Renders a <time> element with the Timezone, 10:23 PM props should expect Timezone conversion to be 5:23 PM', () => {
  let defaultTimezoneProps = {
    dateTime: '2022-05-10T22:23:35+00:00',
    formatString: 'MMMM D, YYYY h:mm A'
  };

  const { getByText } = render(
    <Time dateTime={defaultTimezoneProps.dateTime} />
  );
  const timeNode = getByText('May 10, 2022 5:23 PM');

  expect(timeNode.tagName).toBe('TIME');
  expect(timeNode.textContent).toBe('May 10, 2022 5:23 PM');
  expect(timeNode.getAttribute('datetime')).toBe('2022-05-10T22:23:35+00:00');
});

test('Renders a <time> element with the Date(single digit) and Timezone a day before, 2:23 AM props should expect Timezone conversion to be 9:23 PM', () => {
  let defaultTimezoneProps = {
    dateTime: '2022-05-10T02:23:35+00:00',
    formatString: 'MM-DD-YYYY h:mm:ss A'
  };

  const { getByText } = render(
    <Time dateTime={defaultTimezoneProps.dateTime} />
  );
  const timeNode = getByText('May 9, 2022 9:23 PM');

  expect(timeNode.tagName).toBe('TIME');
  expect(timeNode.textContent).toBe('May 9, 2022 9:23 PM');
  expect(timeNode.getAttribute('datetime')).toBe('2022-05-10T02:23:35+00:00');
});

test('Renders a <time> element with the default config', () => {
  const { getByText } = render(<Time dateTime={defaultProps.dateTime} />);
  const timeNode = getByText('July 17, 2019 9:00 PM');

  expect(timeNode.tagName).toBe('TIME');
  expect(timeNode.textContent).toBe('July 17, 2019 9:00 PM');
  expect(timeNode.getAttribute('datetime')).toBe('2019-07-18T02:00:00-00:00');
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
  const node = getByText('07-17-2019');

  expect(node.textContent).toBe('07-17-2019');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T02:00:00-00:00');
});

it('Adds a class to the element when an `elementClass` prop is passed in', () => {
  const { getByText } = render(
    <Time dateTime={defaultProps.dateTime} elementClass="custom classes" />
  );
  const node = getByText('July 17, 2019 9:00 PM');

  expect(node.textContent).toBe('July 17, 2019 9:00 PM');
  expect(node.className).toBe('custom classes');
  expect(node.getAttribute('datetime')).toBe('2019-07-18T02:00:00-00:00');
});
