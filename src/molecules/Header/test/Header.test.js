import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Header from '../Header';
import { navItems } from './data/navItems';
import Link from 'next/link';

// automatically unmount and cleanup DOM and mocks after the test is finished
afterEach(cleanup);

describe('Header', () => {
  test('nav button toggles menu', () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    const menu = getByTestId('header');

    fireEvent.click(button);
    expect(menu.classList.contains('is-open')).toBe(true);
    fireEvent.click(button);
    expect(menu.classList.contains('is-open')).toBe(false);
    expect(menu.classList.contains('is-closed')).toBe(true);
  });

  test('nav bg click closes menu', () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    const menu = getByTestId('header');
    const bg = getByTestId('header-closenav');

    fireEvent.click(bg);
    expect(menu.classList.contains('is-open')).toBe(false);
    fireEvent.click(button);
    expect(menu.classList.contains('is-open')).toBe(true);
    fireEvent.click(bg);
    expect(menu.classList.contains('is-open')).toBe(false);
    expect(menu.classList.contains('is-closed')).toBe(true);
  });

  test('logo click closes menu', () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    const menu = getByTestId('header');
    const logo = getByTestId('header-closenav');

    fireEvent.click(logo);
    expect(menu.classList.contains('is-open')).toBe(false);
    fireEvent.click(button);
    expect(menu.classList.contains('is-open')).toBe(true);
    fireEvent.click(logo);
    expect(menu.classList.contains('is-open')).toBe(false);
    expect(menu.classList.contains('is-closed')).toBe(true);
  });

  test('nav item click closes menu', () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    const menu = getByTestId('header');
    const navItem = getByText(navItems[0].text);

    fireEvent.click(navItem);
    expect(menu.classList.contains('is-open')).toBe(false);
    fireEvent.click(button);
    expect(menu.classList.contains('is-open')).toBe(true);
    fireEvent.click(navItem);
    expect(menu.classList.contains('is-open')).toBe(false);
    expect(menu.classList.contains('is-closed')).toBe(true);
  });
});
