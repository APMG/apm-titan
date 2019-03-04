import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ContentFigure from '../ContentFigure';
import 'jest-prop-type-error';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  image: { src: 'http://example.com/img.jpg', alt: 'img alt text' }
};

describe('ContentFigure component', () => {
  test('renders Figure component if image prop exists', () => {
    const { getByAltText } = render(<ContentFigure image={testProps.image} />);
    const node = getByAltText(testProps.image.alt);
    expect(node).toBeDefined();
    expect(node.getAttribute('src')).toBe(testProps.image.src);
  });

  test('does not render Figure component if image prop is empty', () => {
    expect(() => {
      render(<ContentFigure />);
    }).toThrow();
  });
});
