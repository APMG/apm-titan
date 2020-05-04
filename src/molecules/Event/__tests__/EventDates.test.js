import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventDates from '../EventDates';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused

function defaultProps() {
  const eventDates = [
    {
      date: 'August 5, 2019',
      description: 'An Event'
    },
    {
      date: 'May 25, 2019',
      description: 'lol'
    }
  ];

  return {
    eventDates
  };
}

test('render EventDates if prop exists', () => {
  const { eventDates } = defaultProps();

  const { getByText } = render(<EventDates eventDates={eventDates} />);

  let firstDateNode = getByText(eventDates[0].date);
  let secondDateNode = getByText(eventDates[1].date);

  expect(firstDateNode.textContent).toBe('August 5, 2019');
  expect(secondDateNode.textContent).toBe('May 25, 2019');
});

// TODO: Perhaps expand these tests when functionality of the component itself is expanded: right now, there is no logic in there for, say, if an artist doesn't have a Facebook page or an artist would prefer to link to their Instagram or something
