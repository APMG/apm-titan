import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Heading from '../Heading';

afterEach(cleanup);

test('Prop level={2} creates a <h2> element with hdg-2 class', () => {
  const { getByText } = render(<Heading level={2}>children</Heading>);

  expect(getByText('children').tagName).toBe('H2');
  expect(getByText('children').className).toBe('hdg hdg-2');
});

test('Prop level={3} creates a <h3> element with hdg-3 class', () => {
  const { getByText } = render(<Heading level={3}>children</Heading>);

  expect(getByText('children').tagName).toBe('H3');
  expect(getByText('children').className).toBe('hdg hdg-3');
});

test('Replaces the default class when a `className` prop is passed in', () => {
  const { getByText } = render(
    <Heading level={3} className="custom classes">
      children
    </Heading>
  );

  expect(getByText('children').className).toBe('custom classes');
});

test('Adds a class to the element when an `elementClass` prop is passed in', () => {
  const { getByText } = render(
    <Heading level={3} elementClass="custom classes">
      children
    </Heading>
  );

  expect(getByText('children').className).toBe('hdg hdg-3 custom classes');
});

test('Allows both `className` replacement and appended `elementClass`', () => {
  const { getByText } = render(
    <Heading level={3} className="lots of" elementClass="custom classes">
      children
    </Heading>
  );

  expect(getByText('children').className).toBe('lots of custom classes');
});

test('Throws an error when a isRequired value is missing', () => {
  expect(() => {
    render(<Heading>children</Heading>);
  }).toThrow();
});

test('Throws an error if `level` outside 1-6 is supplied', () => {
  expect(() => {
    render(<Heading level={7}>children</Heading>);
  }).toThrow();
});
