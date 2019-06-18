import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image } from 'apm-mimas';
import { image } from '../../../testdata/image';
import Content from '../Content';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

const apmImage = <Image image={image} />;
const props = {
  title: 'this is a title',
  bodyHtml: 'body field'
};

describe('Content component', () => {
  test('renders ContentHeader', () => {
    const { getByText } = render(<Content title={props.title} />);
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
      <Content title={props.title} image={apmImage} />
    );

    expect(
      getByAltText('Serena Brook opens our show at The Town Hall')
    ).toBeDefined();
  });

  test('does not render ContentFigure if bodyHtml prop is empty', () => {
    const { container } = render(<Content title={props.title} />);
    expect(container.getElementsByClassName('figure').length).toBe(0);
  });
});
