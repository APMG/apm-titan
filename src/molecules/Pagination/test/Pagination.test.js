import React from 'react';
import { render, cleanup } from 'react-testing-library';
import last from './data/last.json';
import Pagination from '../Pagination';

afterEach(cleanup);

const expected = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page">
        <a class="pagination_page_link active" data-testid="relativeLink" href="/listen/1">1</a>
      </li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/2">2</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/3">3</a></li>
      <li class="pagination_page next"><a class="pagination_page_link" rel="next" data-testid="relativeLink" href="/listen/2">Next ›</a></li>
      <li class="pagination_page last"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">Last »</a></li>
    </ul>
  </nav>`;
let { page, next_page, previous_page } = last;

const { total, count, page_size, total_pages } = last;

it('Renders a paginator when we are on page 1 of 7', () => {
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});

const expected2 = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page first"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">« First</a></li>
      <li class="pagination_page prev"><a class="pagination_page_link" rel="prev" data-testid="relativeLink" href="/listen/1">‹ Prev</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">1</a></li>
      <li class="pagination_page"><a class="pagination_page_link active" data-testid="relativeLink" href="/listen/2">2</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/3">3</a></li>
      <li class="pagination_page next"><a class="pagination_page_link" rel="next" data-testid="relativeLink" href="/listen/3">Next ›</a></li>
      <li class="pagination_page last"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">Last »</a></li>
    </ul>
  </nav>
  `;

it('Renders a paginator when we are on page 2 of 7', () => {
  page = 2;
  previous_page = 1;
  next_page = 3;
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected2.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});

const expected3 = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page first"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">« First</a></li>
      <li class="pagination_page prev"><a class="pagination_page_link" rel="prev" data-testid="relativeLink" href="/listen/2">‹ Prev</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/2">2</a></li>
      <li class="pagination_page"><a class="pagination_page_link active" data-testid="relativeLink" href="/listen/3">3</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/4">4</a></li>
      <li class="pagination_page next"><a class="pagination_page_link" rel="next" data-testid="relativeLink" href="/listen/4">Next ›</a></li>
      <li class="pagination_page last"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">Last »</a></li>
    </ul>
  </nav>
  `;

it('Renders a paginator when we are on page 3 of 7', () => {
  page = 3;
  previous_page = 2;
  next_page = 4;
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected3.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});

const expected4 = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page first"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">« First</a></li>
      <li class="pagination_page prev"><a class="pagination_page_link" rel="prev" data-testid="relativeLink" href="/listen/3">‹ Prev</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/3">3</a></li>
      <li class="pagination_page"><a class="pagination_page_link active" data-testid="relativeLink" href="/listen/4">4</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/5">5</a></li>
      <li class="pagination_page next"><a class="pagination_page_link" rel="next" data-testid="relativeLink" href="/listen/5">Next ›</a></li>
      <li class="pagination_page last"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">Last »</a></li>
    </ul>
  </nav>
  `;

it('Renders a paginator when we are on page 4 of 7', () => {
  page = 4;
  previous_page = 3;
  next_page = 5;
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected4.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});

const expected5 = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page first"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">« First</a></li>
      <li class="pagination_page prev"><a class="pagination_page_link" rel="prev" data-testid="relativeLink" href="/listen/4">‹ Prev</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/4">4</a></li>
      <li class="pagination_page"><a class="pagination_page_link active" data-testid="relativeLink" href="/listen/5">5</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/6">6</a></li>
      <li class="pagination_page next"><a class="pagination_page_link" rel="next" data-testid="relativeLink" href="/listen/6">Next ›</a></li>
      <li class="pagination_page last"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">Last »</a></li>
    </ul>
  </nav>
  `;

it('Renders a paginator when we are on page 5 of 7', () => {
  page = 5;
  previous_page = 4;
  next_page = 6;
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected5.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});

const expected6 = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page first"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">« First</a></li>
      <li class="pagination_page prev"><a class="pagination_page_link" rel="prev" data-testid="relativeLink" href="/listen/5">‹ Prev</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/5">5</a></li>
      <li class="pagination_page"><a class="pagination_page_link active" data-testid="relativeLink" href="/listen/6">6</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">7</a></li>
      <li class="pagination_page next"><a class="pagination_page_link" rel="next" data-testid="relativeLink" href="/listen/7">Next ›</a></li>
      <li class="pagination_page last"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/7">Last »</a></li>
    </ul>
  </nav>
  `;

it('Renders a paginator when we are on page 6 of 7', () => {
  page = 6;
  previous_page = 5;
  next_page = 7;
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected6.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});

const expected7 = `
  <nav class="pagination">
    <ul class="pagination_list">
      <li class="pagination_page first"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/1">« First</a></li>
      <li class="pagination_page prev"><a class="pagination_page_link" rel="prev" data-testid="relativeLink" href="/listen/6">‹ Prev</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/5">5</a></li>
      <li class="pagination_page"><a class="pagination_page_link" data-testid="relativeLink" href="/listen/6">6</a></li>
      <li class="pagination_page"><a class="pagination_page_link active" data-testid="relativeLink" href="/listen/7">7</a></li>
    </ul>
  </nav>`;

it('Renders a paginator when we are on page 7 of 7', () => {
  page = 7;
  previous_page = 6;
  next_page = null;
  const { container } = render(
    <Pagination
      total={total}
      count={count}
      page_size={page_size}
      total_pages={total_pages}
      page={page}
      next_page={next_page}
      previous_page={previous_page}
      link_prefix="listen"
      links_to_show={3}
    />
  );
  expect(container.innerHTML).toEqual(
    expected7.replace(/\s{2,}/g, '').replace(/>\s</, '><')
  );
});
