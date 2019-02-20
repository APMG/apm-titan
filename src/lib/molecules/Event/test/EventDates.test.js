import React from 'react';
import { render, cleanup } from 'react-testing-library';
import EventDates from '../EventDates';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  eventDates: [
    {
      date: 'August 5th, 2019'
    }
  ]
};

describe('EventDates component', () => {
  test('render EventDates if prop exists', () => {
    const { getByText } = render(
      <EventDates eventDates={testProps.eventDates} />
    );
    let nodeTestDate = getByText(testProps.eventDates[0].date);
    expect(nodeTestDate.innerHTML).toBe('August 5th, 2019');
  });
});
