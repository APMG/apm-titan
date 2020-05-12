import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image } from 'apm-mimas';
import { image } from '../../../__testdata__/image';
import Content from '../Content';

// automatically unmount and cleanup DOM after the test is finished
afterEach(cleanup);

const apmImage = <Image image={image} />;

const defaultProps = {
  title: 'this is a title',
  bodyHtml: 'body field'
};

test('renders ContentHeader with correct classes and content', () => {
  const { getByText } = render(<Content title={defaultProps.title} />);

  const node = getByText('this is a title');

  expect(node.classList.contains('hdg')).toBe(true);
  expect(node.classList.contains('hdg-1')).toBe(true);
});

test('renders ContentBody if bodyHtml prop exists', () => {
  const { container } = render(
    <Content title={defaultProps.title} bodyHtml={defaultProps.bodyHtml} />
  );

  const node = container.firstChild.getElementsByClassName('userContent')[0];

  expect(node.textContent).toBe('body field');
});

test('does not render ContentBody if bodyHtml prop is empty', () => {
  const { container } = render(<Content title={defaultProps.title} />);
  const node = container.firstChild;

  expect(node.getElementsByClassName('content_body').length).toBe(0);
});

test('renders ContentFigure if image prop exists', () => {
  const expected = {
    srcset:
      'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/e428bc-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/58b2ba-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 600w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/95c885-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1000w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/b3a373-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/6ceb83-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 2000w'
  };

  const { getByAltText } = render(
    <Content title={defaultProps.title} image={apmImage} />
  );
  const node = getByAltText('Serena Brook opens our show at The Town Hall');

  expect(node.getAttribute('srcset')).toBe(expected.srcset);
});
