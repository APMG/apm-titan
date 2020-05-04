import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventHeader from '../EventHeader';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
function defaultProps() {
  const title = 'this is a title';
  const headingLevel = 2;
  const publishDate = 'Feb 11, 2019';
  const subtitle = 'Sponsored by Minnesota Public Radio';
  const tag = {
    href: '/taglink',
    tagName: 'tag'
  };

  return {
    title,
    headingLevel,
    publishDate,
    subtitle,
    tag
  };
}

test('Throws an error when required `title` prop is missing', () => {
  expect(() => {
    render(<EventHeader />);
  }).toThrow();
});

test('Renders correct title at correct heading level', () => {
  const { title, headingLevel } = defaultProps();

  const { getByText } = render(
    <EventHeader title={title} headingLevel={headingLevel} />
  );

  const titleNode = getByText(title);

  expect(titleNode.textContent).toBe('this is a title');
  expect(titleNode.tagName).toBe('H2');
});

test('Heading level is H1 if none are specified in the props', () => {
  const { title } = defaultProps();

  const { getByText } = render(<EventHeader title={title} />);

  const titleNode = getByText(title);

  expect(titleNode.textContent).toBe(title);
  expect(titleNode.tagName).toBe('H1');
});

test('Renders publish date if prop exists', () => {
  const { title, publishDate } = defaultProps();

  const { getByText } = render(
    <EventHeader title={title} publishDate={publishDate} />
  );

  const dateNode = getByText(publishDate);

  expect(dateNode.textContent).toBe('Feb 11, 2019');
});

test('Does not render publish date if publishDate prop is not provided', () => {
  const { title } = defaultProps();

  const { container } = render(<EventHeader title={title} />);

  expect(container.getElementsByTagName('time').length).toBe(0);
});

test('Renders the subtitle if prop is provided', () => {
  const { title, subtitle } = defaultProps();

  const { getByText } = render(
    <EventHeader title={title} subtitle={subtitle} />
  );

  const subtitleNode = getByText(subtitle);

  expect(subtitleNode.textContent).toBe('Sponsored by Minnesota Public Radio');
});

test('Does not render subtitle if prop is not provided', () => {
  const { title } = defaultProps();

  const { container } = render(<EventHeader title={title} />);

  expect(container.getElementsByClassName('event_subtitle').length).toBe(0);
});

test('Renders a tag if the prop is provided', () => {
  const { title, tag } = defaultProps();

  const { getByText } = render(<EventHeader title={title} tag={tag} />);

  const tagNode = getByText(tag.tagName);

  expect(tagNode.textContent).toBe('tag');
  expect(tagNode.getAttribute('href')).toBe('/taglink');
});

test('does not render TagLink component if tag prop is empty', () => {
  const { title } = defaultProps();

  const { container } = render(<EventHeader title={title} />);

  expect(container.getElementsByTagName('tag').length).toBe(0);
});
