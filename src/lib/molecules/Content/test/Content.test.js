import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Content from '../Content';
import 'jest-prop-type-error';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

// Use this object for props that get reused
const props = {
  title: 'this is a title',
  bodyHtml: 'body field',
  image: {
    src: 'https://example.com/img.jpg',
    alt: 'some alt text'
  }
};

describe('Content component', () => {
  test('renders ContentHeader', () => {
    const { getByText } = render(
      <Content title={props.title} />
    );
    expect(getByText('this is a title')).toBeDefined();
  });

  test('renders ContentBody if bodyHtml prop exists', () => {
    const { getByText } = render(
      <Content title={props.title} bodyHtml={props.bodyHtml} />
    );
    expect(getByText(props.bodyHtml)).toBeDefined();
  });

  test('does not render ContentBody if bodyHtml prop is empty', () => {
    const { container } = render(<Content title={props.title} />);
    expect(container.getElementsByClassName('content_body').length).toBe(0);
  });

  test('renders ContentFigure if image prop exists', () => {
    const { getByAltText } = render(
      <Content title={props.title} image={props.image} />
    );
    expect(getByAltText(props.image.alt)).toBeDefined();
  });

  test('does not render ContentFigure if bodyHtml prop is empty', () => {
    const { container } = render(<Content title={props.title} />);
    expect(container.getElementsByClassName('figure').length).toBe(0);
  });
});
