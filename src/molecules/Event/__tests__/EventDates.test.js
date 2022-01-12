import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventDates from '../EventDates';

afterEach(cleanup);

const defaultProps = {
  eventDates: [
    {
      date: '2019-08-05T06:00:00-05:00',
      description: 'An Event'
    },
    {
      date: '2019-05-25T06:00:00-05:00',
      description: 'lol'
    }
  ]
};

test('Renders EventDates if eventDates prop is given', () => {
  const { getByText } = render(
    <EventDates eventDates={defaultProps.eventDates} />
  );
  let firstDateNode = getByText('August 5, 2019');
  let secondDateNode = getByText('May 25, 2019');

  expect(firstDateNode.textContent).toBe('August 5, 2019');
  expect(secondDateNode.textContent).toBe('May 25, 2019');
});
