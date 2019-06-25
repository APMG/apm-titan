import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Hero from '../Hero';
import HeroInner from '../HeroInner';
import { data } from '../../../testdata/hero';

afterEach(cleanup);

test('Always renders an article element', () => {
  const { container } = render(<Hero image={data.image} title={data.title} />);
  expect(container.querySelectorAll('article')).toHaveLength(1);
});

test('Throws an error when a required value is missing ', () => {
  expect(() => {
    render(<Hero title={data.title} />);
  }).toThrow();
});

test('Hero optional tag value is not rendered when a value is not passed in.', () => {
  const { container } = render(<Hero image={data.image} title={data.title} />);
  let tagEle = container.querySelectorAll('.tag');
  expect(tagEle).toHaveLength(0);
});

test('Hero optional tag value is rendered when a value is passed in.', () => {
  const { container } = render(
    <Hero image={data.image} title={data.title} tag={data.tag} />
  );
  let tagEle = container.querySelectorAll('.tag');
  expect(tagEle).toHaveLength(1);
});

test('Hero optional href value is not rendered when a value is not passed in.', () => {
  const { container } = render(<Hero image={data.image} title={data.title} />);
  let LinkTag = container.getElementsByTagName('Link');
  let anchorTag = container.getElementsByTagName('Link');
  expect(LinkTag).toHaveLength(0);
  expect(anchorTag).toHaveLength(0);
});

test('Hero optional href value is rendered when a value is passed in.', () => {
  const { container } = render(
    <Hero image={data.image} title={data.title} href={data.href} />
  );
  const anchors = container.getElementsByTagName('a');
  expect(anchors).toHaveLength(1);
  expect(anchors[0].attributes.getNamedItem('href').value).toEqual(
    `/${data.href}`
  );
});

test('Hero optional href value is rendered when a value is passed in.', () => {
  const { container } = render(
    <Hero href={data.href} image={data.image} title={data.title} />
  );
  expect(container.querySelectorAll('.item_content_href')).toHaveLength(0);
});

test('Hero img value is always rendered.', () => {
  const { container } = render(<HeroInner image={data.image} />);
  expect(container.querySelectorAll('figure.item_figure')).toHaveLength(1);
});

test('Throws an error when a required image value is missing ', () => {
  expect(() => {
    render(<HeroInner image={data.image} button={true} />);
  }).toThrow();
});

test('Hero optional subHead value is not rendered when a value is not passed in.', () => {
  const { container } = render(<Hero image={data.image} title={data.title} />);
  expect(container.querySelectorAll('.item_content_subHead')).toHaveLength(0);
});

test('Hero optional contributorsText value is not rendered when a value is not passed in.', () => {
  const { container } = render(<Hero image={data.image} title={data.title} />);
  expect(
    container.querySelectorAll('.item_content_contributorsText')
  ).toHaveLength(0);
});
