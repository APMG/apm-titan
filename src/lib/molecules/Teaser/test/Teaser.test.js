import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { image } from '../test/data/image';
import Teaser from '../Teaser';
import 'jest-prop-type-error';

afterEach(cleanup);

const href = '/the/url/path';
const title = 'This Here Is the Title';
const publishDate = '2019-02-26T11:48:40+00:00';
const prettyDate = 'February 26, 2019';
const contributors = ['Opie Schmuck', 'Opiette Schmuck'];
const contributorsText = 'By Opie Schmuck and Opiette Schmuck';
const description = 'This here is the description.';
const headingLevel = 3;

// SUCCESSES

test('Always renders a root div', () => {
  const { container } = render(
    <Teaser id="1234" headingLevel={headingLevel} href={href} title={title} />
  );

  expect(container.querySelectorAll('.teaser')).toHaveLength(1);
});

test('Contributors string is rendered correctly when contributors array prop is provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      href={href}
      image={image}
      title={title}
      publishDate={publishDate}
      contributors={contributors}
      description={description}
      headingLevel={headingLevel}
    />
  );

  expect(container.querySelector('.teaser_contributors').textContent).toEqual(
    contributorsText
  );
});

test('Image component is rendered correctly when image prop is provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      href={href}
      image={image}
      title={title}
      publishDate={publishDate}
      contributors={contributors}
      description={description}
      headingLevel={headingLevel}
    />
  );

  expect(container.querySelector('img').getAttribute('src')).toEqual(
    'https://img.publicradio.org/images/20181220-serena-brook-opens-our-show-at-the-town-hall.jpg'
  );
  expect(container.querySelector('img').getAttribute('srcset')).toEqual(
    'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/thumbnail/e8796f-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 120w,https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/thumbnail/dfad0f-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 300w'
  );
});

test('Date and time are rendered correctly if publishDate prop has been provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      href={href}
      image={image}
      title={title}
      publishDate={publishDate}
      contributors={contributors}
      description={description}
      headingLevel={headingLevel}
    />
  );
  const timeEle = container.querySelector('time');

  expect(timeEle.attributes.getNamedItem('dateTime').value).toEqual(
    publishDate
  );
  expect(timeEle.textContent).toEqual(prettyDate);
});

test('The external link is rendered correctly if href prop has been provided', () => {
  const { container } = render(
    <Teaser id="1234" href={href} title={title} headingLevel={headingLevel} />
  );

  expect(
    container.querySelector('a').attributes.getNamedItem('href').value
  ).toEqual(href);
});

test('The heading level is 3 if the headingLevel prop passed in is 3', () => {
  const { container } = render(
    <Teaser id="1234" href={href} title={title} headingLevel={headingLevel} />
  );
  expect(container.querySelectorAll('h3').length).toBe(1);
});

test('The heading has class hdg-2 if the headingLevel prop passed in is 2', () => {
  const level = 2;
  const { container } = render(
    <Teaser id="1234" href={href} title={title} headingLevel={level} />
  );
  // console.log(prettyDOM(container))
  expect(container.querySelector('h2').classList.contains('hdg-2')).toBe(true);
});

// FALURES

test('Throws an error when required value is missing', () => {
  expect(() => {
    render(
      <Teaser
        id="1234"
        contributors={contributors}
        headingLevel={headingLevel}
        image={image}
        publishDate={publishDate}
      />
    );
  }).toThrow();
});

test('Teaser date is not rendered when the publishDate prop is not provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      description={description}
      headingLevel={headingLevel}
      href={href}
      image={image}
      title={title}
    />
  );
  expect(container.querySelectorAll('time')).toHaveLength(0);
});

test('Teaser contributors are not rendered when the contributors prop is not provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      description={description}
      headingLevel={headingLevel}
      href={href}
      image={image}
      title={title}
    />
  );
  expect(container.querySelectorAll('.teaser_contributors')).toHaveLength(0);
});

test('Teaser description is not rendered when the description prop is not provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      headingLevel={headingLevel}
      href={href}
      image={image}
      title={title}
    />
  );
  expect(container.querySelectorAll('.teaser_body.UserContent')).toHaveLength(
    0
  );
});

test('Teaser image is not rendered when the image prop is not provided', () => {
  const { container } = render(
    <Teaser id="1234" headingLevel={headingLevel} href={href} title={title} />
  );
  expect(container.querySelectorAll('image')).toHaveLength(0);
  expect(container.querySelectorAll('figure')).toHaveLength(0);
});

test('Teaser tag is not rendered when the tag prop is not provided', () => {
  const { container } = render(
    <Teaser id="1234" headingLevel={headingLevel} href={href} title={title} />
  );
  expect(container.querySelectorAll('.tag')).toHaveLength(0);
});
