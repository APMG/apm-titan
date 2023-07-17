import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { image } from '../../../__testdata__/image';
import { Image } from 'apm-mimas';
import Teaser from '../Teaser';
import Time from '../../../atoms/Time/Time';

afterEach(cleanup);

jest.mock('next/router', () => {
  return {
    ...jest.requireActual('next/router'),
    useRouter: jest.fn()
  };
});

const defaultProps = {
  href: '/the/url/path',
  title: 'This Here Is the Title',
  contributors: ['Opie Schmuck', 'Opiette Schmuck'],
  description: 'This here is the description.',
  dateTime: '2019-02-26T11:48:40+00:00',
  video: {
    url: 'https://mpr.apmcdn.org/video/apmreports/chicagoclean.mp4',
    caption: 'this is a video caption',
    background: 'true',
    credit: { name: 'credit name' }
  }
};

const expected = {
  srcset:
    'https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/e428bc-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/58b2ba-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 600w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/95c885-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1000w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/b3a373-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 1400w, https://img.apmcdn.org/c2c452354fbff94d720ba8f86e2c71ba7427b306/widescreen/6ceb83-20181220-serena-brook-opens-our-show-at-the-town-hall.jpg 2000w'
};

test('Renders a basic teaser with essential props -- href, title, headingLevel', () => {
  const { container } = render(
    <Teaser
      headingLevel={3}
      href={defaultProps.href}
      title={defaultProps.title}
    />
  );
  const teaserNodes = container.querySelectorAll('.teaser');

  expect(teaserNodes).toHaveLength(1);
  expect(teaserNodes[0].textContent).toBe('This Here Is the Title');
});

test('The heading has class hdg-2 if the headingLevel prop passed in is 2', () => {
  const { container } = render(
    <Teaser
      href={defaultProps.href}
      title={defaultProps.title}
      headingLevel={2}
    />
  );
  const headingNode = container.querySelector('h2');

  expect(headingNode.classList.contains('hdg-2')).toBe(true);
});

test('Applies elementClass as a className when one is supplied', () => {
  const { getByTestId } = render(
    <Teaser
      headingLevel={3}
      href={defaultProps.href}
      title={defaultProps.title}
      elementClass="testClass"
    />
  );
  const teaserNode = getByTestId('relativeLink').parentNode;

  expect(teaserNode.classList).toContain('testClass');
});

test('Contributors string is rendered correctly when an array with two names is given', () => {
  const { getByText } = render(
    <Teaser
      href={defaultProps.href}
      title={defaultProps.title}
      publishDate={
        <Time dateTime={defaultProps.dateTime} formatString="MMM DD, YYYY" />
      }
      contributors={defaultProps.contributors}
      headingLevel={3}
    />
  );
  const contributorsNode = getByText('By Opie Schmuck and Opiette Schmuck');

  expect(contributorsNode.textContent).toBe(
    'By Opie Schmuck and Opiette Schmuck'
  );
});

test('Correct image is rendered when image prop is given', () => {
  const { getByAltText } = render(
    <Teaser
      href={defaultProps.href}
      image={<Image image={image} />}
      title={defaultProps.title}
      headingLevel={3}
    />
  );
  const imgNode = getByAltText('Serena Brook opens our show at The Town Hall');

  expect(imgNode.getAttribute('srcset')).toEqual(expected.srcset);
});

test('Date and time are rendered correctly if publishDate prop has been given', () => {
  const { getByText } = render(
    <Teaser
      href={defaultProps.href}
      title={defaultProps.title}
      publishDate={
        <Time dateTime={defaultProps.dateTime} formatString="MMM DD, YYYY" />
      }
      contributors={defaultProps.contributors}
      headingLevel={3}
    />
  );
  const timeNode = getByText('Feb 26, 2019');

  expect(timeNode.getAttribute('datetime')).toBe(defaultProps.dateTime);
  expect(timeNode.textContent).toBe('Feb 26, 2019');
});

test('The following optional sections are not rendered when their corresponding prop is not given -- publishDate, contributors, description, tag, and image', () => {
  const { container } = render(
    <Teaser
      headingLevel={3}
      href={defaultProps.href}
      title={defaultProps.title}
    />
  );

  expect(container.querySelectorAll('time')).toHaveLength(0);
  expect(container.querySelectorAll('.teaser_contributors')).toHaveLength(0);
  expect(container.querySelectorAll('.teaser_body.UserContent')).toHaveLength(
    0
  );
  expect(container.querySelectorAll('.tag')).toHaveLength(0);
  expect(container.querySelectorAll('image')).toHaveLength(0);
});

test('Renders video object', () => {
  const { container, getByText } = render(
    <Teaser
      headingLevel={3}
      href={defaultProps.href}
      title={defaultProps.title}
      video={defaultProps.video}
    />
  );

  const videoNode = getByText('this is a video caption');
  expect(videoNode.textContent).toBe('this is a video caption');
  expect(container.getElementsByClassName('figure_caption')).toHaveLength(1);
  expect(
    container.getElementsByClassName('figure_caption_content')
  ).toHaveLength(1);
  expect(container.getElementsByClassName('figure_credit')).toHaveLength(1);
});
