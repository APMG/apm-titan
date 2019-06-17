import React from 'react';
import { render, cleanup } from 'react-testing-library';
import data from './data/data.json';
import Pagination from '../Pagination';
import Link from 'next/link';

afterEach(cleanup);

const testPropsSmall = {
  hasFirstAndLast: false,
  linksToShow: 1,
  linkPrefix: 'episodes',
  currentPage: data.episodesList.results.currentPage,
  elementsPerPage: data.episodesList.results.items.length,
  totalElements: data.episodesList.results.totalItems
};

const testPropsMedium = {
  hasFirstAndLast: false,
  linksToShow: 3,
  linkPrefix: 'episodes',
  currentPage: data.episodesList.results.currentPage,
  elementsPerPage: data.episodesList.results.items.length,
  totalElements: data.episodesList.results.totalItems
};

const testPropsLarge = {
  hasFirstAndLast: true,
  linksToShow: 5,
  linkPrefix: 'episodes',
  currentPage: data.episodesList.results.currentPage,
  elementsPerPage: data.episodesList.results.items.length,
  totalElements: data.episodesList.results.totalItems
};

describe('Small Pagination', () => {
  test('renders', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        linkPrefix={testPropsSmall.linkPrefix}
        currentPage={testPropsSmall.currentPage}
        elementsPerPage={testPropsSmall.elementsPerPage}
        totalElements={testPropsSmall.totalElements}
        Link={Link}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(3);
    expect(getByText('〈').tagName).toBe('A');
    expect(getByText('1').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
  });

  test('links correctly', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        linkPrefix={testPropsSmall.linkPrefix}
        currentPage={testPropsSmall.currentPage}
        elementsPerPage={testPropsSmall.elementsPerPage}
        totalElements={testPropsSmall.totalElements}
        Link={Link}
      />
    );

    expect(getByText('〈').href).toBe('http://localhost/episodes/1');
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
  });

  test('renders with current page 4', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        linkPrefix={testPropsSmall.linkPrefix}
        currentPage={4}
        elementsPerPage={testPropsSmall.elementsPerPage}
        totalElements={testPropsSmall.totalElements}
        Link={Link}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(3);
    expect(getByText('〈').tagName).toBe('A');
    expect(getByText('4').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
  });

  test('links correctly from current page 4', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        linkPrefix={testPropsSmall.linkPrefix}
        currentPage={4}
        elementsPerPage={testPropsSmall.elementsPerPage}
        totalElements={testPropsSmall.totalElements}
        Link={Link}
      />
    );

    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
  });
});

describe('Medium Pagination', () => {
  test('renders', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsMedium.hasFirstAndLast}
        linksToShow={testPropsMedium.linksToShow}
        linkPrefix={testPropsMedium.linkPrefix}
        currentPage={testPropsMedium.currentPage}
        elementsPerPage={testPropsMedium.elementsPerPage}
        totalElements={testPropsMedium.totalElements}
        Link={Link}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(4);
    expect(getByText('〈').tagName).toBe('A');
    expect(getByText('1').tagName).toBe('A');
    expect(getByText('2').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
  });

  test('links correctly', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsMedium.hasFirstAndLast}
        linksToShow={testPropsMedium.linksToShow}
        linkPrefix={testPropsMedium.linkPrefix}
        currentPage={testPropsMedium.currentPage}
        elementsPerPage={testPropsMedium.elementsPerPage}
        totalElements={testPropsMedium.totalElements}
        Link={Link}
      />
    );

    expect(getByText('〈').href).toBe('http://localhost/episodes/1');
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
  });

  test('renders with current page 4', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsMedium.hasFirstAndLast}
        linksToShow={testPropsMedium.linksToShow}
        linkPrefix={testPropsMedium.linkPrefix}
        currentPage={4}
        elementsPerPage={testPropsMedium.elementsPerPage}
        totalElements={testPropsMedium.totalElements}
        Link={Link}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(5);
    expect(getByText('〈').tagName).toBe('A');
    expect(getByText('3').tagName).toBe('A');
    expect(getByText('4').tagName).toBe('A');
    expect(getByText('5').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
  });

  test('links correctly from current page 4', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsMedium.hasFirstAndLast}
        linksToShow={testPropsMedium.linksToShow}
        linkPrefix={testPropsMedium.linkPrefix}
        currentPage={4}
        elementsPerPage={testPropsMedium.elementsPerPage}
        totalElements={testPropsMedium.totalElements}
        Link={Link}
      />
    );

    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
  });
});

describe('Large Pagination', () => {
  test('renders', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsLarge.hasFirstAndLast}
        linksToShow={testPropsLarge.linksToShow}
        linkPrefix={testPropsLarge.linkPrefix}
        currentPage={testPropsLarge.currentPage}
        elementsPerPage={testPropsLarge.elementsPerPage}
        totalElements={testPropsLarge.totalElements}
        Link={Link}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(7);
    expect(getByText('《').tagName).toBe('A');
    expect(getByText('〈').tagName).toBe('A');
    expect(getByText('1').tagName).toBe('A');
    expect(getByText('2').tagName).toBe('A');
    expect(getByText('3').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
    expect(getByText('》').tagName).toBe('A');
  });

  test('links correctly', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsLarge.hasFirstAndLast}
        linksToShow={testPropsLarge.linksToShow}
        linkPrefix={testPropsLarge.linkPrefix}
        currentPage={testPropsLarge.currentPage}
        elementsPerPage={testPropsLarge.elementsPerPage}
        totalElements={testPropsLarge.totalElements}
        Link={Link}
      />
    );

    expect(getByText('《').href).toBe('http://localhost/episodes');
    expect(getByText('〈').href).toBe('http://localhost/episodes/1');
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
    expect(getByText('》').href).toBe('http://localhost/episodes/8');
  });

  test('renders with current page 4', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsLarge.hasFirstAndLast}
        linksToShow={testPropsLarge.linksToShow}
        linkPrefix={testPropsLarge.linkPrefix}
        currentPage={4}
        elementsPerPage={testPropsLarge.elementsPerPage}
        totalElements={testPropsLarge.totalElements}
        Link={Link}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(9);
    expect(getByText('《').tagName).toBe('A');
    expect(getByText('〈').tagName).toBe('A');
    expect(getByText('2').tagName).toBe('A');
    expect(getByText('3').tagName).toBe('A');
    expect(getByText('4').tagName).toBe('A');
    expect(getByText('5').tagName).toBe('A');
    expect(getByText('6').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
    expect(getByText('》').tagName).toBe('A');
  });

  test('links correctly from current page 4', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsLarge.hasFirstAndLast}
        linksToShow={testPropsLarge.linksToShow}
        linkPrefix={testPropsLarge.linkPrefix}
        currentPage={4}
        elementsPerPage={testPropsLarge.elementsPerPage}
        totalElements={testPropsLarge.totalElements}
        Link={Link}
      />
    );

    expect(getByText('《').href).toBe('http://localhost/episodes');
    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('6').href).toBe('http://localhost/episodes/6');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
    expect(getByText('》').href).toBe('http://localhost/episodes/8');
  });
});
