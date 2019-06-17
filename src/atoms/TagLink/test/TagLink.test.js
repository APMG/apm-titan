import React from 'react';
import { render, cleanup } from 'react-testing-library';
import TagLink from '../TagLink';
import Link from 'next/link';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Taglink tests', () => {
  test('TagLink props value matches as expected', () => {
    // Arranged
    const tag = {
      to: '/the/url/path',
      tagName: 'Live from Here'
    };
    // Act
    const { getByText } = render(
      <TagLink Link={Link} tagName={tag.tagName} href={tag.to} />
    );
    const TagLinkNode = getByText('Live from Here');
    // Assert
    expect(TagLinkNode.getAttribute('href')).toBe('/the/url/path');
    expect(TagLinkNode.innerHTML).toBe('Live from Here');
  });

  test('Throws an error when a isRequired value is missing', () => {
    expect(() => {
      render(<TagLink />);
    }).toThrow();
  });
});
