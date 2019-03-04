import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Figure from './Figure';
import 'jest-prop-type-error';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  image: { fallbackSrc: 'http://example.com/img.jpg', alt: 'img alt text' },
  caption: 'Caption Lorem Ipsum',
  credit: 'Credit Name',
  creditHref: 'https://www.test.url'
};

describe('Figure', () => {
  test('renders an image if the image object exists', () => {
    const { getByAltText } = render(<Figure image={testProps.image} />);
    const node = getByAltText(testProps.image.alt);
    expect(node).toBeDefined();
    expect(node.getAttribute('src')).toBe(testProps.image.fallbackSrc);
  });

  test('throws an error when required image prop is empty', () => {
    expect(() => {
      render(<Figure />);
    }).toThrow();
  });

  test('renders caption', () => {
    const { getByText } = render(
      <Figure image={testProps.image} caption={testProps.caption} />
    );
    const node = getByText(testProps.caption);
    expect(node).toBeDefined();
    expect(node.innerHTML).toBe(testProps.caption);
  });

  test('does not render caption if not passed in', () => {
    const { container } = render(
      <Figure image={testProps.image} caption={testProps.caption} />
    );
    expect(container.innerHTML).toContain(testProps.caption);
  });

  test('renders credit as a link if creditHref is passed in', () => {
    const { getByText } = render(<Figure {...testProps} />);
    const node = getByText(testProps.credit);
    expect(node.tagName).toBe('A');
    expect(node.innerHTML).toBe(testProps.credit);
    expect(node.getAttribute('href')).toBe(testProps.creditHref);
  });

  test('renders credit without a link if creditHref is missing but credit exists', () => {
    const { getByText } = render(
      <Figure image={testProps.image} credit={testProps.credit} />
    );
    const node = getByText(testProps.credit);
    expect(node.tagName).not.toBe('A');
    expect(node.innerHTML).toBe(testProps.credit);
  });
});
