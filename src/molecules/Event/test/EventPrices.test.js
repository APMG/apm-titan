import React from 'react';
import { render, cleanup } from 'react-testing-library';
import EventPrices from '../EventPrices';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  eventPrices: [
    {
      price: '69.0',
      description: 'Member price general admission'
    }
  ]
};

describe('EventPrices component', () => {
  test('render EventPrices if prop(s) exists', () => {
    const { getByText } = render(
      <EventPrices prices={testProps.eventPrices} />
    );

    let nodeTestPrice = getByText(
      `${testProps.eventPrices[0].description}: $69.0`
    );
    let nodeTestDesc = getByText(
      `Member price general admission: $${testProps.eventPrices[0].price}`
    );

    expect(nodeTestPrice.innerHTML).toBe(
      `${testProps.eventPrices[0].description}: $69.0`
    );
    expect(nodeTestDesc.innerHTML).toBe(
      `Member price general admission: $${testProps.eventPrices[0].price}`
    );
  });
});
