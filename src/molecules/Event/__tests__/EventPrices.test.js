import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventPrices from '../EventPrices';

afterEach(cleanup);

const defaultProps = {
  prices: [
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
  ]
};

test('Creates an EventPrice node for a single price', () => {
  defaultProps.prices = defaultProps.prices.slice(0);
  const { container } = render(<EventPrices prices={defaultProps.prices} />);
  const priceNode = container.querySelectorAll('.eventInfo-price')[0];

  expect(priceNode.textContent).toBe('Member price general admission: $69');
});

test('Creates EventPrice nodes for a number of prices', () => {
  const { container } = render(<EventPrices prices={defaultProps.prices} />);
  const firstPriceNode = container.querySelectorAll('.eventInfo-price')[0];
  const secondPriceNode = container.querySelectorAll('.eventInfo-price')[1];
  const thirdPriceNode = container.querySelectorAll('.eventInfo-price')[2];

  expect(firstPriceNode.textContent).toBe(
    'Member price general admission: $69'
  );
  expect(secondPriceNode.textContent).toBe('Cramped leg room: $54');
  expect(thirdPriceNode.textContent).toBe('VIP: $100');
});

test('Links to the URL provided in the ticketLink prop', () => {
  const { getByText } = render(
    <EventPrices
      prices={defaultProps.prices}
      ticketLink={'https://youtube.com'}
    />
  );
  const buyNode = getByText('Buy Tickets here');

  expect(buyNode.getAttribute('href')).toBe('https://youtube.com');
});
