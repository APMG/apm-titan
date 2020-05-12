import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventPrices from '../EventPrices';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
function defaultProps() {
  const prices = [
    {
      price: '69',
      description: 'Member price general admission'
    },
    {
      price: '54',
      description: 'Cramped leg room'
    },
    {
      price: '100',
      description: 'VIP'
    }
  ];
  const ticketLink = 'https://youtube.com';

  return {
    prices,
    ticketLink
  };
}

test('Creates an EventPrice node for a single price', () => {
  const props = defaultProps();
  props.prices = props.prices.slice(0, 1);

  const { container } = render(<EventPrices prices={props.prices} />);

  let priceNode = container.getElementsByClassName('eventInfo-price')[0];

  expect(priceNode.textContent).toBe('Member price general admission: $69');
});

test('Creates an EventPrice node for a few prices', () => {
  const { prices } = defaultProps();

  const { container } = render(<EventPrices prices={prices} />);

  let firstPriceNode = container.getElementsByClassName('eventInfo-price')[0];
  let secondPriceNode = container.getElementsByClassName('eventInfo-price')[1];
  let thirdPriceNode = container.getElementsByClassName('eventInfo-price')[2];

  expect(firstPriceNode.textContent).toBe(
    'Member price general admission: $69'
  );
  expect(secondPriceNode.textContent).toBe('Cramped leg room: $54');
  expect(thirdPriceNode.textContent).toBe('VIP: $100');
});

test('Throws if price is not provided', () => {
  const props = defaultProps();
  props.prices = [{ description: 'what' }];

  expect(() => {
    render(<EventPrices prices={props.prices} />);
  }).toThrow();
});

test('Links to the URL provided in the ticketLink prop', () => {
  const { prices, ticketLink } = defaultProps();

  const { getByText } = render(
    <EventPrices prices={prices} ticketLink={ticketLink} />
  );

  const node = getByText('Buy Tickets here');

  expect(node.getAttribute('href')).toBe('https://youtube.com');
});
