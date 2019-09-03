import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Link from '../Link';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

describe('Link component', () => {
  test('uses a router Link component for relative urls', () => {
    const { getByTestId } = render(<Link href="/path">Text</Link>);
    // Verify that the router Link component is rendered, not a plain <a> tag
    const node = getByTestId('relativeLink');
    expect(node).toBeDefined();
    expect(node.getAttribute('href')).toBe('/path');
  });

  test('uses a router Link component for internal absolute urls, transformed into relative path', () => {
    const { getByTestId } = render(
      <Link href={`${window.location.origin}/path`}>Text</Link>
    );
    // Verify that the router Link component is rendered, not a plain <a> tag
    const node = getByTestId('hostnameLink');
    expect(node).toBeDefined();
    expect(node.getAttribute('href')).toBe('/path');
  });

  test('uses a regular <a> tag for external urls', () => {
    const path = 'http://www.example.com/path';
    const { getByTestId } = render(<Link href={path}>Text</Link>);
    // Verify that the <a> tag is rendered, not a router <Link>
    const node = getByTestId('externalLink');
    expect(node).toBeDefined();
    expect(node.getAttribute('href')).toBe(path);
  });

  test('sets href to full url for external urls', () => {
    const path = 'http://www.example.com/path';
    const { getByText } = render(<Link href={path}>Text</Link>);
    const node = getByText('Text');

    expect(node.getAttribute('href')).toBe(path);
  });

  test('sets an `as` prop for internal links using next/link', () => {
    const path = '/path/with-slug';
    const as = 'path?slug=with/slug';
    const { getByTestId } = render(
      <Link href={path} as={as}>
        Text
      </Link>
    );
    // Verify that the router Link component is rendered, not a plain <a> tag
    const node = getByTestId('relativeLink');
    expect(node).toBeDefined();
    expect(node.getAttribute('href')).toBe(as);
  });

  test('additional props are passed in', () => {
    const { getByText } = render(
      <Link
        href="/path"
        className="link-class"
        rel="noopener noreferrer"
        target="_blank"
      >
        Text
      </Link>
    );
    const node = getByText('Text');

    expect(node.classList).toContain('link-class');
  });
});
