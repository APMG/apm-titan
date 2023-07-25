import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup);

const defaultProps = {
  children: 'Button Text',
  href: 'https://example.com'
};

test("Renders the button's children", () => {
  const { getByText } = render(<Button>{defaultProps.children}</Button>);
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.textContent).toBe('Button Text');
});

test('Renders a button if href is null', () => {
  const { getByText } = render(<Button>{defaultProps.children}</Button>);
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.tagName).toBe('BUTTON');
  expect(buttonNode.getAttribute('type')).toBe('button');
  expect(buttonNode.classList.contains('disabled')).toBe(false);
});

test('Uses `type="submit"` if submitForm is true', () => {
  const { getByText } = render(
    <Button submitForm={true}>{defaultProps.children}</Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.tagName).toBe('BUTTON');
  expect(buttonNode.getAttribute('type')).toBe('submit');
});

test('Renders a link with button styles instead of a button if href is given', () => {
  const { getByText } = render(
    <Button href={defaultProps.href}>{defaultProps.children}</Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.tagName).toBe('A');
  expect(buttonNode.getAttribute('href')).toBe('https://example.com');
});

test('Adds `target="_blank"` if newWindow prop is true and href is passed in', () => {
  const { getByText } = render(
    <Button href={defaultProps.href} newWindow={true}>
      {defaultProps.children}
    </Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.tagName).toBe('A');
  expect(buttonNode.getAttribute('target')).toBe('_blank');
});

test('Adds `disabled` attribute if disabled prop is true', () => {
  const { getByText } = render(
    <Button disabled={true}>{defaultProps.children}</Button>
  );

  const buttonNode = getByText(defaultProps.children);
  expect(buttonNode.getAttribute('disabled')).toBe('');
});

// This is because you can't disable a link like you can a button
test('Renders `<span>` tag if href prop is given AND `disabled = true`', () => {
  const { getByText } = render(
    <Button href={defaultProps.href} disabled={true}>
      {defaultProps.children}
    </Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.tagName).toBe('SPAN');
  expect(buttonNode.classList).toContain('disabled');
});

test('does not include `disabled` attribute if `disabled` prop is missing', () => {
  const { getByText } = render(<Button>{defaultProps.children}</Button>);
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.getAttribute('disabled')).toBe(null);
  expect(buttonNode.classList).not.toContain('disabled');
});

test('Does not include `disabled` attribute if `disabled` prop is false', () => {
  const { getByText } = render(
    <Button disabled={false}>{defaultProps.children}</Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.getAttribute('disabled')).toBe(null);
  expect(buttonNode.classList).not.toContain('disabled');
});

test('Sets the css classes based on both `type` and `size` props', () => {
  const { getByText } = render(
    <Button type="primary" size="large">
      {defaultProps.children}
    </Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.classList).toContain('btn');
  expect(buttonNode.classList).toContain('btn-primary');
  expect(buttonNode.classList).toContain('btn-large');
});

test('Sets the custom css class based on `elementClass` prop', () => {
  const { getByText } = render(
    <Button elementClass="foo">{defaultProps.children}</Button>
  );
  const buttonNode = getByText(defaultProps.children);

  expect(buttonNode.classList).toContain('btn');
  expect(buttonNode.classList).toContain('foo');
});
