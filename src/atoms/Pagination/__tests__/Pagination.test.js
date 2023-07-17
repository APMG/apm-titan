import React from 'react';
import { render, cleanup } from '@testing-library/react';
import data from '../__testdata__/pagination.json';
import Pagination from '../Pagination';

afterEach(cleanup);

jest.mock('next/router', () => {
  return {
    ...jest.requireActual('next/router'),
    useRouter: jest.fn()
  };
});

const setup = () => {
  const small = {
    hasFirstAndLast: false,
    buffer: 0,
    hrefPrefix: 'episode?slug=episodes',
    asPrefix: 'episodes',
    currentPage: data.episodesList.results.currentPage,
    totalPages: data.episodesList.results.totalPages
  };

  const medium = {
    hasFirstAndLast: false,
    buffer: 1,
    hrefPrefix: 'episode?slug=episodes',
    asPrefix: 'episodes',
    currentPage: data.episodesList.results.currentPage,
    totalPages: data.episodesList.results.totalPages
  };

  const large = {
    hasFirstAndLast: true,
    buffer: 2,
    hrefPrefix: 'episode?slug=episodes',
    asPrefix: 'episodes',
    currentPage: data.episodesList.results.currentPage,
    totalPages: data.episodesList.results.totalPages
  };

  return {
    small,
    medium,
    large
  };
};

describe('Small Pagination', () => {
  it('renders first page with correct links', () => {
    const { small } = setup();
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={small.hasFirstAndLast}
        buffer={small.buffer}
        hrefPrefix={small.hrefPrefix}
        asPrefix={small.asPrefix}
        currentPage={small.currentPage}
        resourceType={small.resourceType}
        totalPages={small.totalPages}
      />
    );

    expect(container.querySelectorAll('.pagination_link')).toHaveLength(2);
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
  });

  it('renders fourth page with correct links', () => {
    const { small } = setup();
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={small.hasFirstAndLast}
        buffer={small.buffer}
        hrefPrefix={small.hrefPrefix}
        asPrefix={small.asPrefix}
        resourceType={small.resourceType}
        currentPage={4}
        totalPages={small.totalPages}
      />
    );

    expect(container.querySelectorAll('.pagination_link')).toHaveLength(3);
    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
  });
});

describe('Medium Pagination', () => {
  it('renders first page with correct links', () => {
    const { medium } = setup();
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={medium.hasFirstAndLast}
        buffer={medium.buffer}
        hrefPrefix={medium.hrefPrefix}
        asPrefix={medium.asPrefix}
        currentPage={medium.currentPage}
        resourceType={medium.resourceType}
        totalPages={medium.totalPages}
      />
    );

    expect(container.querySelectorAll('.pagination_link')).toHaveLength(3);
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
  });

  it('renders fourth page with correct links', () => {
    const { medium } = setup();
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={medium.hasFirstAndLast}
        buffer={medium.buffer}
        hrefPrefix={medium.hrefPrefix}
        asPrefix={medium.asPrefix}
        resourceType={medium.resourceType}
        currentPage={4}
        totalPages={medium.totalPages}
      />
    );

    expect(container.querySelectorAll('.pagination_link')).toHaveLength(5);
    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
  });
});

