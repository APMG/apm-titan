import React from 'react';
import { render, cleanup } from 'react-testing-library';
import EventHeader from '../EventHeader';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const testProps = {
  title: 'this is a title',
  headingLevel: 1,
  publishDate: 'Feb 11, 2019',
  subtitle: 'Sponsored by Minnesota Public Radio',
  tag: { to: '/taglink', tagName: 'tag' }
};

describe('EventHeader component', () => {
  test('renders title prop', () => {
    const { getByText } = render(<EventHeader title={testProps.title} />);
    expect(getByText(testProps.title)).toBeDefined();
  });

  test('throws an error when required `title` prop is missing', () => {
    expect(() => {
      render(<EventHeader />);
    }).toThrow();
  });

  test('renders publish date if prop exists', () => {
    const { getByText } = render(
      <EventHeader
        title={testProps.title}
        publishDate={testProps.publishDate}
      />
    );
    const node0 = getByText(testProps.publishDate);
    expect(node0).toBeDefined();
  });

  test('does not render publish date if publishDate prop is empty', () => {
    const { container } = render(<EventHeader title={testProps.title} />);
    expect(container.getElementsByTagName('time').length).toBe(0);
  });

  test('renders the Heading component with appropriate heading level', () => {
    const { getByText } = render(
      <EventHeader title={testProps.title} headingLevel={3} />
    );
    expect(getByText(testProps.title).tagName).toBe('H3');
  });

  test('renders the Heading component with an h1 if headingLevel not specified', () => {
    const { getByText } = render(<EventHeader title={testProps.title} />);
    expect(getByText(testProps.title).tagName).toBe('H1');
  });

  test('renders the subtitle if prop exists', () => {
    const { getByText } = render(
      <EventHeader title={testProps.title} subtitle={testProps.subtitle} />
    );
    expect(getByText(testProps.subtitle)).toBeDefined();
  });

  test('does not render subtitle if subtitle prop is empty', () => {
    const { container } = render(<EventHeader title={testProps.title} />);
    expect(container.getElementsByClassName('event_subtitle').length).toBe(0);
  });

  test('renders tag if prop exists', () => {
    const { getByText } = render(
      <EventHeader title={testProps.title} tag={testProps.tag} />
    );
    const node = getByText(testProps.tag.tagName);
    expect(node).toBeDefined();
    expect(node.innerHTML).toBe('tag');
    expect(node.getAttribute('href')).toBe(testProps.tag.to);
  });

  test('does not render TagLink component if tag prop is empty', () => {
    const { container } = render(<EventHeader title={testProps.title} />);
    expect(container.getElementsByTagName('tag').length).toBe(0);
  });
});
