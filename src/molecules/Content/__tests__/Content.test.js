import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image } from 'apm-mimas';
import { image } from '../../../__testdata__/image';
import Content from '../Content';

afterEach(cleanup);

const apmImage = <Image image={image} />;

const expected = {
  srcset:
    'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/e428bc-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/58b2ba-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 600w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/95c885-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1000w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/b3a373-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/6ceb83-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 2000w'
};

test('Renders an H1 header by default and with the correct content', () => {
  const { getByText } = render(<Content title={'this is a title'} />);
  const headerNode = getByText('this is a title');

  expect(headerNode.classList).toContain('hdg');
  expect(headerNode.classList).toContain('hdg-1');
  expect(headerNode.textContent).toBe('this is a title');
});

test('Renders an H3 header given a headingLevel prop of 3', () => {
  const { getByText } = render(
    <Content title={'another title'} headingLevel={3} />
  );
  const headerNode = getByText('another title');

  expect(headerNode.classList).toContain('hdg');
  expect(headerNode.classList).toContain('hdg-3');
  expect(headerNode.classList).not.toContain('hdg-1');
  expect(headerNode.textContent).toBe('another title');
});

test('Renders basic figure if image prop is given', () => {
  const { getByAltText } = render(
    <Content title={'another title'} image={apmImage} />
  );
  const imageNode = getByAltText(
    'Serena Brook opens our show at The Town Hall'
  );

  expect(imageNode.getAttribute('srcset')).toBe(expected.srcset);
});

test('Renders more detailed figure if optional image props -- imageCaption, -Credit, and -CreditHref -- are provided', () => {
  const { getByText } = render(
    <Content
      title={'the servant clown to two masters'}
      image={apmImage}
      imageCaption={'Sonic the Hedgehog'}
      imageCredit="BDG"
      imageCreditHref="https://www.youtube.com/playlist?list=PLaDrN74SfdT7Ueqtwn_bXo1MuSWT0ji2w"
    />
  );
  const figureNode = getByText('Sonic the Hedgehog');
  const creditNode = getByText('BDG');

  expect(figureNode.textContent).toBe('Sonic the Hedgehog');
  expect(creditNode.getAttribute('href')).toBe(
    'https://www.youtube.com/playlist?list=PLaDrN74SfdT7Ueqtwn_bXo1MuSWT0ji2w'
  );
});

test('Renders ContentBody if bodyHtml prop is given', () => {
  const { container } = render(
    <Content title={'this is a title'} bodyHtml={'body field'} />
  );
  const bodyNode = container.firstChild.querySelector('.userContent');

  expect(bodyNode.textContent).toBe('body field');
});

test('The optional sections bodyHtml and image are not rendered when their corresponding prop is not given', () => {
  const { container } = render(<Content title={'another title'} />);
  const bodyNodes = container.querySelectorAll('.content_body');
  const imageNodes = container.querySelectorAll('img');

  expect(bodyNodes).toHaveLength(0);
  expect(imageNodes).toHaveLength(0);
});
