import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import Header from '../Header';
import Link from 'next/link';
import 'regenerator-runtime';

// automatically unmount and cleanup DOM and mocks after the test is finished
afterEach(cleanup);

describe('Header', () => {
  test('nav button toggles menu', async () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    // const menu = getByTestId('header');

    fireEvent.click(button);
    let tempMenu1 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu1.classList.contains('is-open')).toBe(true);
    expect(tempMenu1.classList.contains('is-closed')).toBe(false);

    fireEvent.click(button);
    let tempMenu2 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu2.classList.contains('is-open')).toBe(false);
    expect(tempMenu2.classList.contains('is-closed')).toBe(true);
  });

  test('nav bg click closes menu', async () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    // const menu = getByTestId('header');
    const bg = getByTestId('header-closenav');

    fireEvent.click(bg);
    let tempMenu1 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu1.classList.contains('is-open')).toBe(false);
    expect(tempMenu1.classList.contains('is-closed')).toBe(true);

    fireEvent.click(button);
    let tempMenu2 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu2.classList.contains('is-open')).toBe(true);
    expect(tempMenu2.classList.contains('is-closed')).toBe(false);

    fireEvent.click(bg);
    let tempMenu3 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu3.classList.contains('is-open')).toBe(false);
    expect(tempMenu3.classList.contains('is-closed')).toBe(true);
  });

  test('logo click closes menu', async () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');
    // const menu = getByTestId('header');
    const logo = getByTestId('header-closenav');

    fireEvent.click(logo);
    let tempMenu1 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu1.classList.contains('is-open')).toBe(false);
    expect(tempMenu1.classList.contains('is-closed')).toBe(true);

    fireEvent.click(button);
    let tempMenu2 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu2.classList.contains('is-open')).toBe(true);
    expect(tempMenu2.classList.contains('is-closed')).toBe(false);

    fireEvent.click(logo);
    let tempMenu3 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu3.classList.contains('is-open')).toBe(false);
    expect(tempMenu3.classList.contains('is-closed')).toBe(true);
  });

  test('nav item click closes menu', async () => {
    const { getByText, getByTestId } = render(<Header Link={Link} />);
    const button = getByText('Menu');

    fireEvent.click(button);
    let tempMenu2 = await waitForElement(() => getByTestId('header'));
    expect(tempMenu2.classList.contains('is-open')).toBe(true);
    expect(tempMenu2.classList.contains('is-closed')).toBe(false);
  });
});
