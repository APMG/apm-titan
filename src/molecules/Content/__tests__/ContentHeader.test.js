import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContentHeader from '../ContentHeader';

afterEach(cleanup);

function defaultProps() {
  const title = 'this is a title';
  const authors = [
    { name: 'Jim', href: '/bio/jim' },
    { name: 'Bill', href: '/bio/bill' }
  ];
  const headingLevel = 1;
  const publishDate = 'January 12, 2018';
  const subtitle = 'this is a subtitle';
  const tag = { href: '/taglink', tagName: 'tag' };

  return {
    title,
    authors,
    headingLevel,
    publishDate,
    subtitle,
    tag
  };
}

test('Throws an error when required `title` prop is missing', () => {
  expect(() => {
    render(<ContentHeader />);
  }).toThrow();
});

test('Does not render byline if authors prop is empty', () => {
  const { title } = defaultProps();

  const { container } = render(<ContentHeader title={title} />);

  expect(container.getElementsByClassName('content_byline').length).toBe(0);
});

test('Renders byline with correct links', () => {
  const { title, authors } = defaultProps();

  const { getByText } = render(
    <ContentHeader title={title} authors={authors} />
  );

  const firstAuthorNode = getByText(authors[0].name);
  const secondAuthorNode = getByText(authors[1].name);

  expect(firstAuthorNode.getAttribute('href')).toEqual(authors[0].href);
  expect(secondAuthorNode.getAttribute('href')).toEqual(authors[1].href);
});

test('Renders correct byline sentence for 1 author', () => {
  const props = defaultProps();
  props.authors = [{ name: 'Jim', href: '/bio/jim' }];

  const { getByText } = render(
    <ContentHeader title={props.title} authors={props.authors} />
  );

  const authorNode = getByText(props.authors[0].name);

  expect(authorNode.textContent).toEqual(props.authors[0].name);
  expect(authorNode.getAttribute('href')).toBe(props.authors[0].href);
});

test('Renders correct byline sentence for 2 authors', () => {
  const props = defaultProps();

  const { getByText, getByTestId } = render(
    <ContentHeader title={props.title} authors={props.authors} />
  );

  const node = getByTestId('contentByline');
  const firstAuthorNode = getByText(props.authors[0].name);
  const secondAuthorNode = getByText(props.authors[1].name);

  expect(firstAuthorNode.textContent).toBe(props.authors[0].name);
  expect(firstAuthorNode.getAttribute('href')).toBe(props.authors[0].href);
  expect(secondAuthorNode.textContent).toBe(props.authors[1].name);
  expect(secondAuthorNode.getAttribute('href')).toBe(props.authors[1].href);
  expect(node.textContent).toBe('By Jim and Bill');
});

test('Renders correct byline sentence for 3 or more authors', () => {
  const props = defaultProps();
  props.authors = [
    { name: 'Kyle', href: '/bio/kyle' },
    { name: 'Kenny', href: '/bio/kenny' },
    { name: 'Stan', href: '/bio/stan' },
    { name: 'Cartman', href: '/bio/cartman' }
  ];

  const { getByText, getByTestId } = render(
    <ContentHeader title={props.title} authors={props.authors} />
  );

  const node = getByTestId('contentByline');
  const firstAuthorNode = getByText(props.authors[0].name);
  const secondAuthorNode = getByText(props.authors[1].name);
  const thirdAuthorNode = getByText(props.authors[2].name);
  const fourthAuthorNode = getByText(props.authors[3].name);

  expect(firstAuthorNode.textContent).toBe(props.authors[0].name);
  expect(firstAuthorNode.getAttribute('href')).toBe(props.authors[0].href);
  expect(secondAuthorNode.textContent).toBe(props.authors[1].name);
  expect(secondAuthorNode.getAttribute('href')).toBe(props.authors[1].href);
  expect(thirdAuthorNode.textContent).toBe(props.authors[2].name);
  expect(thirdAuthorNode.getAttribute('href')).toBe(props.authors[2].href);
  expect(fourthAuthorNode.textContent).toBe(props.authors[3].name);
  expect(fourthAuthorNode.getAttribute('href')).toBe(props.authors[3].href);
  expect(node.textContent).toBe('By Kyle, Kenny, Stan and Cartman');
});

test('Renders publish date if prop exists', () => {
  const { title, publishDate } = defaultProps();

  const { getByText } = render(
    <ContentHeader title={title} publishDate={publishDate} />
  );
  const node = getByText('January 12, 2018');

  expect(node).toBeDefined();
});

test('Does not render date if publishDate prop is empty', () => {
  const { title } = defaultProps();

  const { container } = render(<ContentHeader title={title} />);

  const node = container.getElementsByTagName('time');

  expect(node.length).toBe(0);
});

test('Renders the Heading component with appropriate heading level', () => {
  const { title } = defaultProps();

  const { getByText } = render(
    <ContentHeader title={title} headingLevel={3} />
  );

  const node = getByText(title);

  expect(node.tagName).toBe('H3');
  expect(node.textContent).toBe(title);
});

test('Renders the Heading component as an H1 if headingLevel is not specified', () => {
  const { title } = defaultProps();

  const { getByText } = render(<ContentHeader title={title} />);

  const node = getByText(title);

  expect(node.tagName).toBe('H1');
  expect(node.textContent).toBe(title);
});

test('Renders the subtitle if prop exists', () => {
  const { title, subtitle } = defaultProps();

  const { getByText } = render(
    <ContentHeader title={title} subtitle={subtitle} />
  );

  const node = getByText(subtitle);

  expect(node.textContent).toBe(subtitle);
});

test('Does not render subtitle if subtitle prop is empty', () => {
  const { title } = defaultProps();

  const { container } = render(<ContentHeader title={title} />);

  const node = container.getElementsByClassName('content_subtitle');

  expect(node.length).toBe(0);
});

test('Renders tag if prop exists', () => {
  const { title, tag } = defaultProps();

  const { getByText } = render(<ContentHeader title={title} tag={tag} />);

  const node = getByText(tag.tagName);

  expect(node.getAttribute('href')).toBe(tag.href);
  expect(node.textContent).toBe(tag.tagName);
});

test('Does not render TagLink component if tag prop is empty', () => {
  const { title } = defaultProps();

  const { container } = render(<ContentHeader title={title} />);

  const node = container.getElementsByClassName('tag');

  expect(node.length).toBe(0);
});
