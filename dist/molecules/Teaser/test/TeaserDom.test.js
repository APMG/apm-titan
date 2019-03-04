import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Teaser from '../Teaser';

afterEach(cleanup);

const href = 'the/url/path';
const image = {
  src:
    'https://img.apmcdn.org/05999f8278d68f786d78d322e71230a0ada20054/normal/810ee9-20181126-an-artist-s-depiction-of-insight.jpg',
  srcset:
    'https://img.apmcdn.org/05999f8278d68f786d78d322e71230a0ada20054/normal/021a06-20181126-an-artist-s-depiction-of-insight.jpg 400w,https://img.apmcdn.org/05999f8278d68f786d78d322e71230a0ada20054/normal/810ee9-20181126-an-artist-s-depiction-of-insight.jpg 600w',
  alt: "An artist's depiction of InSight"
};
const title = 'This Here Is the Title';
const publishDate = 'August 26, 2000';
const contributors = ['Opie Schmuck', 'Opiette Schmuck'];
const contributorsText = 'By Opie Schmuck, and Opiette Schmuck';
const description = 'This here is the description.';
const headingLevel = 3;

test('Resulting markup has correct CSS class and renders a Teaser correctly', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
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
  expect(timeEle.textContent).toEqual(publishDate);
  expect(
    container.querySelector('.item_content_contributors').textContent
  ).toEqual(contributorsText);
  expect(
    container.querySelector('img').attributes.getNamedItem('src').value
  ).toEqual(image.src);
  expect(
    container.querySelector('source').attributes.getNamedItem('srcSet').value
  ).toEqual(image.srcset);
  expect(
    container.querySelector('img').attributes.getNamedItem('alt').value
  ).toEqual(image.alt);
  expect(container.querySelector(`h${headingLevel}`).textContent).toEqual(
    title
  );
});

test('Resulting markup has correct CSS class and renders a Teaser correctly', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      href={href}
      title={title}
      headingLevel={headingLevel}
    />
  );
  expect(
    container.querySelector('a').attributes.getNamedItem('href').value
  ).toEqual(`/story/${href}`);
});

test('Expect the heading to have heading level 3 if props heading level passed in is 3', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      href={href}
      title={title}
      headingLevel={headingLevel}
    />
  );
  expect(container.querySelectorAll('h3').length).toBe(1);
});

test('Expect the heading to have class hdg-2 if props heading level passed in is 2', () => {
  const level = 2;
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      href={href}
      title={title}
      headingLevel={level}
    />
  );
  expect(container.querySelector('h2').classList.contains('hdg-2')).toBe(true);
});
