import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Figure from '../Figure';
import { Image } from 'apm-mimas';
import { image } from '../../../__testdata__/image';

afterEach(cleanup);

function setup() {
  const apiImage = <Image image={image} />;
  const fallbackImage = (
    <Image
      fallbackSrc="https://www.fillmurray.com/g/400/300"
      alt="It's Bill Murray"
    />
  );

  const defaultProps = {
    caption: 'Caption Lorem Ipsum',
    credit: 'Credit Name',
    creditHref: 'https://www.test.url'
  };

  return { apiImage, fallbackImage, defaultProps };
}

test('Renders an image if the image object is given', () => {
  const { fallbackImage } = setup();
  const { getByAltText } = render(<Figure image={fallbackImage} />);
  const imageNode = getByAltText("It's Bill Murray");

  expect(imageNode.getAttribute('src')).toBe(
    'https://www.fillmurray.com/g/400/300'
  );
});

test('Renders caption', () => {
  const { apiImage, defaultProps } = setup();
  const { getByText } = render(
    <Figure image={apiImage} caption={defaultProps.caption} />
  );
  const captionNode = getByText(defaultProps.caption);

  expect(captionNode.textContent).toBe('Caption Lorem Ipsum');
});

test('Renders credit as a link if creditHref and credit are given', () => {
  const { defaultProps, apiImage } = setup();
  const { getByText } = render(<Figure {...defaultProps} image={apiImage} />);
  const creditNode = getByText(defaultProps.credit);

  expect(creditNode.tagName).toBe('A');
  expect(creditNode.textContent).toBe('Credit Name');
  expect(creditNode.getAttribute('href')).toBe('https://www.test.url');
});

test('Credit is not a link if creditHref is not given, but credit is', () => {
  const { defaultProps, apiImage } = setup();
  defaultProps.credit = null;
  const { getByText } = render(<Figure {...defaultProps} image={apiImage} />);
  const linkNode = getByText(defaultProps.caption);

  expect(linkNode.textContent).toBe('Caption Lorem Ipsum');
  expect(linkNode.tagName).not.toBe('A');
});

test('Renders credit without a link if creditHref is missing but credit is given', () => {
  const { apiImage, defaultProps } = setup();
  const { getByText } = render(
    <Figure image={apiImage} credit={defaultProps.credit} />
  );
  const creditNode = getByText(defaultProps.credit);

  expect(creditNode.tagName).not.toBe('A');
  expect(creditNode.textContent).toBe('Credit Name');
});

test('The following optional sections are not rendered when their corresponding prop is not given -- contributors, description, image, publishDate, and tag', () => {
  const { defaultProps, apiImage } = setup();
  const { container } = render(<Figure {...defaultProps} image={apiImage} />);

  expect(container.querySelectorAll('.teaser_contributors')).toHaveLength(0);
  expect(container.querySelectorAll('.tag')).toHaveLength(0);
  expect(container.querySelectorAll('image')).toHaveLength(0);
});

// TODO: AudioPlayButton

test('Throws an error when required image prop is empty', () => {
  expect(() => {
    render(<Figure />);
  }).toThrow();
});
