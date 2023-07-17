import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Link from '../Link';

afterEach(cleanup);
jest.mock('next/router', () => {
  return {
    ...jest.requireActual('next/router'),
    useRouter: jest.fn()
  };
});

const defaultProps = () => {
  return {
    href: '/story/[...slug]',
    as: '/story/with/slug'
  };
};

test('Uses a router Link component for relative urls', () => {
  const props = defaultProps();
  render(
    <Link href={props.href} as={props.as}>
      Text
    </Link>
  );
  const linkNode = screen.getByTestId('relativeLink');

  expect(linkNode.getAttribute('href')).toBe('/story/with/slug');
});

test('Uses a regular <a> tag for external urls with full path', () => {
  const props = defaultProps();
  props.href = 'http://www.example.com/path';
  const { getByTestId } = render(<Link href={props.href}>Text</Link>);
  const linkNode = getByTestId('externalLink');

  expect(linkNode.getAttribute('href')).toBe('http://www.example.com/path');
});

test('Sets an `as` prop for internal links using next/link', () => {
  const props = defaultProps();
  const { getByTestId } = render(<Link {...props}>Text</Link>);

  const linkNode = getByTestId('relativeLink');
  expect(linkNode.getAttribute('href')).toBe('/story/with/slug');
});

test('Other standard link attributes are applied to this link object normally', () => {
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
  const linkNode = getByText('Text');

  expect(linkNode.classList).toContain('link-class');
  expect(linkNode.getAttribute('rel')).toBe('noopener noreferrer');
  expect(linkNode.getAttribute('target')).toBe('_blank');
});
