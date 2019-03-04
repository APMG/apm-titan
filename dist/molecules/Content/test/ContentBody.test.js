import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ContentBody from '../ContentBody';
import 'jest-prop-type-error';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

describe('ContentBody component', () => {
  test('renders body component', () => {
    const { getByText } = render(<ContentBody bodyHtml="body text" />);
    expect(getByText('body text')).toBeDefined();
  });

  test('Throws an error when required `bodyHtml` prop is missing', () => {
    expect(() => {
      render(<ContentBody />);
    }).toThrow();
  });
});
