import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { image } from '../../../__testdata__/image';
import { Image } from 'apm-mimas';
import Teaser from '../Teaser';
import Time from '../../../atoms/Time/Time';

afterEach(cleanup);

const href = '/the/url/path';
const title = 'This Here Is the Title';
const dateTime = '2019-02-26T11:48:40+00:00';
const publishDate = <Time dateTime={dateTime} formatString="MMM dd, yyyy" />;
const prettyDate = 'Feb 26, 2019';
const contributors = ['Opie Schmuck', 'Opiette Schmuck'];
const contributorsText = 'By Opie Schmuck and Opiette Schmuck';
const description = 'This here is the description.';
const headingLevel = 3;
const TestImage = <Image image={image} />;

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
      image={TestImage}
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
      image={TestImage}
      title={title}
      publishDate={publishDate}
      contributors={contributors}
      description={description}
      headingLevel={headingLevel}
    />
  );

  expect(container.querySelector('img').getAttribute('srcset')).toEqual(
    'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/e428bc-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/58b2ba-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 600w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/95c885-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1000w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/b3a373-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/6ceb83-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 2000w'
  );
});

test('Date and time are rendered correctly if publishDate prop has been provided', () => {
  const { container } = render(
    <Teaser
      id="1234"
      href={href}
      image={TestImage}
      title={title}
      publishDate={publishDate}
      contributors={contributors}
      description={description}
      headingLevel={headingLevel}
    />
  );
  const timeEle = container.querySelector('time');

  expect(timeEle.attributes.getNamedItem('dateTime').value).toEqual(dateTime);
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

  expect(container.querySelector('h2').classList.contains('hdg-2')).toBe(true);
});

// FAILURES

test('Throws an error when required value is missing', () => {
  expect(() => {
    render(
      <Teaser
        id="1234"
        contributors={contributors}
        headingLevel={headingLevel}
        image={TestImage}
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
      image={TestImage}
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
      image={TestImage}
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
      image={TestImage}
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
