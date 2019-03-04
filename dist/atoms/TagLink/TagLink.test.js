import React from 'react';
import { render, cleanup } from 'react-testing-library';
import TagLink from './TagLink';
import 'jest-prop-type-error';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Taglink tests', () => {
  test('TagLink props value matches as expected', () => {
    // Arrange
    const tag = {
      href: '/the/url/path',
      title: 'this is a title'
    };
    // Act
    const { getByText } = render(
      <TagLink title={tag.title} href={tag.href} tag={tag} />
    );
    const TagLinkNode = getByText('this is a title');
    // Assert
    expect(TagLinkNode.getAttribute('href')).toBe('/the/url/path');
    expect(TagLinkNode.innerHTML).toBe('this is a title');
  });

  test('Throws an error when a isRequired value is missing', () => {
    expect(() => {
      render(<TagLink />);
    }).toThrow();
  });
});
