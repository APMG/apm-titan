import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Time from '../Time';
import { format, subDays, subMinutes } from 'date-fns';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Time', () => {
  test('renders a <time> element with the default config', () => {
    const { getByText } = render(<Time dateTime="2019-07-18T04:00:00-05:00" />);
    const timeEl = getByText('July 18, 2019');
    expect(timeEl.tagName).toBe('TIME');
    expect(timeEl.innerHTML).toBe('July 18, 2019');
    expect(timeEl.getAttribute('datetime')).toBe('2019-07-18T04:00:00-05:00');
    expect(timeEl.className).toBe('');
  });

  test('throws an error when a isRequired value is missing', () => {
    expect(() => {
      render(<Time />);
    }).toThrow();
  });

  test('uses "time ago" format when prop type="distance"', () => {
    const titleFormat = 'MMMM d, yyyy h:mm aa';
    // Calculate dateTimes based on current test runner's time
    const dateFiveDaysAgo = subDays(new Date(), 5);
    const formattedTimeFiveDaysAgo = format(dateFiveDaysAgo, titleFormat);
    const dateTwelveMinutesAgo = subMinutes(new Date(), 12);
    const formattedTimeTwelveMinutesAgo = format(
      dateTwelveMinutesAgo,
      titleFormat
    );

    const { getByText } = render(
      <>
        <Time dateTime={dateFiveDaysAgo.toString()} type="distance" />
        <Time dateTime={dateTwelveMinutesAgo.toString()} type="distance" />
      </>
    );
    const fiveDaysEl = getByText('5 days');
    const twelveMinsEl = getByText('12 minutes');

    expect(fiveDaysEl.innerHTML).toBe('5 days');
    expect(fiveDaysEl.getAttribute('datetime')).toBe(
      dateFiveDaysAgo.toString()
    );
    expect(fiveDaysEl.getAttribute('title')).toBe(
      formattedTimeFiveDaysAgo.toString()
    );

    expect(twelveMinsEl.innerHTML).toBe('12 minutes');
    expect(twelveMinsEl.getAttribute('datetime')).toBe(
      dateTwelveMinutesAgo.toString()
    );
    expect(twelveMinsEl.getAttribute('title')).toBe(
      formattedTimeTwelveMinutesAgo
    );
  });

  test('formats the timestamp according to the format prop', () => {
    const { getByText } = render(
      <Time dateTime="2019-07-18T04:00:00-05:00" formatString="MM-dd-yyyy" />
    );
    const timeEl = getByText('07-18-2019');
    expect(timeEl.innerHTML).toBe('07-18-2019');
    expect(timeEl.getAttribute('datetime')).toBe('2019-07-18T04:00:00-05:00');
  });

  test('adds a class to the element when an `elementClass` prop is passed in', () => {
    const { getByText } = render(
      <Time
        dateTime="2019-07-18T04:00:00-05:00"
        elementClass="custom classes"
      />
    );
    expect(getByText('July 18, 2019').className).toBe('custom classes');
  });
});
