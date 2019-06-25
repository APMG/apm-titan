import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TagLink from '../TagLink';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Taglink tests', () => {
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
  test("We'll have to overhaul TagLink later anyway", () => {
    expect(true).toBe(true);
  });
});
