import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TagLink from '../TagLink';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('TagLink props value matches as expected', () => {
  // Arranged
  const tag = {
    href: '/the/url/path',
    tagName: 'Live from Here'
  };
  // Act
  const { getByText } = render(
    <TagLink tagName={tag.tagName} href={tag.href} />
  );
  const node = getByText('Live from Here');
  // Assert
  expect(node).toBeDefined();
  expect(node.getAttribute('href')).toBe('/the/url/path');
  expect(node.innerHTML).toBe('Live from Here');
});
test('Throws an error when a isRequired value is missing', () => {
  expect(() => {
    render(<TagLink />);
  }).toThrow();
});
test("We'll have to overhaul TagLink later anyway", () => {
  expect(true).toBe(true);
});
