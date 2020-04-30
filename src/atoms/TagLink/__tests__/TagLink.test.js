import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TagLink from '../TagLink';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Set TagName and href prop', () => {
  const tag = {
    href: '/the/url/path',
    tagName: 'Live from Here'
  };

  const { getByText } = render(
    <TagLink tagName={tag.tagName} href={tag.href} />
  );
  const node = getByText('Live from Here');

  expect(node).toBeDefined();
  expect(node.innerHTML).toBe('Live from Here');
  expect(node.getAttribute('href')).toBe('/the/url/path');
});

it('Throws an error when a isRequired value is missing', () => {
  expect(() => {
    render(<TagLink />);
  }).toThrow();
});
