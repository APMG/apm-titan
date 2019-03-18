import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ContentHeader from '../ContentHeader';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  title: 'this is a title',
  authors: [
    { name: 'Jim', href: '/bio/jim' },
    { name: 'Bill', href: '/bio/bill' }
  ],
  headingLevel: 1,
  publishDate: 'Jan 12, 2018',
  subtitle: 'this is a subtitle',
  tag: { to: '/taglink', tagName: 'tag' }
};

describe('ContentHeader component', () => {
  test('renders title prop', () => {
    const { getByText } = render(<ContentHeader title={testProps.title} />);
    expect(getByText(testProps.title)).toBeDefined();
  });

  test('throws an error when required `title` prop is missing', () => {
    expect(() => {
      render(<ContentHeader />);
    }).toThrow();
  });

  test('renders authors with correct href if prop exists', () => {
    const { getByText } = render(
      <ContentHeader title={testProps.title} authors={testProps.authors} />
    );
    const node0 = getByText(testProps.authors[0].name);
    const node1 = getByText(testProps.authors[1].name);
    expect(node0).toBeDefined();
    expect(node0.getAttribute('href')).toEqual(testProps.authors[0].href);
    expect(node1).toBeDefined();
    expect(node1.getAttribute('href')).toEqual(testProps.authors[1].href);
  });

  test('does not render byline if authors prop is empty', () => {
    const { container } = render(<ContentHeader title={testProps.title} />);
    expect(container.getElementsByClassName('content_byline').length).toBe(0);
  });

  test('renders publish date if prop exists', () => {
    const { getByText } = render(
      <ContentHeader
        title={testProps.title}
        publishDate={testProps.publishDate}
      />
    );
    const node0 = getByText('January 12, 2018');
    expect(node0).toBeDefined();
  });

  test('does not render publish date if publishDate prop is empty', () => {
    const { container } = render(<ContentHeader title={testProps.title} />);
    // Verify that the publish date html isn't rendered
    // expect(container.find('time').exists()).toBe(false);
    expect(container.getElementsByTagName('date').length).toBe(0);
  });

  test('renders the Heading component with appropriate heading level', () => {
    const { getByText } = render(
      <ContentHeader title={testProps.title} headingLevel={3} />
    );
    expect(getByText(testProps.title).tagName).toBe('H3');
  });

  test('renders the Heading component with an h1 if headingLevel not specified', () => {
    const { getByText } = render(<ContentHeader title={testProps.title} />);
    expect(getByText(testProps.title).tagName).toBe('H1');
  });

  test('renders the subtitle if prop exists', () => {
    const { getByText } = render(
      <ContentHeader title={testProps.title} subtitle={testProps.subtitle} />
    );
    expect(getByText(testProps.subtitle)).toBeDefined();
  });

  test('does not render subtitle if subtitle prop is empty', () => {
    const { container } = render(<ContentHeader title={testProps.title} />);
    expect(container.getElementsByClassName('content_subtitle').length).toBe(0);
  });

  test('renders tag if prop exists', () => {
    const { getByText } = render(
      <ContentHeader title={testProps.title} tag={testProps.tag} />
    );
    const node = getByText(testProps.tag.tagName);
    expect(node).toBeDefined();
    expect(node.getAttribute('href')).toBe(testProps.tag.to);
  });

  test('does not render TagLink component if tag prop is empty', () => {
    const { container } = render(<ContentHeader title={testProps.title} />);
    expect(container.getElementsByClassName('tag').length).toBe(0);
  });
});
