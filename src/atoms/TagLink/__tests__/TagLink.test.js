import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TagLink from '../TagLink';

afterEach(cleanup);

const defaultProps = {
  href: '/the/url/path',
  tagName: 'Live from Here'
};

test('Renders a tag given a name and href', () => {
  const { getByText } = render(<TagLink {...defaultProps} />);
  const node = getByText('Live from Here');

  expect(node.textContent).toBe('Live from Here');
  expect(node.getAttribute('href')).toBe('/the/url/path');
});

it('Throws an error when a isRequired value is missing', () => {
  expect(() => {
    render(<TagLink />);
  }).toThrow();
});
