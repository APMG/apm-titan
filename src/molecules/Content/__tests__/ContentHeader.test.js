import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContentHeader from '../ContentHeader';

afterEach(cleanup);

const defaultProps = {
  title: 'title',
  authors: [
    { name: 'Jim', href: '/bio/jim' },
    { name: 'Bill', href: '/bio/bill' }
  ],
  tag: { href: '/taglink', tagName: 'tag' }
};

// TODO: re-revisit these
test('Renders an contributors section given title and headlingLevel props', () => {
  const { getByText } = render(
    <ContentHeader title={'another title'} headingLevel={3} />
  );
  const headerNode = getByText('another title');

  expect(headerNode.classList).toContain('hdg');
  expect(headerNode.classList).toContain('hdg-3');
  expect(headerNode.classList).not.toContain('hdg-1');
  expect(headerNode.textContent).toBe('another title');
});

test('Renders byline with correct links', () => {
  const { getByText } = render(
    <ContentHeader title={'this is a title'} authors={defaultProps.authors} />
  );
  const firstAuthorNode = getByText(defaultProps.authors[0].name);
  const secondAuthorNode = getByText(defaultProps.authors[1].name);

  expect(firstAuthorNode.getAttribute('href')).toEqual('/bio/jim');
  expect(secondAuthorNode.getAttribute('href')).toEqual('/bio/bill');
});

test('Renders correct byline sentence and link for 1 author', () => {
  defaultProps.authors = defaultProps.authors.slice(0);
  const { getByText } = render(
    <ContentHeader title={'this is a title'} authors={defaultProps.authors} />
  );
  const authorNode = getByText(defaultProps.authors[0].name);

  expect(authorNode.textContent).toEqual('Jim');
  expect(authorNode.getAttribute('href')).toBe('/bio/jim');
});

test('Renders correct byline sentence and link for 2 authors', () => {
  const { getByText, getByTestId } = render(
    <ContentHeader title={'this is a title'} authors={defaultProps.authors} />
  );
  const node = getByTestId('contentByline');
  const firstAuthorNode = getByText(defaultProps.authors[0].name);
  const secondAuthorNode = getByText(defaultProps.authors[1].name);

  expect(firstAuthorNode.textContent).toBe('Jim');
  expect(firstAuthorNode.getAttribute('href')).toBe('/bio/jim');
  expect(secondAuthorNode.textContent).toBe('Bill');
  expect(secondAuthorNode.getAttribute('href')).toBe('/bio/bill');
  expect(node.textContent).toBe('By Jim and Bill');
});

test('Renders correct byline sentence and link for 3 or more authors', () => {
  defaultProps.authors = [
    { name: 'Kyle', href: '/bio/kyle' },
    { name: 'Kenny', href: '/bio/kenny' },
    { name: 'Stan', href: '/bio/stan' },
    { name: 'Cartman', href: '/bio/cartman' }
  ];
  const { getByText, getByTestId } = render(
    <ContentHeader title={defaultProps.title} authors={defaultProps.authors} />
  );
  const bylineNode = getByTestId('contentByline');
  const firstAuthorNode = getByText(defaultProps.authors[0].name);
  const secondAuthorNode = getByText(defaultProps.authors[1].name);
  const thirdAuthorNode = getByText(defaultProps.authors[2].name);
  const fourthAuthorNode = getByText(defaultProps.authors[3].name);

  expect(firstAuthorNode.textContent).toBe('Kyle');
  expect(firstAuthorNode.getAttribute('href')).toBe('/bio/kyle');
  expect(secondAuthorNode.textContent).toBe('Kenny');
  expect(secondAuthorNode.getAttribute('href')).toBe('/bio/kenny');
  expect(thirdAuthorNode.textContent).toBe('Stan');
  expect(thirdAuthorNode.getAttribute('href')).toBe('/bio/stan');
  expect(fourthAuthorNode.textContent).toBe('Cartman');
  expect(fourthAuthorNode.getAttribute('href')).toBe('/bio/cartman');
  expect(bylineNode.textContent).toBe('By Kyle, Kenny, Stan and Cartman');
});

test('Renders publish date if publishDate prop is given', () => {
  const { getByText } = render(
    <ContentHeader
      title={defaultProps.title}
      publishDate={'January 12, 2018'}
    />
  );
  const dateNode = getByText('January 12, 2018');

  expect(dateNode).toBeDefined();
});

test('Renders the Heading component with appropriate heading level', () => {
  const { getByText } = render(
    <ContentHeader title={'this is a title'} headingLevel={3} />
  );
  const titleNode = getByText('this is a title');

  expect(titleNode.tagName).toBe('H3');
  expect(titleNode.textContent).toBe('this is a title');
});

test('Renders the Heading component as an H1 if headingLevel is not specified', () => {
  const { getByText } = render(<ContentHeader title={'this is a title'} />);
  const titleNode = getByText('this is a title');

  expect(titleNode.tagName).toBe('H1');
  expect(titleNode.textContent).toBe('this is a title');
});

test('Renders the subtitle if subtitle prop is given', () => {
  const { getByText } = render(
    <ContentHeader title={'this is a title'} subtitle={'this is a subtitle'} />
  );
  const subtitleNode = getByText('this is a subtitle');

  expect(subtitleNode.textContent).toBe('this is a subtitle');
});

test('Renders tag if tag prop is given', () => {
  const { getByText } = render(
    <ContentHeader title={'this is a title'} tag={defaultProps.tag} />
  );
  const tagNode = getByText(defaultProps.tag.tagName);

  expect(tagNode.getAttribute('href')).toBe('/taglink');
  expect(tagNode.textContent).toBe('tag');
});

test('The optional sections authors and subtitle are not rendered when their corresponding prop is not given', () => {
  const { container } = render(<ContentHeader title={'another title'} />);
  const authorNodes = container.querySelectorAll('.content_byline');
  const subtitleNodes = container.querySelectorAll('.content_subtitle');

  expect(authorNodes).toHaveLength(0);
  expect(subtitleNodes).toHaveLength(0);
});
