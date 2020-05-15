import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventDates from '../EventDates';

afterEach(cleanup);

const defaultProps = {
  eventDates: [
    {
      date: 'August 5, 2019',
      description: 'An Event'
    },
    {
      date: 'May 25, 2019',
      description: 'lol'
    }
  ]
};

test('Renders EventDates if eventDates prop is given', () => {
  const { getByText } = render(
    <EventDates eventDates={defaultProps.eventDates} />
  );
  let firstDateNode = getByText(defaultProps.eventDates[0].date);
  let secondDateNode = getByText(defaultProps.eventDates[1].date);

  expect(firstDateNode.textContent).toBe('August 5, 2019');
  expect(secondDateNode.textContent).toBe('May 25, 2019');
});