describe('Large Pagination', () => {
  it('renders first page with correct links', () => {
    const { large } = setup();
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={large.hasFirstAndLast}
        buffer={large.buffer}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        currentPage={large.currentPage}
        resourceType={large.resourceType}
        totalPages={large.totalPages}
      />
    );

    expect(container.querySelectorAll('.pagination_link')).toHaveLength(5);
    expect(getByText('1').href).toBe('http://localhost/episodes/1');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('〉').href).toBe('http://localhost/episodes/2');
    expect(getByText('》').href).toBe('http://localhost/episodes/8');
  });

  it('renders fourth page with correct links', () => {
    const { large } = setup();
    const { container, getByText } = render(
      <Pagination
        hasFirstAndLast={large.hasFirstAndLast}
        buffer={large.buffer}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={4}
        totalPages={large.totalPages}
      />
    );

    expect(container.querySelectorAll('.pagination_link')).toHaveLength(9);
    expect(getByText('《').href).toBe('http://localhost/episodes/1');
    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('2').href).toBe('http://localhost/episodes/2');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('6').href).toBe('http://localhost/episodes/6');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
    expect(getByText('》').href).toBe('http://localhost/episodes/8');
  });

  it('gives *-current classes to current page', () => {
    const { large } = setup();
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={large.hasFirstAndLast}
        buffer={large.buffer}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={4}
        totalPages={large.totalPages}
      />
    );

    const currentNode = getByText('4');
    const prevNode = getByText('3');
    const nextNode = getByText('5');

    expect(currentNode.className).toMatch(/-current/);
    expect(prevNode.className).not.toMatch(/-current/);
    expect(nextNode.className).not.toMatch(/-current/);
  });

  it('sets a custom css class based on `elementClass` prop', () => {
    const { large } = setup();
    const { getByTestId } = render(
      <Pagination
        elementClass="foo"
        buffer={large.buffer}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={4}
        totalPages={large.totalPages}
      />
    );
    const node = getByTestId('pagination-test');

    expect(node.classList).toContain('pagination');
    expect(node.classList).toContain('foo');
  });
});

describe('Is inclusiveFirstLast true', () => {
  it('Shows first and last button from a middle page', () => {
    const { large } = setup();
    const { getByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={4}
        totalPages={7}
        inclusiveFirstLast={true}
      />
    );

    expect(getByText('《').href).toBe('http://localhost/episodes/1');
    expect(getByText('〈').href).toBe('http://localhost/episodes/3');
    expect(getByText('3').href).toBe('http://localhost/episodes/3');
    expect(getByText('4').href).toBe('http://localhost/episodes/4');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('〉').href).toBe('http://localhost/episodes/5');
    expect(getByText('》').href).toBe('http://localhost/episodes/7');
  });

  it('does not show first button near beginning', () => {
    const { large } = setup();
    const { getByText, queryByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
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

  it('does not show last button near end', () => {
    const { large } = setup();
    const { getByText, queryByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={6}
        totalPages={7}
        inclusiveFirstLast={true}
      />
    );

    expect(getByText('《').href).toBe('http://localhost/episodes/1');
    expect(getByText('〈').href).toBe('http://localhost/episodes/5');
    expect(getByText('5').href).toBe('http://localhost/episodes/5');
    expect(getByText('6').href).toBe('http://localhost/episodes/6');
    expect(getByText('7').href).toBe('http://localhost/episodes/7');
    expect(getByText('〉').href).toBe('http://localhost/episodes/7');
    expect(queryByText('》')).toBeNull();
  });
});

describe('Is firstLastSeparator true', () => {
  it('shows separators when far enough from ends', () => {
    const { large } = setup();
    const { getAllByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={5}
        totalPages={9}
        inclusiveFirstLast={true}
        firstLastSeparator="..."
      />
    );

    expect(getAllByText('...')).toHaveLength(2);
  });

  it('does not show first separator near beginning', () => {
    const { large } = setup();
    const { getAllByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={3}
        totalPages={9}
        inclusiveFirstLast={true}
        firstLastSeparator="..."
      />
    );

    expect(getAllByText('...')).toHaveLength(1);
  });

  it('does not show last separator near end', () => {
    const { large } = setup();
    const { getAllByText } = render(
      <Pagination
        hasFirstAndLast={true}
        buffer={1}
        hrefPrefix={large.hrefPrefix}
        asPrefix={large.asPrefix}
        resourceType={large.resourceType}
        currentPage={8}
        totalPages={9}
        inclusiveFirstLast={true}
        firstLastSeparator="..."
      />
    );

    expect(getAllByText('...')).toHaveLength(1);
  });
});
