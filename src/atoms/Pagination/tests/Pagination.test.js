import React from 'react';
import { render, cleanup } from '@testing-library/react';
import data from '../../../testdata/pagination.json';
import Pagination from '../Pagination';

afterEach(cleanup);

const testPropsSmall = {
  hasFirstAndLast: false,
  buffer: 0,
  slug: 'episodes',
  resourceType: 'episode',
  currentPage: data.episodesList.results.currentPage,
  totalPages: data.episodesList.results.totalPages
};

const testPropsMedium = {
  hasFirstAndLast: false,
  buffer: 1,
  slug: 'episodes',
  resourceType: 'episode',
  currentPage: data.episodesList.results.currentPage,
  totalPages: data.episodesList.results.totalPages
};

const testPropsLarge = {
  hasFirstAndLast: true,
  buffer: 2,
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
        buffer={testPropsSmall.buffer}
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
        buffer={testPropsSmall.buffer}
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
        buffer={testPropsSmall.buffer}
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
        buffer={testPropsSmall.buffer}
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
        buffer={testPropsMedium.buffer}
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
        buffer={testPropsMedium.buffer}
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
        buffer={testPropsMedium.buffer}
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
        buffer={testPropsMedium.buffer}
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
        buffer={testPropsLarge.buffer}
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
        buffer={testPropsLarge.buffer}
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
        buffer={testPropsLarge.buffer}
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
        buffer={testPropsLarge.buffer}
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

  test('gives *-current classes to current page', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={testPropsLarge.hasFirstAndLast}
        buffer={testPropsLarge.buffer}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={4}
        totalPages={testPropsLarge.totalPages}
      />
    );

    var currentNode = getByText('4');
    var prevNode = getByText('3');
    var nextNode = getByText('5');

    // Check classes on current item
    expect(currentNode.classList.contains('pagination_link-current')).toBe(
      true
    );
    expect(
      currentNode.parentElement.classList.contains('pagination_page-current')
    ).toBe(true);

    // Expect no "current" classes on prev or next items
    expect(prevNode.classList.contains('pagination_link-current')).toBe(false);
    expect(
      prevNode.parentElement.classList.contains('pagination_page-current')
    ).toBe(false);
    expect(nextNode.classList.contains('pagination_link-current')).toBe(false);
    expect(
      nextNode.parentElement.classList.contains('pagination_page-current')
    ).toBe(false);
  });

  test('sets the custom css class based on `elementClass` prop', async () => {
    const { getByTestId } = render(
      <Pagination
        elementClass="foo"
        buffer={testPropsLarge.buffer}
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

describe('inclusiveFirstLast prop', () => {
  test('shows first and last button from middle', () => {
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={4}
        totalPages={7}
        inclusiveFirstLast={true}
      />
    );

    expect(getByText('《').href).toBe('http://localhost/episodes');
    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
    expect(getByText('》').href).toBe('http://localhost/episodes/7');
  });

  test('does not show first button near beginning', () => {
    const { getByText, queryByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={2}
        totalPages={7}
        inclusiveFirstLast={true}
      />
    );

    expect(queryByText('《')).toBeNull();
    expect(getByText('〈').href).toBe('http://localhost/episodes/1');
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('〉').href).toBe('http://localhost/episodes/3');
    expect(getByText('》').href).toBe('http://localhost/episodes/7');
  });

  test('does not show last button near end', () => {
    const { getByText, queryByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={6}
        totalPages={7}
        inclusiveFirstLast={true}
      />
    );

    expect(getByText('《').href).toBe('http://localhost/episodes');
    expect(getByText('〈').href).toBe('http://localhost/episodes/5');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('6').href).toBe('http://localhost/episodes/6');
    expect(getByText('7').href).toBe('http://localhost/episodes/7');
    expect(getByText('〉').href).toBe('http://localhost/episodes/7');
    expect(queryByText('》')).toBeNull();
  });
});

describe('firstLastSeparator prop', () => {
  test('shows separators when far enough from ends', () => {
    const { getAllByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={5}
        totalPages={9}
        inclusiveFirstLast={true}
        firstLastSeparator="..."
      />
    );

    expect(getAllByText('...').length).toBe(2);
  });

  test('does not show first separator near beginning', () => {
    const { getAllByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={3}
        totalPages={9}
        inclusiveFirstLast={true}
        firstLastSeparator="..."
      />
    );

    expect(getAllByText('...').length).toBe(1);
  });

  test('does not show last separator near end', () => {
    const { getAllByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        slug={testPropsLarge.slug}
        resourceType={testPropsLarge.resourceType}
        currentPage={8}
        totalPages={9}
        inclusiveFirstLast={true}
        firstLastSeparator="..."
      />
    );

    expect(getAllByText('...').length).toBe(1);
  });
});
