import React from 'react';
import { render, cleanup } from '@testing-library/react';
import data from '../../../testdata/pagination.json';
import Pagination from '../Pagination';

afterEach(cleanup);

const testPropsSmall = {
  hasFirstAndLast: false,
  linksToShow: 1,
  slug: 'episodes',
  resourceType: 'episode',
  currentPage: data.episodesList.results.currentPage,
  totalPages: data.episodesList.results.totalPages
};

const testPropsMedium = {
  hasFirstAndLast: false,
  linksToShow: 3,
  slug: 'episodes',
  resourceType: 'episode',
  currentPage: data.episodesList.results.currentPage,
  totalPages: data.episodesList.results.totalPages
};

const testPropsLarge = {
  hasFirstAndLast: true,
  linksToShow: 5,
  slug: 'episodes',
  resourceType: 'episode',
  currentPage: data.episodesList.results.currentPage,
  totalPages: data.episodesList.results.totalPages
};

describe('Small Pagination', () => {
  test('renders', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        slug={testPropsSmall.slug}
        currentPage={testPropsSmall.currentPage}
        resourceType={testPropsSmall.resourceType}
        totalPages={testPropsSmall.totalPages}
      />
    );

    expect(container.getElementsByClassName('pagination_link').length).toBe(2);
    expect(getByText('1').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
  });

  test('links correctly', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        slug={testPropsSmall.slug}
        currentPage={testPropsSmall.currentPage}
        resourceType={testPropsSmall.resourceType}
        totalPages={testPropsSmall.totalPages}
      />
    );

    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
  });

  test('renders with current page 4', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsSmall.hasFirstAndLast}
        linksToShow={testPropsSmall.linksToShow}
        slug={testPropsSmall.slug}
        resourceType={testPropsSmall.resourceType}
        currentPage={4}
        totalPages={testPropsSmall.totalPages}
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
        slug={testPropsSmall.slug}
        resourceType={testPropsSmall.resourceType}
        currentPage={4}
        totalPages={testPropsSmall.totalPages}
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
        slug={testPropsMedium.slug}
        currentPage={testPropsMedium.currentPage}
        resourceType={testPropsMedium.resourceType}
        totalPages={testPropsMedium.totalPages}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(3);
    expect(getByText('1').tagName).toBe('A');
    expect(getByText('2').tagName).toBe('A');
    expect(getByText('〉').tagName).toBe('A');
  });

  test('links correctly', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsMedium.hasFirstAndLast}
        linksToShow={testPropsMedium.linksToShow}
        slug={testPropsMedium.slug}
        currentPage={testPropsMedium.currentPage}
        resourceType={testPropsMedium.resourceType}
        totalPages={testPropsMedium.totalPages}
      />
    );

    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
  });

  test('renders with current page 4', () => {
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsMedium.hasFirstAndLast}
        linksToShow={testPropsMedium.linksToShow}
        slug={testPropsMedium.slug}
        resourceType={testPropsMedium.resourceType}
        currentPage={4}
        totalPages={testPropsMedium.totalPages}
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
        slug={testPropsMedium.slug}
        resourceType={testPropsMedium.resourceType}
        currentPage={4}
        totalPages={testPropsMedium.totalPages}
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
        slug={testPropsLarge.slug}
        currentPage={testPropsLarge.currentPage}
        resourceType={testPropsLarge.resourceType}
        totalPages={testPropsLarge.totalPages}
      />
    );

    expect(container.getElementsByClassName('pagination_page').length).toBe(5);
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
        slug={testPropsLarge.slug}
        currentPage={testPropsLarge.currentPage}
        resourceType={testPropsLarge.resourceType}
        totalPages={testPropsLarge.totalPages}
      />
    );

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
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={4}
        totalPages={testPropsLarge.totalPages}
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
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={4}
        totalPages={testPropsLarge.totalPages}
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

  test('sets the custom css class based on `elementClass` prop', async () => {
    const { getByTestId } = render(
      <Pagination
        elementClass="foo"
        linksToShow={testPropsLarge.linksToShow}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={4}
        totalPages={testPropsLarge.totalPages}
      />
    );
    const node = getByTestId('pagination-test');
    expect(node.classList.contains('pagination')).toBe(true);
    expect(node.classList.contains('foo')).toBe(true);
  });
});
