import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventHeader from '../EventHeader';

afterEach(cleanup);

const defaultProps = {
  title: 'this is a title',
  headingLevel: 2,
  publishDate: 'Feb 11, 2019',
  subtitle: 'Sponsored by Minnesota Public Radio',
  tag: {
    href: '/taglink',
    tagName: 'tag'
  }
};

test('Renders correct title at correct heading level', () => {
  const { getByText } = render(
    <EventHeader title={'this is a title'} headingLevel={2} />
  );
  const titleNode = getByText('this is a title');

  expect(titleNode.textContent).toBe('this is a title');
  expect(titleNode.tagName).toBe('H2');
});

test('Heading level is H1 if none are specified in the props', () => {
  const { getByText } = render(<EventHeader title={'this is a title'} />);
  const titleNode = getByText('this is a title');

  expect(titleNode.textContent).toBe('this is a title');
  expect(titleNode.tagName).toBe('H1');
});

test('Renders publish date if prop is given', () => {
  const { getByText } = render(
    <EventHeader title={'this is a title'} publishDate={'Feb 11, 2019'} />
  );
  const dateNode = getByText('Feb 11, 2019');

  expect(dateNode.textContent).toBe('Feb 11, 2019');
});

test('Does not render publish date if publishDate prop is not given', () => {
  const { container } = render(<EventHeader title={'this is a title'} />);
  const timeNodes = container.getElementsByTagName('time');

  expect(timeNodes).toHaveLength(0);
});

test('Renders the subtitle if prop is given', () => {
  const { getByText } = render(
    <EventHeader
      title={'this is a title'}
      subtitle={'Sponsored by Minnesota Public Radio'}
    />
  );
  const subtitleNode = getByText('Sponsored by Minnesota Public Radio');

  expect(subtitleNode.textContent).toBe('Sponsored by Minnesota Public Radio');
});

test('Renders a tag if the prop is given', () => {
  const { getByText } = render(
    <EventHeader title={'this is a title'} tag={defaultProps.tag} />
  );
  const tagNode = getByText(defaultProps.tag.tagName);

  expect(tagNode.textContent).toBe('tag');
  expect(tagNode.getAttribute('href')).toBe('/taglink');
});

test('The following optional sections are  not rendered when their corresponding prop is not given -- subtitle and tag ', () => {
  const { container } = render(<EventHeader title={'this is a title'} />);

  expect(container.querySelectorAll('.event_subtitle')).toHaveLength(0);
  expect(container.querySelectorAll('.tag')).toHaveLength(0);
});
