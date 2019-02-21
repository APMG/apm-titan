import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Teaser from '../Teaser';
import 'jest-prop-type-error';

afterEach(cleanup);

const href = '/the/url/path';
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
const description = 'This here is the description.';
const headingLevel = 3;

test('Always renders an article div', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      headingLevel={headingLevel}
      href={href}
      title={title}
    />
  );
  expect(container.querySelectorAll('article')).toHaveLength(1);
});

test('Throws an error when a required value is missing ', () => {
  expect(() => {
    render(
      <Teaser
        id="1234"
        resourceType="story"
        contributors={contributors}
        headingLevel={headingLevel}
        image={image}
        publishDate={publishDate}
      />
    );
  }).toThrow();
});

test('Teaser optional publishing date value is not rendered when a value is not passed in.', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      description={description}
      headingLevel={headingLevel}
      href={href}
      image={image}
      title={title}
    />
  );
  expect(container.querySelectorAll('time')).toHaveLength(0);
});

test('Teaser optional contributors value is not rendered when a value is not passed in.', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      description={description}
      headingLevel={headingLevel}
      href={href}
      image={image}
      title={title}
    />
  );
  expect(container.querySelectorAll('.item_content_contributors')).toHaveLength(
    0
  );
});

test('Teaser optional description value is not rendered when a value is not passed in.', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      headingLevel={headingLevel}
      href={href}
      image={image}
      title={title}
    />
  );
  expect(
    container.querySelectorAll('.item_content_body.UserContent')
  ).toHaveLength(0);
});

test('Teaser optional image value is not rendered when a value is not passed in.', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      headingLevel={headingLevel}
      href={href}
      title={title}
    />
  );
  expect(container.querySelectorAll('image')).toHaveLength(0);
  expect(container.querySelectorAll('figure')).toHaveLength(0);
});

test('Teaser optional tag value is not rendered when a value is not passed in.', () => {
  const { container } = render(
    <Teaser
      id="1234"
      resourceType="story"
      headingLevel={headingLevel}
      href={href}
      title={title}
    />
  );
  expect(container.querySelectorAll('.tag')).toHaveLength(0);
});
