import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../Button';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  children: 'Button Text',
  href: 'https://example.com'
};

test('renders children', () => {
  const { getByText } = render(<Button>{testProps.children}</Button>);
  expect(getByText(testProps.children)).toBeDefined();
});

test('throws an error when component has no children', () => {
  expect(() => {
    render(<Button />);
  }).toThrow();
});

test('renders <a> tag if href passed in', () => {
  const { getByText } = render(
    <Button href={testProps.href}>{testProps.children}</Button>
  );
  const node = getByText(testProps.children);
  expect(node.tagName).toBe('A');
});

test('adds target="_blank" if newWindow prop is true and href is passed in', () => {
  const { getByText } = render(
    <Button href={testProps.href} newWindow={true}>
      {testProps.children}
    </Button>
  );
  const node = getByText(testProps.children);
  expect(node.tagName).toBe('A');
  expect(node.getAttribute('target')).toBe('_blank');
});

test('renders <button type="button"> tag if href is null', () => {
  const { getByText } = render(<Button>{testProps.children}</Button>);
  const node = getByText(testProps.children);
  expect(node.tagName).toBe('BUTTON');
  expect(node.getAttribute('type')).toBe('button');
  expect(node.classList.contains('disabled')).toBe(false);
});

test('uses type="submit" if submitForm is true', () => {
  const { getByText } = render(
    <Button submitForm={true}>{testProps.children}</Button>
  );
  const node = getByText(testProps.children);
  expect(node.tagName).toBe('BUTTON');
  expect(node.getAttribute('type')).toBe('submit');
});

test('renders <span> tag if both href is passed in and disabled=true', () => {
  const { getByText } = render(
    <Button href={testProps.href} disabled={true}>
      {testProps.children}
    </Button>
  );
  const node = getByText(testProps.children);
  expect(node.tagName).toBe('SPAN');
  expect(node.classList.contains('disabled')).toBe(true);
});

test('adds `disabled` attribute if `disabled` prop is true', () => {
  const { getByText } = render(
    <Button disabled={true}>{testProps.children}</Button>
  );
  const node = getByText(testProps.children);
  expect(node.getAttribute('disabled')).toBe('');
});

test('does not include `disabled` attribute if `disabled` prop is missing', () => {
  const { getByText } = render(<Button>{testProps.children}</Button>);
  const node = getByText(testProps.children);
  expect(node.getAttribute('disabled')).toBe(null);
  expect(node.classList.contains('disabled')).toBe(false);
});

test('does not include `disabled` attribute if `disabled` prop is false', () => {
  const { getByText } = render(
    <Button disabled={false}>{testProps.children}</Button>
  );
  const node = getByText(testProps.children);
  expect(node.getAttribute('disabled')).toBe(null);
  expect(node.classList.contains('disabled')).toBe(false);
});

test('sets the css classes based on both `type` and `size` props', () => {
  const { getByText } = render(
    <Button type="primary" size="large">
      {testProps.children}
    </Button>
  );
  const node = getByText(testProps.children);
  expect(node.classList.contains('btn')).toBe(true);
  expect(node.classList.contains('btn-primary')).toBe(true);
  expect(node.classList.contains('btn-large')).toBe(true);
});

test('sets the custom css class based on `elementClass` prop', () => {
  const { getByText } = render(
    <Button elementClass="foo">{testProps.children}</Button>
  );
  const node = getByText(testProps.children);
  expect(node.classList.contains('btn')).toBe(true);
  expect(node.classList.contains('foo')).toBe(true);
});