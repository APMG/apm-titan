import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Heading from './Heading';
import 'jest-prop-type-error';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Heading tests', () => {
  test('Heading level props "2", matches as expected', () => {
    const { getByText } = render(
      <Heading title={'this is a title'} level={2}>
        children
      </Heading>
    );
    expect(getByText('children').tagName).toBe('H2');
  });

  test('Heading level props "3", matches as expected', () => {
    const { getByText } = render(
      <Heading title={'this is a title'} level={3}>
        children
      </Heading>
    );
    expect(getByText('children').tagName).toBe('H3');
  });

  test('Throws an error when a isRequired value is missing', () => {
    expect(() => {
      render(<Heading title={'this is a title'} />);
    }).toThrow();
  });
});
